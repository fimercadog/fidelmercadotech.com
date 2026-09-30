"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { contactSchema, MOTIVO_LABEL, MOTIVOS, type ContactInput } from "@/lib/contact-schema";
import { whatsappUrl } from "@/content/site";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };
  }
}

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!SITE_KEY || !window.grecaptcha) return undefined;
  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window.grecaptcha!.execute(SITE_KEY!, { action: "contact" }).then(resolve).catch(() => resolve(undefined));
    });
  });
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const defaultMotivo = searchParams.get("motivo") ?? undefined;
  const defaultInteres = searchParams.get("interes") ?? undefined;
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      motivo: (MOTIVOS as readonly string[]).includes(defaultMotivo ?? "") ? (defaultMotivo as ContactInput["motivo"]) : "demo",
      interes: defaultInteres ?? "",
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    const { website, ...lead } = values;
    if (website) { setDone(true); return; } // honeypot
    const webhook = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
    if (!webhook) { setDone(true); return; } // sin webhook configurado — aceptar silenciosamente
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "fidelmercadotech.com", receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) {
        setServerError("No pudimos enviar tu mensaje. Escríbenos por WhatsApp.");
        return;
      }
      setDone(true);
    } catch {
      setServerError("Problema de conexión. Escríbenos por WhatsApp mientras lo revisamos.");
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-10 text-center shadow-lg">
        <CheckCircle2 className="size-12 text-[#4de961]" aria-hidden="true" />
        <h2 className="saas-h4 text-[#333]">Mensaje enviado</h2>
        <p className="max-w-md text-[14px] text-[#666]">
          Gracias por escribirnos. Te contactaremos muy pronto. Si es urgente, escríbenos por{" "}
          <a href={whatsappUrl("Hola, acabo de enviar el formulario de contacto.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#02e173] underline">
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      {SITE_KEY ? <Script src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`} strategy="lazyOnload" /> : null}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field data-invalid={!!errors.nombre}>
            <FieldLabel htmlFor="nombre" className="font-semibold">Nombre *</FieldLabel>
            <Input id="nombre" autoComplete="name" className="rounded-xl" aria-invalid={!!errors.nombre} {...register("nombre")} />
            <FieldError errors={[errors.nombre]} />
          </Field>
          <Field data-invalid={!!errors.empresa}>
            <FieldLabel htmlFor="empresa" className="font-semibold">Empresa</FieldLabel>
            <Input id="empresa" autoComplete="organization" className="rounded-xl" {...register("empresa")} />
          </Field>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email" className="font-semibold">Correo *</FieldLabel>
            <Input id="email" type="email" autoComplete="email" className="rounded-xl" aria-invalid={!!errors.email} {...register("email")} />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field data-invalid={!!errors.telefono}>
            <FieldLabel htmlFor="telefono" className="font-semibold">Teléfono / WhatsApp</FieldLabel>
            <Input id="telefono" type="tel" autoComplete="tel" className="rounded-xl" {...register("telefono")} />
          </Field>
        </div>

        <Field data-invalid={!!errors.motivo}>
          <FieldLabel htmlFor="motivo" className="font-semibold">¿En qué te ayudamos? *</FieldLabel>
          <select
            id="motivo"
            className="h-10 rounded-xl border border-[rgba(0,0,0,0.12)] bg-white px-3 text-sm text-[#333] shadow-xs outline-none focus-visible:border-[#4de961] focus-visible:ring-2 focus-visible:ring-[#4de961]/20"
            {...register("motivo")}
          >
            {MOTIVOS.map((m) => (
              <option key={m} value={m}>
                {MOTIVO_LABEL[m]}
              </option>
            ))}
          </select>
          <FieldError errors={[errors.motivo]} />
        </Field>

        <Field data-invalid={!!errors.mensaje}>
          <FieldLabel htmlFor="mensaje" className="font-semibold">Mensaje *</FieldLabel>
          <Textarea id="mensaje" rows={5} className="rounded-xl" aria-invalid={!!errors.mensaje} placeholder="Cuéntanos qué proceso quieres mejorar o qué solución te interesa." {...register("mensaje")} />
          <FieldError errors={[errors.mensaje]} />
        </Field>

        {/* Honeypot — hidden from users, catches bots. */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />
        <input type="hidden" {...register("interes")} />

        <Field orientation="horizontal" data-invalid={!!errors.consentimiento} className="items-start">
          <input
            id="consentimiento"
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary"
            aria-invalid={!!errors.consentimiento}
            {...register("consentimiento")}
          />
          <div className="flex flex-col gap-1">
            <FieldLabel htmlFor="consentimiento" className="block! text-[13px] leading-6 font-normal text-[#787f84]">
              Autorizo a Fidel Mercado Tech a contactarme y tratar mis datos para responder a esta solicitud, conforme a
              la{" "}
              <Link href="/privacidad" className="font-medium text-[#02e173] underline">
                política de tratamiento de datos
              </Link>{" "}
              y los{" "}
              <Link href="/terminos" className="font-medium text-[#02e173] underline">
                términos
              </Link>{" "}
              (Ley 1581 de 2012).
            </FieldLabel>
            <FieldError errors={[errors.consentimiento]} />
          </div>
        </Field>

        {serverError ? <p role="alert" className="text-sm text-destructive">{serverError}</p> : null}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <button type="submit" disabled={isSubmitting} className="saas-btn saas-btn-green px-8">
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </button>
          <Link href={whatsappUrl("Hola, quiero información sobre sus soluciones.")} target="_blank" rel="noopener noreferrer" className="saas-btn saas-btn-outline px-7">
            Prefiero WhatsApp
          </Link>
        </div>

        {SITE_KEY ? (
          <p className="text-[11px] leading-4 text-[#787f84]">
            Protegido por reCAPTCHA. Aplican la{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de privacidad</a> y los{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Términos</a> de Google.
          </p>
        ) : null}
      </form>
    </>
  );
}

export function ContactForm() {
  return (
    <Suspense>
      <ContactFormInner />
    </Suspense>
  );
}
