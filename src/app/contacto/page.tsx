import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ContactForm } from "@/components/marketing/contact-form";
import { SITE, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una demostración, cuéntanos tu proyecto o escríbenos por WhatsApp. Respondemos rápido.",
  alternates: { canonical: "/contacto" },
};

const CHANNELS = [
  { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: whatsappUrl("Hola, quiero información sobre sus soluciones.") },
  { icon: Phone, label: "Teléfono", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, "")}` },
  { icon: Mail, label: "Correo", value: SITE.email, href: `mailto:${SITE.email}` },
];

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ motivo?: string; interes?: string }>;
}) {
  const { motivo, interes } = await searchParams;

  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            level={1}
            eyebrow="Contacto"
            title="Hablemos de tu operación"
            description="Solicita una demostración o cuéntanos qué quieres construir o automatizar. Te respondemos pronto."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{c.label}</span>
                  <span className="text-sm font-medium">{c.value}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm defaultMotivo={motivo} defaultInteres={interes} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
