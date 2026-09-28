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

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ motivo?: string; interes?: string }>;
}) {
  const { motivo, interes } = await searchParams;

  return (
    <>
      {/* Hero de Contacto estilo Divi SaaS */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-16 text-foreground sm:py-24">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-grid-bg absolute inset-0 opacity-20" aria-hidden="true" />

        {/* Elementos decorativos estilo SaaS Pack */}
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "12%", left: "5%" }} />
          <span className="s-tri" style={{ top: "20%", right: "8%" }} />
          <span className="s-dot" style={{ bottom: "15%", left: "10%" }} />
          <span className="s-plus" style={{ top: "50%", right: "5%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <SectionHeading
            level={1}
            eyebrow="Contacto"
            title="Hablemos de tu operación"
            description="Solicita una demostración o cuéntanos qué quieres construir o automatizar. Te respondemos pronto."
            align="center"
          />
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar demo", href: "#formulario", variant: "default" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus soluciones."), external: true },
        ]}
      />

      <section className="py-16 sm:py-24 bg-background">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Columna Izquierda (5 cols): Información y Canales de Contacto */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <Reveal className="flex flex-col gap-4">
                <span className="fmt-eyebrow-pill w-fit">Atención Inmediata</span>
                <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
                  Canales de contacto directo
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  Elige el medio que prefieras o envíanos un mensaje a través del formulario para agendar una demostración de nuestras soluciones.
                </p>
              </Reveal>

              <div className="flex flex-col gap-4">
                {CHANNELS.map((c) => (
                  <Reveal key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={cn(
                        "fmt-elevate group flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                          <c.icon className="size-6" aria-hidden="true" />
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{c.label}</span>
                          <span className="text-base font-semibold text-foreground">{c.value}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary/80">
                        Abrir &rarr;
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Card Informativa de Horarios y Compromiso */}
              <Reveal delay={0.1}>
                <div className="fmt-elevate flex flex-col gap-3 rounded-3xl border border-border/80 bg-secondary/30 p-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Horario & Respuesta</h4>
                  <p className="text-xs leading-5 text-muted-foreground">
                    Atención de Lunes a Viernes de 8:00 AM a 6:00 PM (Hora Colombia). Respondemos todas las solicitudes en menos de 24 horas hábiles.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Columna Derecha (7 cols): Formulario de Contacto en tarjeta flotante */}
            <div id="formulario" className="scroll-mt-24 lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="fmt-elevate rounded-3xl border border-border bg-card p-8 shadow-xl">
                  <div className="mb-6 flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-foreground">Solicitar demostración o información</h3>
                    <p className="text-sm text-muted-foreground">
                      Llena los datos a continuación y nos pondremos en contacto contigo.
                    </p>
                  </div>
                  <ContactForm defaultMotivo={motivo} defaultInteres={interes} />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
