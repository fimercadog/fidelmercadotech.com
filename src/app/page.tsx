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
import { PillBar } from "@/components/marketing/pill-bar";
import { ServiceGrid } from "@/components/marketing/service-grid";
import { EllipseBanner } from "@/components/marketing/ellipse-banner";
import { Hero } from "@/components/sections/hero";
import { FeatureRow } from "@/components/sections/feature-row";
import { IllustratedRow } from "@/components/sections/illustrated-row";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ProcessFunnel } from "@/components/sections/process-funnel";
import { SOLUTIONS } from "@/content/solutions";
import { SERVICES } from "@/content/services";
import { CASES } from "@/content/cases";
import { whatsappUrl } from "@/content/site";

const FLAGSHIP = ["crm-inmobiliario", "rrhh", "crm-inventario"];

export default function HomePage() {
  const flagship = FLAGSHIP.map((slug) => SOLUTIONS.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <>
      <Hero />
      <PillBar
        links={[
          { label: "Ver soluciones", href: "/soluciones", variant: "default" },
          { label: "Solicitar demo", href: "/contacto?motivo=demo" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero información sobre sus soluciones."), external: true },
        ]}
      />
      <CapabilityStrip />

      <IllustratedRow
        illustration="collaboration"
        eyebrow="Todo conectado"
        title="Tu web y tus sistemas hablan el mismo idioma"
        description="No entregamos piezas sueltas. La página capta el contacto, el CRM lo recibe con su ficha y el equipo le da seguimiento — sin copiar datos de un lado a otro."
        bullets={["Web + CRM sobre la misma base de datos", "Integración con WhatsApp y tus herramientas", "Un solo lugar con la información correcta"]}
        href="/servicios/integraciones"
        linkLabel="Ver integraciones"
      />

      <section className="border-y border-border bg-secondary/60">
        <IllustratedRow
          illustration="productivity"
          eyebrow="Menos trabajo manual"
          title="Los procesos repetitivos dejan de ocupar a tu equipo"
          description="Automatizamos lo que se hace igual siempre: sincronización entre sistemas, notificaciones, reportes programados y flujos que se disparan solos ante un evento."
          bullets={["Diagnóstico de qué conviene automatizar", "Flujos visuales y mantenibles con n8n", "Alertas si algo falla, para actuar a tiempo"]}
          href="/servicios/automatizacion"
          linkLabel="Ver automatización"
          reverse
        />
      </section>

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
          <ServiceGrid
            items={SERVICES.map((service) => ({
              id: service.id,
              icon: service.icon,
              title: service.title,
              description: service.description,
              href: `/servicios/${service.id}`,
            }))}
          />
        </Container>
      </section>

      <EllipseBanner
        eyebrow="Sistemas conectados"
        title="Creamos sistemas conectados para que tu equipo se enfoque en el negocio"
        description="Web, CRM, inventario, automatización e IA sobre la misma base de datos: un dato capturado una vez, disponible donde tiene que estar."
        ctaLabel="Ver soluciones"
        ctaHref="/soluciones"
      />

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
