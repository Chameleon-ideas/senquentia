import { Resend } from 'resend';

const prerender = false;
const POST = async ({ request }) => {
  const resend = new Resend(undefined                              );
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400 });
  }
  const { name, email, phone, message } = body;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), { status: 400 });
  }
  const toEmail = undefined                                ;
  const fromEmail = "noreply@yourdomain.com";
  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#111318;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;width:120px;">Name</td>
              <td style="padding:8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;">Phone</td>
              <td style="padding:8px 0;">${escapeHtml(phone)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#6b7280;vertical-align:top;">Message</td>
              <td style="padding:8px 0;">${escapeHtml(message).replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
        </div>
      `
    });
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Email delivery failed" }), { status: 500 });
  }
};
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
