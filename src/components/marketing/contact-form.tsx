"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { contactSchema, MOTIVO_LABEL, MOTIVOS, type ContactInput } from "@/lib/contact-schema";
import { whatsappUrl } from "@/content/site";

/** Wizard steps: each validates only its own fields before moving on. */
const STEPS: { title: string; hint: string; fields: (keyof ContactInput)[] }[] = [
  { title: "Cuéntame sobre ti", hint: "¿Cómo te llamo y dónde trabajas?", fields: ["nombre", "empresa"] },
  { title: "¿Cómo te contacto?", hint: "Déjame tu correo y, si quieres, tu WhatsApp.", fields: ["email", "telefono"] },
  { title: "¿En qué te ayudo?", hint: "Elige lo que más se parezca a tu necesidad.", fields: ["motivo"] },
  { title: "Cuéntame tu caso", hint: "Qué proceso quieres mejorar o qué solución te interesa.", fields: ["mensaje"] },
  { title: "Confirma y envía", hint: "Un último paso: tu autorización para contactarte.", fields: ["consentimiento"] },
];
const LAST = STEPS.length - 1;

function ContactFormInner({ defaultMotivo: propMotivo }: { defaultMotivo?: string }) {
  const searchParams = useSearchParams();
  const defaultMotivo = propMotivo ?? searchParams.get("motivo") ?? undefined;
  const defaultInteres = searchParams.get("interes") ?? undefined;
  const [serverError, setServerError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  // Sin webhook en producción el contacto se termina en WhatsApp, con el mensaje ya redactado.
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const touched = useRef(false);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      motivo: (MOTIVOS as readonly string[]).includes(defaultMotivo ?? "") ? (defaultMotivo as ContactInput["motivo"]) : "demo",
      interes: (defaultInteres ?? "").slice(0, 80),
      website: "",
    },
  });

  // Move focus to the first field of the new step (not on first render).
  useEffect(() => {
    if (!touched.current) return;
    setFocus(STEPS[step].fields[0]);
  }, [step, setFocus]);

  async function goNext() {
    if (await trigger(STEPS[step].fields)) {
      touched.current = true;
      setStep((s) => Math.min(s + 1, LAST));
    }
  }

  function goBack() {
    touched.current = true;
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(values: ContactInput) {
    setServerError(null);
    const { website, ...lead } = values;
    if (website) { setDone(true); return; } // honeypot
    const webhook = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
    if (!webhook) {
      // En producción un envío sin destino perdería el contacto: avisar en vez de mostrar éxito. En desarrollo se acepta para poder probar el flujo.
      if (process.env.NODE_ENV === "production") {
        const lines = [
          "Hola, soy " + lead.nombre + (lead.empresa ? " de " + lead.empresa : "") + ".",
          lead.mensaje,
          "Correo: " + lead.email + (lead.telefono ? " · Tel: " + lead.telefono : ""),
        ];
        setWaUrl(whatsappUrl(lines.join("\n")));
        setDone(true);
        return;
      }
      setDone(true);
      return;
    }
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, source: "fidelmercadotech.com", receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) {
        setServerError("No pude enviar tu mensaje. Escríbeme por WhatsApp.");
        return;
      }
      setDone(true);
    } catch {
      setServerError("Problema de conexión. Escríbeme por WhatsApp mientras lo reviso.");
    }
  }

  // Enter / "Siguiente" advance the wizard; only the last step really submits.
  async function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < LAST) {
      await goNext();
      return;
    }
    await handleSubmit(onSubmit, (errs) => {
      const i = STEPS.findIndex((s) => s.fields.some((f) => errs[f]));
      if (i >= 0) setStep(i);
    })(e);
  }

  if (done && waUrl) {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-10 text-center shadow-lg">
        <CheckCircle2 className="size-12 text-[#4de961]" aria-hidden="true" />
        <h2 className="saas-h4 text-[#333]">Un último paso</h2>
        <p className="max-w-md text-[14px] text-[#666]">
          Tu mensaje ya está redactado. Envíalo por WhatsApp y te respondo ahí mismo.
        </p>
        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="saas-btn saas-btn-green px-8">
          Enviar por WhatsApp
        </a>
      </div>
    );
  }

  if (done) {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-10 text-center shadow-lg">
        <CheckCircle2 className="size-12 text-[#4de961]" aria-hidden="true" />
        <h2 className="saas-h4 text-[#333]">Mensaje enviado</h2>
        <p className="max-w-md text-[14px] text-[#666]">
          Gracias por escribirme. Te contactaré muy pronto. Si es urgente, escríbeme por{" "}
          <a href={whatsappUrl("Hola, acabo de enviar el formulario de contacto.")} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#02e173] underline">
            WhatsApp
          </a>
          .
        </p>
      </div>
    );
  }

  const stepClass = (i: number) => (step === i ? "flex flex-col gap-5" : "hidden");

  return (
    <>
      <form onSubmit={onFormSubmit} noValidate className="flex flex-col gap-6">
        {/* Progreso */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span
                key={s.title}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? "w-8 bg-[#4de961]" : i < step ? "w-5 bg-[#4de961]/60" : "w-5 bg-[#e5e7eb]"
                }`}
              />
            ))}
          </div>
          <span className="text-[12px] text-[#787f84]" aria-live="polite">
            Paso {step + 1} de {STEPS.length}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="saas-h5 text-[#333]">{STEPS[step].title}</h3>
          <p className="text-[14px] text-[#666]">{STEPS[step].hint}</p>
        </div>

        {/* Paso 1 — Sobre ti */}
        <div className={stepClass(0)}>
          <Field data-invalid={!!errors.nombre}>
            <FieldLabel htmlFor="nombre" className="font-semibold">Nombre *</FieldLabel>
            <Input id="nombre" autoComplete="name" placeholder="Tu nombre" className="rounded-xl" aria-invalid={!!errors.nombre} {...register("nombre")} />
            <FieldError errors={[errors.nombre]} />
          </Field>
          <Field data-invalid={!!errors.empresa}>
            <FieldLabel htmlFor="empresa" className="font-semibold">Empresa</FieldLabel>
            <Input id="empresa" autoComplete="organization" placeholder="Nombre de tu empresa" className="rounded-xl" {...register("empresa")} />
          </Field>
        </div>

        {/* Paso 2 — Contacto */}
        <div className={stepClass(1)}>
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email" className="font-semibold">Correo *</FieldLabel>
            <Input id="email" type="email" autoComplete="email" placeholder="tu@empresa.com" className="rounded-xl" aria-invalid={!!errors.email} {...register("email")} />
            <FieldError errors={[errors.email]} />
          </Field>
          <Field data-invalid={!!errors.telefono}>
            <FieldLabel htmlFor="telefono" className="font-semibold">Teléfono / WhatsApp</FieldLabel>
            <Input id="telefono" type="tel" autoComplete="tel" placeholder="+57 300 000 0000" className="rounded-xl" {...register("telefono")} />
          </Field>
        </div>

        {/* Paso 3 — Motivo */}
        <div className={stepClass(2)}>
          <Field data-invalid={!!errors.motivo}>
            <FieldLabel htmlFor="motivo" className="font-semibold">¿En qué te ayudo? *</FieldLabel>
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
        </div>

        {/* Paso 4 — Mensaje */}
        <div className={stepClass(3)}>
          <Field data-invalid={!!errors.mensaje}>
            <FieldLabel htmlFor="mensaje" className="font-semibold">Mensaje *</FieldLabel>
            <Textarea id="mensaje" rows={5} className="rounded-xl" aria-invalid={!!errors.mensaje} placeholder="Cuéntame qué proceso quieres mejorar o qué solución te interesa." {...register("mensaje")} />
            <FieldError errors={[errors.mensaje]} />
          </Field>
        </div>

        {/* Honeypot — hidden from users, catches bots. */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("website")} />
        <input type="hidden" {...register("interes")} />

        {/* Paso 5 — Consentimiento */}
        <div className={stepClass(4)}>
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
        </div>

        {serverError ? (
          <p role="alert" className="text-sm text-destructive">
            {serverError}{" "}
            <a href={whatsappUrl("Hola, quise enviar el formulario de contacto y no pude.")} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              Abrir WhatsApp
            </a>
          </p>
        ) : null}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {step > 0 ? (
              <button type="button" onClick={goBack} className="saas-btn saas-btn-outline px-7">
                Atrás
              </button>
            ) : null}
            {step === LAST ? (
              <Link href={whatsappUrl("Hola, quiero información sobre sus soluciones.")} target="_blank" rel="noopener noreferrer" className="saas-btn saas-btn-outline px-7">
                Prefiero WhatsApp
              </Link>
            ) : null}
          </div>
          <button type="submit" disabled={isSubmitting} className="saas-btn saas-btn-green px-8">
            {step < LAST ? "Siguiente" : isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </button>
        </div>

        <p className="text-[11px] leading-4 text-[#787f84]">
          Usamos tus datos solo para responder tu solicitud. Conoce tus derechos en nuestra{" "}
          <Link href="/privacidad" className="underline">política de tratamiento de datos</Link>.
        </p>

      </form>
    </>
  );
}

export function ContactForm({ defaultMotivo }: { defaultMotivo?: string } = {}) {
  return (
    <Suspense>
      <ContactFormInner defaultMotivo={defaultMotivo} />
    </Suspense>
  );
}
