import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Icon } from "@/components/icon";
import { SERVICES } from "@/content/services";

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

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.04}>
                <Link
                  href={`/servicios/${service.id}`}
                  id={service.id}
                  className="group flex h-full scroll-mt-24 flex-col gap-3 rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl fmt-gradient text-white shadow-lg shadow-primary/25">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h2 className="mt-1 text-lg font-bold">{service.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                    Ver servicio
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Buscas precios de referencia?"
        description="Tenemos planes de sitio web desde $590.000 COP y un plan Web + Sistema para proyectos con CRM, inventario o automatización."
        primaryLabel="Ver planes y precios"
        primaryHref="/precios"
      />
    </>
  );
}
