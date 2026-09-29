import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
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
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu operación"
        description="Solicita una demostración o cuéntanos qué quieres construir o automatizar. Te respondemos pronto."
        ctas={[
          { label: "Solicitar demo", href: "#formulario" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus soluciones."), external: true, variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-47.png", alt: "App móvil FidelOS", width: 850, height: 1540 }}
      />

      <section className="saas saas-section bg-[#f9fafb]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Columna Izquierda (5 cols): Información y Canales de Contacto */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <Reveal className="flex flex-col gap-4">
                <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Atención Inmediata</span>
                <h2 className="saas-h2 text-[#333]">
                  Canales de contacto directo
                </h2>
                <p className="text-[15px] leading-7 text-[#666]">
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
                        "saas-shadow-toggle group flex items-center justify-between gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 transition-transform hover:-translate-y-0.5"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-[#4de961]/10 text-[#333] transition-transform duration-300 group-hover:scale-110">
                          <c.icon className="size-6" aria-hidden="true" />
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">{c.label}</span>
                          <span className="text-[15px] font-semibold text-[#333]">{c.value}</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">
                        Abrir &rarr;
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* Card Informativa de Horarios y Compromiso */}
              <Reveal delay={0.1}>
                <div className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#4de961]">Horario & Respuesta</h4>
                  <p className="text-[13px] leading-5 text-[#666]">
                    Atención de Lunes a Viernes de 8:00 AM a 6:00 PM (Hora Colombia). Respondemos todas las solicitudes en menos de 24 horas hábiles.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Columna Derecha (7 cols): Formulario de Contacto en tarjeta flotante */}
            <div id="formulario" className="scroll-mt-24 lg:col-span-7">
              <Reveal delay={0.08}>
                <div className="saas-shadow-soft rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
                  <div className="mb-6 flex flex-col gap-2">
                    <h3 className="saas-h5 text-[#333]">Solicitar demostración o información</h3>
                    <p className="text-[14px] text-[#666]">
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
