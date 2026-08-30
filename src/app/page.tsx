import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CapabilityStrip } from "@/components/marketing/capability-strip";
import { SocialProof } from "@/components/marketing/social-proof";
import { CtaBand } from "@/components/marketing/cta-band";
import { Icon } from "@/components/icon";
import { Hero } from "@/components/sections/hero";
import { FeatureRow } from "@/components/sections/feature-row";
import { ProcessFunnel } from "@/components/sections/process-funnel";
import { SOLUTIONS } from "@/content/solutions";
import { SERVICES } from "@/content/services";

const FLAGSHIP = ["fidelos", "crm-inventario", "agentes-whatsapp"];

export default function HomePage() {
  const flagship = FLAGSHIP.map((slug) => SOLUTIONS.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <>
      <Hero />
      <CapabilityStrip />

      {/* Soluciones */}
      <section id="soluciones" className="py-20">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Nuestras soluciones"
              title="Productos listos para tu empresa"
              description="Desarrollos propios que resuelven un problema concreto. Cada uno tiene demostración y página con el detalle."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/soluciones">Ver todas las soluciones</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Filas de producto destacado (estilo case study) */}
      <div className="border-t border-border">
        {flagship.map((solution, i) => (
          <div key={solution.slug} className={i > 0 ? "border-t border-border" : undefined}>
            <FeatureRow
              eyebrow={solution.category}
              icon={solution.icon}
              title={solution.name}
              description={solution.summary}
              bullets={solution.highlights}
              href={`/soluciones/${solution.slug}`}
              image={solution.heroImage}
              device={solution.heroImage.kind === "B" ? "phone" : "browser"}
              reverse={i % 2 === 1}
            />
          </div>
        ))}
      </div>

      {/* Servicios */}
      <section id="servicios" className="border-t border-border bg-muted/30 py-20">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Servicios"
              title="También desarrollamos soluciones a la medida"
              description="Cuando ninguna solución encaja del todo, la construimos contigo desde cero."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.04}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h3 className="text-base">{service.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <ProcessFunnel />
      <SocialProof />
      <CtaBand />
    </>
  );
}
