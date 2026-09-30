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
    "ERP para inmobiliarias, RRHH, veterinarias, clínicas, agencias de viajes y más. Plataformas propias de Fidel Mercado Tech, en producción y con demo pública.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluciones"
        title="Una plataforma lista para tu industria"
        description="Cada solución es un ERP completo adaptado a una vertical específica: con demo pública, módulos probados en producción y acceso inmediato."
        ctas={[
          { label: "Ver soluciones", href: "#soluciones" },
          { label: "Solicitar demo", href: "/contacto?motivo=demo", variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-45.png", alt: "Dashboard FidelOS", width: 1060, height: 900 }}
      />

      {/* Grid de 6 Soluciones Principales (6 Cards en Grid 3x2) */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo"
              title="Soluciones especializadas"
              description="Cada módulo resuelve una necesidad concreta de tu empresa con tecnología moderna y soporte continuo."
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
        title="¿No encuentras tu industria?"
        description="Si ninguna solución encaja del todo, la construimos desde cero sobre la misma base probada. Cuéntanos tu operación."
        primaryLabel="Hablar de mi caso"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
