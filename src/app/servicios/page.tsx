import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { PillBar } from "@/components/marketing/pill-bar";
import { ServiceGrid } from "@/components/marketing/service-grid";
import { EllipseBanner } from "@/components/marketing/ellipse-banner";
import { SERVICES } from "@/content/services";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, software empresarial a medida, CRM, sistemas de inventario, automatización, inteligencia artificial, agentes de WhatsApp, integraciones y soluciones personalizadas.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-24 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Servicios"
            title="También desarrollamos soluciones a la medida"
            description="Además de nuestros productos, construimos software desde cero para empresas que necesitan algo hecho a su operación."
          />
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar cotización", href: "/contacto?motivo=cotizacion", variant: "default" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus servicios."), external: true },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ServiceGrid
            items={SERVICES.map((service) => ({
              id: service.id,
              icon: service.icon,
              title: service.title,
              description: service.description,
              href: `/servicios/${service.id}`,
            }))}
          />
        </Container>
      </section>

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
