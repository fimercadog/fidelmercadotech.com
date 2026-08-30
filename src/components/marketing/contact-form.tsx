"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function ContactForm({ defaultMotivo, defaultInteres }: { defaultMotivo?: string; defaultInteres?: string }) {
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
    const recaptchaToken = await getRecaptchaToken();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setServerError(data.error ?? "No pudimos enviar tu mensaje. Intenta de nuevo.");
        return;
      }
      setDone(true);
    } catch {
      setServerError("Problema de conexión. Escríbenos por WhatsApp mientras lo revisamos.");
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-8 text-center fmt-card-shadow">
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <h2 className="text-xl">Mensaje enviado</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Gracias por escribirnos. Te contactaremos muy pronto. Si es urgente, escríbenos por{" "}
          <a href={whatsappUrl("Hola, acabo de enviar el formulario de contacto.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
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
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8 fmt-card-shadow">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.nombre}>
            <FieldLabel htmlFor="nombre">Nombre *</FieldLabel>
            <Input id="nombre" autoComplete="name" aria-invalid={!!errors.nombre} {...register("nombre")} />
            <FieldError errors={[errors.nombre]} />
          </Field>
          <Field data-invalid={!!errors.empresa}>
            <FieldLabel htmlFor="empresa">Empresa</FieldLabel>
            <Input id="empresa" autoComplete="organization" {...register("empresa")} />
          </Field>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Correo *</FieldLabel>
            <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field data-invalid={!!errors.telefono}>
            <FieldLabel htmlFor="telefono">Teléfono / WhatsApp</FieldLabel>
            <Input id="telefono" type="tel" autoComplete="tel" {...register("telefono")} />
          </Field>
        </div>

        <Field data-invalid={!!errors.motivo}>
          <FieldLabel htmlFor="motivo">¿En qué te ayudamos? *</FieldLabel>
          <select
            id="motivo"
            className="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
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
          <FieldLabel htmlFor="mensaje">Mensaje *</FieldLabel>
          <Textarea id="mensaje" rows={5} aria-invalid={!!errors.mensaje} placeholder="Cuéntanos qué proceso quieres mejorar o qué solución te interesa." {...register("mensaje")} />
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
            <FieldLabel htmlFor="consentimiento" className="text-sm font-normal text-muted-foreground">
              Autorizo a Fidel Mercado Tech a contactarme y tratar mis datos para responder a esta solicitud, conforme a
              la{" "}
              <Link href="/privacidad" className="font-medium text-primary underline">
                política de tratamiento de datos
              </Link>{" "}
              y los{" "}
              <Link href="/terminos" className="font-medium text-primary underline">
                términos
              </Link>{" "}
              (Ley 1581 de 2012).
            </FieldLabel>
            <FieldError errors={[errors.consentimiento]} />
          </div>
        </Field>

        {serverError ? <p role="alert" className="text-sm text-destructive">{serverError}</p> : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </Button>
          <Button asChild type="button" size="lg" variant="outline">
            <Link href={whatsappUrl("Hola, quiero información sobre sus soluciones.")} target="_blank" rel="noopener noreferrer">
              Prefiero WhatsApp
            </Link>
          </Button>
        </div>

        {SITE_KEY ? (
          <p className="text-[0.7rem] leading-4 text-muted-foreground">
            Protegido por reCAPTCHA. Aplican la{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Política de privacidad</a> y los{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Términos</a> de Google.
          </p>
        ) : null}
      </form>
    </>
  );
}
