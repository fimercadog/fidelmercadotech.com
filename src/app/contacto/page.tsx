import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ContactForm } from "@/components/marketing/contact-form";
import { PillBar } from "@/components/marketing/pill-bar";
import { cn } from "@/lib/utils";
import { SITE, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una demostración, cuéntanos tu proyecto o escríbenos por WhatsApp. Respondemos rápido.",
  alternates: { canonical: "/contacto" },
};

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: whatsappUrl("Hola, quiero información sobre sus soluciones."), variant: "outline" },
  { icon: Phone, label: "Teléfono", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, "")}`, variant: "dark" },
  { icon: Mail, label: "Correo", value: SITE.email, href: `mailto:${SITE.email}`, variant: "outline" },
] as const;

const CHANNEL_CLASSES = {
  outline: "border border-border bg-card [&_.ch-icon]:bg-primary [&_.ch-icon]:text-white",
  dark: "bg-navy-deep border border-border/60 [&_.ch-icon]:bg-primary [&_.ch-icon]:text-white",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ motivo?: string; interes?: string }>;
}) {
  const { motivo, interes } = await searchParams;

  return (
    <>
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative py-20 sm:py-24">
          <SectionHeading
            level={1}
            eyebrow="Contacto"
            title="Hablemos de tu operación"
            description="Solicita una demostración o cuéntanos qué quieres construir o automatizar. Te respondemos pronto."
          />
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar demo", href: "#formulario", variant: "default" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus soluciones."), external: true },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <Reveal className="grid gap-5 sm:grid-cols-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn("fmt-elevate flex flex-col gap-4 rounded-3xl p-6", CHANNEL_CLASSES[c.variant])}
              >
                <span className="ch-icon flex size-11 items-center justify-center rounded-2xl">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase opacity-80">{c.label}</span>
                  <span className="text-sm font-medium">{c.value}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <div id="formulario" className="scroll-mt-24">
            <Reveal delay={0.08}>
              <ContactForm defaultMotivo={motivo} defaultInteres={interes} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
