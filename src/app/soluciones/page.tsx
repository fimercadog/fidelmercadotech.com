import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SOLUTIONS } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "CRM inmobiliario, sistema de RRHH, CRM + inventario, gestión veterinaria, FidelOS (inventario con IA) y agentes de WhatsApp. Desarrollos propios de Fidel Mercado Tech.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-24 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Soluciones"
            title="Nuestras soluciones"
            description="Cada solución resuelve un problema concreto de tu operación. Entra a cada una para ver qué incluye, cómo se ve y pedir una demostración."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
