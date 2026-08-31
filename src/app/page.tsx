import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CapabilityStrip } from "@/components/marketing/capability-strip";
import { SocialProof } from "@/components/marketing/social-proof";
import { Icon } from "@/components/icon";
import { Hero } from "@/components/sections/hero";
import { FeatureRow } from "@/components/sections/feature-row";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ProcessFunnel } from "@/components/sections/process-funnel";
import { SOLUTIONS } from "@/content/solutions";
import { SERVICES } from "@/content/services";
import { CASES } from "@/content/cases";

const FLAGSHIP = ["crm-inmobiliario", "rrhh", "crm-inventario"];

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

      <FeaturesGrid />

      {/* Servicios */}
      <section id="servicios" className="border-t border-border bg-secondary/60 py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Servicios"
              title="También desarrollamos soluciones a la medida"
              description="Cuando ninguna solución encaja del todo, la construimos contigo desde cero. Cada servicio tiene su propia página con el detalle."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.04}>
                <Link
                  href={`/servicios/${service.id}`}
                  className="group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl fmt-gradient text-white shadow-lg shadow-primary/25">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <h3 className="mt-1 text-base font-bold">{service.title}</h3>
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

      {/* Casos */}
      <section className="border-t border-border py-24">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Casos"
              title="Proyectos reales que puedes probar"
              description="No mostramos plantillas: estas plataformas están en producción y tienen demo pública."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] bg-muted">
                    <Image src={c.image} alt={c.title} fill className="object-cover object-top" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-6">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">{c.sector}</span>
                    <h3 className="text-base font-bold">{c.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{c.summary}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Ver el caso
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/casos">Ver todos los casos</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      <ProcessFunnel />
      <SocialProof />
    </>
  );
}
