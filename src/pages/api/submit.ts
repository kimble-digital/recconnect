// ===========================================================================
//  src/pages/api/submit.ts
//  Unified lead-capture endpoint for all site forms.
//  - Validates input, blocks bots with a honeypot
//  - Stores every submission as a row in Airtable (the lead list)
//  - Sends a notification email via Resend (REST API, no SDK)
//  - Succeeds if EITHER sink works; returns a short reference per request
//
//  ENV VARS (set in Vercel → Project → Settings → Environment Variables):
//    AIRTABLE_API_KEY   personal access token with data.records:write
//    AIRTABLE_BASE_ID   the base id (appXXXX…)
//    AIRTABLE_TABLE     table name (default "Submissions")
//    RESEND_API_KEY     Resend API key (optional, for email notifications)
//    CONTACT_TO         where notifications are delivered
//    CONTACT_FROM       verified Resend sender
//
//  Airtable table columns expected (single line text unless noted):
//    Type, Name, Email, Phone, Company, Role, Interest, Message,
//    Reference, Source
// ===========================================================================
import type { APIRoute } from "astro";

export const prerender = false;

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type FormType = "enquiry" | "partner" | "event-alert";

const LABELS: Record<FormType, string> = {
  enquiry: "Website enquiry",
  partner: "Partner enquiry",
  "event-alert": "Event alerts signup",
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const esc = (s: string) =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] as string));

const env = (k: string) => import.meta.env[k] || process.env[k];

export const POST: APIRoute = async ({ request }) => {
  const ref = (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}`).slice(0, 8).toUpperCase();
  const t0 = Date.now();
  const log = (level: "info" | "warn" | "error", msg: string, extra: Record<string, unknown> = {}) =>
    console[level](JSON.stringify({ tag: "submit", ref, msg, ...extra, ms: Date.now() - t0 }));

  try {
    const ct = request.headers.get("content-type") || "";
    const raw = ct.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());
    const data = raw as Record<string, string>;

    // Honeypot: real users never fill this hidden field
    if ((data.company_website || "").trim()) {
      log("warn", "honeypot triggered");
      return json({ ok: true, ref });
    }

    const formType = ((data.formType || "enquiry") as FormType);
    const typeLabel = LABELS[formType] || "Website submission";

    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const phone = (data.phone || "").trim();
    const company = (data.company || "").trim();
    const role = (data.role || "").trim();
    const interest = (data.interest || "").trim();
    const message = (data.message || "").trim();
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

    // Per-type validation
    const fields: string[] = [];
    if (!emailOk) fields.push("email");
    if (formType === "enquiry") {
      if (name.length < 2) fields.push("name");
      if (message.length < 5) fields.push("message");
    }
    if (formType === "partner") {
      if (name.length < 2) fields.push("name");
      if (company.length < 2) fields.push("company");
    }
    if (fields.length) {
      log("warn", "validation failed", { fields });
      return json({ ok: false, ref, error: "Please check the highlighted fields and try again.", fields }, 400);
    }

    // ── Store in Airtable ──
    const atKey = env("AIRTABLE_API_KEY");
    const atBase = env("AIRTABLE_BASE_ID");
    const atTable = env("AIRTABLE_TABLE") || "Submissions";
    let storedOk = false;
    if (atKey && atBase) {
      const fieldsOut: Record<string, string> = { Type: typeLabel, Email: email, Reference: ref, Source: "website" };
      if (name) fieldsOut.Name = name;
      if (phone) fieldsOut.Phone = phone;
      if (company) fieldsOut.Company = company;
      if (role) fieldsOut.Role = role;
      if (interest) fieldsOut.Interest = interest;
      if (message) fieldsOut.Message = message;
      try {
        const atRes = await fetch(`https://api.airtable.com/v0/${atBase}/${encodeURIComponent(atTable)}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${atKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({ typecast: true, records: [{ fields: fieldsOut }] }),
        });
        storedOk = atRes.ok;
        if (!atRes.ok) {
          const detail = (await atRes.text().catch(() => "")).slice(0, 300);
          log("error", "airtable rejected", { status: atRes.status, detail });
        }
      } catch (e) {
        log("error", "airtable network error", { error: String(e) });
      }
    }

    // ── Notify via Resend ──
    const apiKey = env("RESEND_API_KEY");
    const to = env("CONTACT_TO");
    const from = env("CONTACT_FROM");
    let mailedOk = false;
    if (apiKey && to && from) {
      const rows: [string, string][] = ([
        ["Type", typeLabel], ["Name", name], ["Email", email], ["Phone", phone],
        ["Company", company], ["Role", role], ["Interest", interest], ["Message", message],
      ] as [string, string][]).filter(([, v]) => v);
      const html =
        `<h2>${esc(typeLabel)}</h2><p><strong>Reference:</strong> ${ref}</p>` +
        rows.map(([k, v]) => `<p><strong>${esc(k)}:</strong> ${esc(v)}</p>`).join("");
      const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\nReference: ${ref}`;
      try {
        const res = await fetch(RESEND_ENDPOINT, {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from,
            to: [to],
            reply_to: email,
            subject: `[${typeLabel}] ${name || email} (${ref})`,
            html,
            text,
          }),
        });
        mailedOk = res.ok;
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as { message?: string };
          log("error", "resend rejected", { status: res.status, detail: body?.message });
        }
      } catch (e) {
        log("error", "resend network error", { error: String(e) });
      }
    }

    if (!storedOk && !mailedOk) {
      log("error", "no sink succeeded", { hasAirtable: !!(atKey && atBase), hasResend: !!(apiKey && to && from) });
      return json({ ok: false, ref, error: "We couldn't submit your details just now. Please try again, or email hello@recconnect.co." }, 502);
    }

    log("info", "submitted", { formType, storedOk, mailedOk, email });
    return json({ ok: true, ref });
  } catch (err) {
    log("error", "unhandled exception", { error: String(err) });
    return json({ ok: false, ref, error: "Something went wrong on our side. Please try again." }, 500);
  }
};

export const GET: APIRoute = () => json({ ok: false, error: "Use POST to submit a form." }, 405);
