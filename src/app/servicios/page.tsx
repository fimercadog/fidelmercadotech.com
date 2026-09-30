import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
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
  "consultoria-ia": "calendar",
  "ia-local": "lock",
};

export const metadata: Metadata = {
  title: "Servicios — Cómo trabajamos",
  description:
    "Los servicios técnicos detrás de cada solución: desarrollo de software, IA, automatización, integraciones, consultoría y modelos de IA en local.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="El motor detrás de cada solución"
        description="Las soluciones son el qué. Esto es el cómo: las capacidades técnicas que aplicamos para construirlas."
        ctas={[
          { label: "Solicitar cotización", href: "/contacto?motivo=cotizacion" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus servicios."), external: true, variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-46.png", alt: "Panel de servicios FidelOS", width: 864, height: 1090 }}
      />

      <section className="saas saas-section">
        <Row>
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Catálogo</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">9 servicios técnicos</h2>
          <p className="mb-[40px] text-center text-[14px] text-[#787f84]">
            Cada capacidad tiene su propia página con alcance y enfoque. Las soluciones por industria están en{" "}
            <a href="/soluciones" className="underline hover:text-[#333]">Soluciones</a>.
          </p>
        </Row>
        <Row className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
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
