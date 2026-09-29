import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { PillBar } from "@/components/marketing/pill-bar";
import { EllipseBanner } from "@/components/marketing/ellipse-banner";
import { IconCard, Row, type PackIcon } from "@/components/saas/kit";
import { SERVICES } from "@/content/services";
import { whatsappUrl } from "@/content/site";

const SERVICE_PACK_ICON: Record<string, PackIcon> = {
  web: "browser",
  software: "sliders",
  automatizacion: "tablet",
  ia: "pencil",
  agentes: "mail",
  integraciones: "link",
  personalizadas: "lock",
};

export const metadata: Metadata = {
  title: "Servicios y Documentación",
  description:
    "Desarrollo web, software empresarial a medida, ERP, sistemas de inventario, automatización, inteligencia artificial, agentes de WhatsApp, integraciones y soluciones personalizadas.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios & Documentación"
        title="Centro de Servicios y Guías de Integración"
        description="Construimos software desde cero e integramos tus herramientas actuales para optimizar tu operación."
        ctas={[
          { label: "Solicitar cotización", href: "/contacto?motivo=cotizacion" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus servicios."), external: true, variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-46.png", alt: "Panel de servicios FidelOS", width: 864, height: 1090 }}
      />

      {/* Grid de Tarjetas de Servicios — SaaS IconCard outline */}
      <section className="saas saas-section">
        <Row>
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Catálogo de Servicios</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">7 áreas de especialización</h2>
          <p className="mb-[40px] text-center text-[14px] text-[#787f84]">
            Selecciona un servicio para ver el alcance detallado, cómo lo abordamos y casos de uso.
          </p>
        </Row>
        <Row className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <IconCard
              key={service.id}
              icon={SERVICE_PACK_ICON[service.id] ?? "browser"}
              title={service.title}
              text={service.description}
              variant="outline"
              href={`/servicios/${service.id}`}
            />
          ))}
        </Row>
      </section>

      {/* Banner de Enfoque / Asesoría Personalizada */}
      <EllipseBanner
        eyebrow="Nuestro enfoque"
        title="No automatizamos por automatizar: primero entendemos tu negocio"
        description="Analizamos tus procesos, detectamos qué vale la pena automatizar y diseñamos la solución antes de escribir una línea de código."
        ctaLabel="Hablar de tu proyecto"
        ctaHref="/contacto"
      />

    </>
  );
}
