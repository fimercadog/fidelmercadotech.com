import type { Metadata } from "next";
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
      <section className="fmt-dark relative overflow-hidden bg-background py-20 text-foreground">
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

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal as="section" key={service.id} delay={i * 0.04}>
                <div id={service.id} className="flex h-full scroll-mt-24 flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl fmt-gradient text-white">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h2 className="text-lg">{service.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                </div>
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
