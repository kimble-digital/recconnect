// ===========================================================================
//  src/pages/api/submit.ts
//  Unified lead-capture endpoint for all site forms.
//  - Validates input, blocks bots with a honeypot
//  - Stores every submission as a row in Airtable (the lead list)
//  - Sends a branded notification email to the team via Resend (REST API)
//  - Sends a warm auto-confirmation email back to the person who submitted
//    (enquiry + partner forms), with a short delay between sends so we stay
//    inside Resend's free-tier rate limit
//  - Succeeds if EITHER sink works; returns a short reference per request
//
//  ENV VARS (set in Vercel -> Project -> Settings -> Environment Variables):
//    AIRTABLE_API_KEY   personal access token with data.records:write
//    AIRTABLE_BASE_ID   the base id (appXXXX...)
//    AIRTABLE_TABLE     table name (default "Submissions")
//    RESEND_API_KEY     Resend API key
//    CONTACT_TO         where notifications are delivered
//    CONTACT_FROM       verified Resend sender, e.g. RecConnect <noreply@recconnect.co>
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

// Escape, then turn newlines into <br> for multi-line values (e.g. Message).
const escMultiline = (s: string) => esc(s).replace(/\r?\n/g, "<br>");

const env = (k: string) => import.meta.env[k] || process.env[k];

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const firstNameOf = (name: string) => (name.trim().split(/\s+/)[0] || "there");

// ── Branded email shell (email-safe, table-based, inline styles) ──
const BRAND_NAVY = "#0a0b0f";
const BRAND_MINT = "#2dd4bf";
const BRAND_MINT_DARK = "#14b8a6";

const emailShell = (preheader: string, inner: string) => `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>RecConnect</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;-webkit-font-smoothing:antialiased;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f4f5f7;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:28px 12px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid #e6e8ec;border-radius:16px;overflow:hidden;">
  <tr><td style="background:${BRAND_NAVY};padding:22px 32px;">
    <span style="font-size:20px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">RecConnect<span style="color:${BRAND_MINT};">.</span></span>
  </td></tr>
  <tr><td style="padding:34px 32px;">${inner}</td></tr>
  <tr><td style="padding:20px 32px;background:#f9fafb;border-top:1px solid #eef0f3;">
    <p style="margin:0;font-size:12px;line-height:18px;color:#9aa1ab;">RecConnect, the community for UK recruitment leaders.<br>
    <a href="https://recconnect.co" style="color:${BRAND_MINT_DARK};text-decoration:none;">recconnect.co</a></p>
  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;

// Team notification body
const notificationInner = (typeLabel: string, ref: string, rows: [string, string][]) => {
  const rowsHtml = rows
    .map(
      ([k, v]) => `<tr>
    <td style="padding:11px 0;border-bottom:1px solid #eef0f3;font-size:13px;color:#9aa1ab;width:118px;vertical-align:top;">${esc(k)}</td>
    <td style="padding:11px 0;border-bottom:1px solid #eef0f3;font-size:14px;line-height:1.5;color:#1a1d23;">${escMultiline(v)}</td>
  </tr>`
    )
    .join("");
  return `
  <p style="margin:0 0 6px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND_MINT_DARK};">${esc(typeLabel)}</p>
  <h1 style="margin:0 0 22px;font-size:22px;line-height:1.25;color:${BRAND_NAVY};">You have a new ${esc(typeLabel.toLowerCase())}</h1>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table>
  <p style="margin:22px 0 0;font-size:12px;color:#9aa1ab;">Reference ${esc(ref)}</p>`;
};

// Auto-confirmation body, from Simon
const confirmationInner = (firstName: string, formType: FormType) => {
  const intro =
    formType === "partner"
      ? "Thanks for your interest in partnering with RecConnect. I have your details in front of me."
      : formType === "event-alert"
        ? "Thanks for signing up for RecConnect event alerts."
        : "Thanks for getting in touch. Your message has reached the RecConnect team.";
  const next =
    formType === "partner"
      ? "One of us will come back to you within one working day to walk you through the audience, the packages, and what would work best for your business."
      : formType === "event-alert"
        ? "You will be first to hear when we announce new events and member-only offers. No spam, just the good stuff, and you can unsubscribe any time."
        : "We reply to everything within one working day, usually much sooner, so you will hear from a real person shortly.";
  const closing =
    formType === "event-alert"
      ? "See you in the room soon."
      : "If anything is urgent in the meantime, just reply to this email and it will come straight to us.";
  return `
  <h1 style="margin:0 0 18px;font-size:22px;line-height:1.3;color:${BRAND_NAVY};">Thanks, ${esc(firstName)}.</h1>
  <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3a3f47;">${intro}</p>
  <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#3a3f47;">${next}</p>
  <p style="margin:0 0 26px;font-size:15px;line-height:1.6;color:#3a3f47;">${closing}</p>
  <p style="margin:0;font-size:15px;line-height:1.5;color:${BRAND_NAVY};">Simon Lewis<br>
  <span style="color:#9aa1ab;font-size:13px;">Founder, RecConnect</span></p>`;
};

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

    // Honeypot: real users never fill this hidden field. Field name is
    // deliberately unrecognisable so browser autofill / password managers
    // leave it empty (a recognisable name like "company_website" gets
    // autofilled and drops legitimate submissions).
    if ((data.rc_hp || "").trim()) {
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

    // Per-type validation. Every visible field is required.
    const fields: string[] = [];
    if (!emailOk) fields.push("email");
    if (formType === "enquiry") {
      if (name.length < 2) fields.push("name");
      if (phone.length < 5) fields.push("phone");
      if (company.length < 2) fields.push("company");
      if (role.length < 2) fields.push("role");
      if (message.length < 5) fields.push("message");
    }
    if (formType === "partner") {
      if (name.length < 2) fields.push("name");
      if (company.length < 2) fields.push("company");
      if (role.length < 2) fields.push("role");
      if (interest.length < 1) fields.push("interest");
      if (message.length < 5) fields.push("message");
    }
    if (formType === "event-alert") {
      if (name.length < 1) fields.push("name");
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

    // ── Email via Resend ──
    const apiKey = env("RESEND_API_KEY");
    const to = env("CONTACT_TO");
    const from = env("CONTACT_FROM");
    let mailedOk = false;

    // Local sender that returns whether the send was accepted.
    const sendResend = async (payload: Record<string, unknown>, kind: string): Promise<boolean> => {
      try {
        const res = await fetch(RESEND_ENDPOINT, {
          method: "POST",
          headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as { message?: string };
          log("error", `resend rejected (${kind})`, { status: res.status, detail: body?.message });
          return false;
        }
        return true;
      } catch (e) {
        log("error", `resend network error (${kind})`, { error: String(e) });
        return false;
      }
    };

    if (apiKey && to && from) {
      // Notification to the team
      const rows: [string, string][] = ([
        ["Type", typeLabel], ["Name", name], ["Email", email], ["Phone", phone],
        ["Company", company], ["Role", role], ["Interest", interest], ["Message", message],
      ] as [string, string][]).filter(([, v]) => v);
      const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\nReference: ${ref}`;
      mailedOk = await sendResend(
        {
          from,
          to: [to],
          reply_to: email,
          subject: `[${typeLabel}] ${name || email} (${ref})`,
          html: emailShell(`New ${typeLabel.toLowerCase()} from ${name || email}`, notificationInner(typeLabel, ref, rows)),
          text,
        },
        "notification"
      );

      // Warm, personalised auto-confirmation back to the submitter.
      // Delayed slightly so we stay under Resend's free-tier rate limit.
      if (emailOk) {
        const first = firstNameOf(name);
        const confSubject =
          formType === "partner"
            ? "Thanks for your interest in RecConnect"
            : formType === "event-alert"
              ? `You're on the list, ${first}`
              : `Thanks for getting in touch, ${first}`;
        const confBody =
          formType === "partner"
            ? "Thanks for your interest in partnering with RecConnect. I have your details in front of me. One of us will come back to you within one working day to walk you through the audience, the packages, and what would work best for your business.\n\nIf anything is urgent in the meantime, just reply to this email and it will come straight to us."
            : formType === "event-alert"
              ? "Thanks for signing up for RecConnect event alerts. You will be first to hear when we announce new events and member-only offers. No spam, just the good stuff, and you can unsubscribe any time.\n\nSee you in the room soon."
              : "Thanks for getting in touch. Your message has reached the RecConnect team. We reply to everything within one working day, usually much sooner, so you will hear from a real person shortly.\n\nIf anything is urgent in the meantime, just reply to this email and it will come straight to us.";
        const confText = `Thanks, ${first}.\n\n${confBody}\n\nSimon Lewis\nFounder, RecConnect`;
        await sleep(700);
        const confOk = await sendResend(
          {
            from,
            to: [email],
            reply_to: to,
            subject: confSubject,
            html: emailShell("We have your message and will be in touch shortly.", confirmationInner(first, formType)),
            text: confText,
          },
          "confirmation"
        );
        log("info", "confirmation attempted", { confOk });
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
