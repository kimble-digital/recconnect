// ===========================================================================
//  src/pages/api/contact.ts
//  Server endpoint that sends enquiry emails via Resend (REST API, no SDK).
//  - Validates input, blocks bots with a honeypot
//  - Structured JSON logs (visible in Vercel → Functions → Logs)
//  - A short reference on every request so you can trace it end to end
//  - Real error responses (4xx/5xx) so the form can show "it didn't send"
//
//  ENV VARS (set in Vercel → Project → Settings → Environment Variables):
//    RESEND_API_KEY   your Resend API key (required)
//    CONTACT_TO       where enquiries are delivered, e.g. enquiries@keybridge...
//    CONTACT_FROM     verified Resend sender, e.g. "Keybridge Website <noreply@yourdomain>"
// ===========================================================================
import type { APIRoute } from "astro";

export const prerender = false; // this route is server-rendered

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const esc = (s: string) =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));

export const POST: APIRoute = async ({ request }) => {
  // short, human-quotable reference shared with the user AND written to the logs
  const ref = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`).slice(0, 8).toUpperCase();
  const t0 = Date.now();
  const log = (level: "info" | "warn" | "error", msg: string, extra: Record<string, unknown> = {}) =>
    console[level](JSON.stringify({ tag: "contact", ref, msg, ...extra, ms: Date.now() - t0 }));

  try {
    // accept JSON or form-encoded
    const ct = request.headers.get("content-type") || "";
    const raw = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
    const data = raw as Record<string, string>;

    // honeypot: real users never fill this hidden field
    if ((data.company_website || "").trim()) {
      log("warn", "honeypot triggered");
      return json({ ok: true, ref }); // pretend success, drop silently
    }

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const phone = (data.phone || "").trim();
    const companyName = (data.company || "").trim();
    const message = (data.message || "").trim();
    const subject = (data.subject || "Website enquiry").trim();

    const fields: string[] = [];
    if (name.length < 2) fields.push("name");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) fields.push("email");
    if (message.length < 5) fields.push("message");
    if (fields.length) {
      log("warn", "validation failed", { fields });
      return json({ ok: false, ref, error: "Please check the highlighted fields and try again.", fields }, 400);
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const to = import.meta.env.CONTACT_TO || process.env.CONTACT_TO;
    const from = import.meta.env.CONTACT_FROM || process.env.CONTACT_FROM;
    if (!apiKey || !to || !from) {
      log("error", "email not configured", { hasKey: !!apiKey, hasTo: !!to, hasFrom: !!from });
      return json({ ok: false, ref, error: "Our contact form is temporarily unavailable. Please email or call us." }, 500);
    }

    const html = `
      <h2>Website enquiry: ${esc(subject)}</h2>
      <p><strong>Reference:</strong> ${ref}</p>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone) || "—"}</p>
      <p><strong>Company:</strong> ${esc(companyName) || "—"}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>`;
    const text =
      `Website enquiry: ${subject}\nReference: ${ref}\n\nName: ${name}\nEmail: ${email}\n` +
      `Phone: ${phone || "—"}\nCompany: ${companyName || "—"}\n\n${message}`;

    let res: Response;
    try {
      res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `[Website] ${subject} — ${name}`,
          html,
          text,
          tags: [{ name: "source", value: "website-contact" }, { name: "ref", value: ref }],
        }),
      });
    } catch (netErr) {
      log("error", "network error reaching Resend", { error: String(netErr) });
      return json({ ok: false, ref, error: "We couldn't send your message just now. Please try again, or call us." }, 502);
    }

    const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
    if (!res.ok) {
      log("error", "Resend rejected the send", { status: res.status, detail: body?.message });
      return json({ ok: false, ref, error: "We couldn't send your message just now. Please try again, or call us." }, 502);
    }

    log("info", "sent", { resendId: body.id, email, subject });
    return json({ ok: true, ref, id: body.id });
  } catch (err) {
    log("error", "unhandled exception", { error: String(err) });
    return json({ ok: false, ref, error: "Something went wrong on our side. Please try again." }, 500);
  }
};

// optional: make a stray GET obvious rather than a 404
export const GET: APIRoute = () =>
  json({ ok: false, error: "Use POST to submit the contact form." }, 405);
