import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { PillBar } from "@/components/marketing/pill-bar";
import { EllipseBanner } from "@/components/marketing/ellipse-banner";
import { Icon } from "@/components/icon";
import { SERVICES } from "@/content/services";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios y Documentación",
  description:
    "Desarrollo web, software empresarial a medida, CRM, sistemas de inventario, automatización, inteligencia artificial, agentes de WhatsApp, integraciones y soluciones personalizadas.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero estilo Divi SaaS Documentation / Services Page */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-20 text-foreground sm:py-28">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-grid-bg absolute inset-0 opacity-20" aria-hidden="true" />

        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "14%", right: "8%" }} />
          <span className="s-tri" style={{ top: "25%", left: "6%" }} />
          <span className="s-dot" style={{ bottom: "20%", left: "10%" }} />
          <span className="s-plus" style={{ top: "50%", right: "6%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <SectionHeading
            level={1}
            eyebrow="Servicios & Documentación"
            title="Centro de Servicios y Guías de Integración"
            description="Construimos software desde cero e integramos tus herramientas actuales para optimizar tu operación."
            align="center"
          />

          {/* Barra Estilo Búsqueda / Documentación */}
          <div className="mt-8 flex w-full max-w-lg items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-300 shadow-xl backdrop-blur-md">
            <Search className="size-5 shrink-0 text-[#00e676]" />
            <span className="text-sm text-slate-400 font-medium">Buscar servicio o tema de documentación...</span>
          </div>
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar cotización", href: "/contacto?motivo=cotizacion", variant: "default" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus servicios."), external: true },
        ]}
      />

      {/* Grid de Tarjetas de Servicios estilo SaaS Documentation */}
      <section className="py-20 sm:py-28 bg-background">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo de Servicios"
              title="6 áreas de especialización"
              description="Selecciona un servicio para ver el alcance detallado, cómo lo abordamos y casos de uso."
              align="center"
            />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.05}>
                <Link
                  href={`/servicios/${service.id}`}
                  className="fmt-elevate group flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50"
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon name={service.icon} className="size-7" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-bold text-primary">
                    <span>Ver alcance y detalles</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Banner de Enfoque / Asesoría Personalizada */}
      <EllipseBanner
        eyebrow="Nuestro enfoque"
        title="No automatizamos por automatizar: primero entendemos tu negocio"
        description="Analizamos tus procesos, detectamos qué vale la pena automatizar y diseñamos la solución antes de escribir una línea de código."
        ctaLabel="Hablar de tu proyecto"
        ctaHref="/contacto"
      />

      <CtaBand
        title="¿Buscas un precio de referencia?"
        description="Cuéntanos qué necesitas y te enviamos una cotización según el alcance de tu proyecto."
        primaryLabel="Solicitar cotización"
        primaryHref="/contacto?motivo=cotizacion"
      />
    </>
  );
}
