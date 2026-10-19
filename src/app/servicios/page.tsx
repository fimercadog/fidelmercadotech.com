import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon";
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

// Destacados arriba (en este orden); el resto va debajo por importancia comercial.
const FEATURED = ["consultoria-ia", "ia-local"];
const REST_ORDER = ["automatizacion", "software", "ia", "agentes", "integraciones", "web", "movil", "personalizadas"];
const rank = (id: string) => (REST_ORDER.includes(id) ? REST_ORDER.indexOf(id) : REST_ORDER.length);
const REST = SERVICES.filter((s) => !FEATURED.includes(s.id)).sort((a, b) => rank(a.id) - rank(b.id));

export const metadata: Metadata = {
  title: "Servicios — Cómo trabajo",
  description:
    "Los servicios técnicos detrás de cada solución: desarrollo de software, IA, automatización, integraciones, consultoría y modelos de IA en local.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Con qué destrabo cada proyecto"
        description="Las soluciones son el qué. Esto es el cómo: las capacidades técnicas con las que construyo y resuelvo cada caso."
        ctas={[
          { label: "Solicitar cotización", href: "/contacto?motivo=proyecto" },
          { label: "WhatsApp", href: whatsappUrl("Hola Fidel, quiero que me ayudes con un proyecto."), external: true, variant: "outline" },
        ]}
        // TODO(imagen): reemplazar por una captura real de un producto (la anterior era una portada vacía).
        image={{ src: "/brand/illus-automation.png", alt: "Ilustración de un flujo de automatización", width: 1600, height: 1200 }}
      />

      {/* Destacados: por dónde conviene empezar */}
      <section className="saas saas-section bg-white!">
        <Row>
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Por dónde empezar</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">Mis dos servicios clave</h2>
          <p className="mb-10 text-center text-[14px] text-[#787f84]">
            Primero claridad, después una IA que cuida tu información y tu bolsillo.
          </p>
        </Row>
        <Row className="grid grid-cols-1 gap-7.5 md:grid-cols-2">
          {FEATURED.map((id) => {
            const service = SERVICES.find((s) => s.id === id);
            if (!service) return null;
            return (
              <Link
                key={id}
                href={`/servicios/${id}`}
                className="saas-shadow-soft group flex h-full flex-col gap-4 rounded-[24px] border-2 border-[#4de961]/40 bg-[#f0fdf4] p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-[#15803d]">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">Destacado</span>
                <h3 className="saas-h4 text-[#1a1a1a]">{service.title}</h3>
                <p className="text-[14px] leading-7 text-[#555]">{service.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                  Ver el servicio
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </Row>
      </section>

      <section className="saas saas-section bg-[#f9fafb]!">
        <Row>
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Catálogo</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">Todo lo que construyo</h2>
          <p className="mb-10 text-center text-[14px] text-[#787f84]">
            Cada capacidad tiene su propia página con alcance y enfoque. Las soluciones por industria están en{" "}
            <a href="/soluciones" className="underline hover:text-[#333]">Soluciones</a>.
          </p>
        </Row>
        <Row className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          {REST.map((service) => (
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
        eyebrow="Mi enfoque"
        title="No automatizo por automatizar: primero entiendo qué se te complica"
        description="Analizo tus procesos, detecto qué vale la pena automatizar y diseño la solución antes de escribir una línea de código."
        ctaLabel="Cuéntame tu proyecto"
        ctaHref="/contacto"
      />
    </>
  );
}
