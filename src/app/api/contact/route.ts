import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { verifyRecaptcha } from "@/lib/recaptcha";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Datos inválidos", issues: parsed.error.flatten() }, { status: 422 });
  }

  const { website, ...lead } = parsed.data;
  // Honeypot filled → silently accept, do nothing.
  if (website) return NextResponse.json({ ok: true });

  const token = typeof body === "object" && body !== null ? (body as Record<string, unknown>).recaptchaToken : undefined;
  const captcha = await verifyRecaptcha(typeof token === "string" ? token : undefined, "contact");
  if (!captcha.ok) {
    return NextResponse.json({ error: "No pudimos verificar que eres una persona. Intenta de nuevo." }, { status: 400 });
  }

  const payload = { ...lead, source: "fidelmercadotech.com", receivedAt: new Date().toISOString() };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } catch (err) {
      console.error("[contact] webhook failed", err);
      return NextResponse.json({ error: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp." }, { status: 502 });
    }
  } else {
    // No webhook configured — log so nothing is lost in local/dev.
    console.info("[contact] lead received (no CONTACT_WEBHOOK_URL set)", payload);
  }

  return NextResponse.json({ ok: true });
}
