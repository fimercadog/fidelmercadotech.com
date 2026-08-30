/**
 * Server-side reCAPTCHA v3 verification.
 * Docs: https://developers.google.com/recaptcha/docs/verify
 *
 * If RECAPTCHA_SECRET_KEY is not set (local dev), verification is skipped
 * and every token is accepted — never deploy without the secret.
 */
const MIN_SCORE = 0.5;

export async function verifyRecaptcha(token: string | undefined, expectedAction: string): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true, reason: "skipped: no secret configured" };
  if (!token) return { ok: false, reason: "missing token" };

  let data: { success?: boolean; score?: number; action?: string; "error-codes"?: string[] };
  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    data = await res.json();
  } catch {
    return { ok: false, reason: "verification request failed" };
  }

  if (!data.success) return { ok: false, reason: `rejected: ${(data["error-codes"] ?? []).join(",") || "unknown"}` };
  if (data.action && data.action !== expectedAction) return { ok: false, reason: "action mismatch" };
  if (typeof data.score === "number" && data.score < MIN_SCORE) return { ok: false, reason: `low score ${data.score}` };
  return { ok: true };
}
