import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SOLUTIONS } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluciones por industria",
  description:
    "ERP para inmobiliarias, RRHH, veterinarias, clínicas, agencias de viajes y más. Plataformas propias de Fidel Mercado Tech, con demo pública.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="La solución que tu industria ya necesita"
        description="Cada solución es un ERP completo adaptado a un tipo de negocio, pensado para destrabar lo que más se complica en ese negocio: con demo pública, módulos ya construidos y acceso inmediato."
        ctas={[
          { label: "Ver soluciones", href: "#soluciones" },
          { label: "Solicitar demo", href: "/contacto?motivo=demo", variant: "outline" },
        ]}
        // TODO(imagen): reemplazar por una captura real de un ERP con datos cargados (la anterior era una portada vacía).
        image={{ src: "/brand/illus-productivity.png", alt: "Ilustración de una persona trabajando con su sistema", width: 1600, height: 1200 }}
      />

      {/* Grid de 6 Soluciones Principales (6 Cards en Grid 3x2) */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo"
              title="Soluciones especializadas"
              description="Cada módulo resuelve algo concreto de tu operación, con tecnología moderna y acompañamiento después de la entrega."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.filter((s) => !s.hidden).map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Tu caso es distinto?"
        description="Si ninguna solución encaja del todo, la construyo desde cero sobre la misma base ya construida. Cuéntame tu operación."
        primaryLabel="Cuéntame tu caso"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
