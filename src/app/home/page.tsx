import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityStrip } from "@/components/marketing/capability-strip";
import { SocialProof } from "@/components/marketing/social-proof";
import { Hero } from "@/components/sections/hero";
import { DemoShowcase } from "@/components/sections/demo-showcase";
import { QuickTour } from "@/components/sections/quick-tour";
import { IllustratedRow } from "@/components/sections/illustrated-row";
import { ProductFeatures } from "@/components/sections/product-features";
import { GetOnTrackCta } from "@/components/sections/get-on-track-cta";
import { ProcessFunnel } from "@/components/sections/process-funnel";
import { CASES } from "@/content/cases";

export const metadata = {
  title: "Home",
  description: "Página principal de Fidel Mercado Tech — Software, IA y automatización para empresas.",
};

export default function HomeLayoutPage() {
  return (
    <>
      {/* Hero Split con Arch y Mockup */}
      <Hero />

      {/* Capabilidades en 3 Columnas */}
      <CapabilityStrip />

      {/* Demo Showcase Video / Canvas */}
      <DemoShowcase />

      {/* Quick Tour con Métrica 10x */}
      <QuickTour />

      {/* Fila Ilustrada 1 */}
      <IllustratedRow
        illustration="collaboration"
        eyebrow="Todo conectado"
        title="Tu web y tus sistemas hablan el mismo idioma"
        description="No entregamos piezas sueltas. La página capta el contacto, el CRM lo recibe con su ficha y el equipo le da seguimiento — sin copiar datos de un lado a otro."
        bullets={["Web + CRM sobre la misma base de datos", "Integración con WhatsApp y tus herramientas", "Un solo lugar con la información correcta"]}
        href="/servicios/integraciones"
        linkLabel="Ver integraciones"
        tinted
      />

      {/* Product Features Grid */}
      <ProductFeatures />

      {/* Fila Ilustrada 2 */}
      <IllustratedRow
        illustration="productivity"
        eyebrow="Inventario con IA"
        title="Levanta tu inventario hablándole o tomándole una foto"
        description="FidelOS captura productos y movimientos por fotografía, por voz o por foto + voz. Una capa de IA revisa e interpreta la captura antes de registrarla en tu inventario."
        bullets={["Captura por fotografía", "Captura por voz", "Captura por foto + voz"]}
        href="/servicios/automatizacion"
        linkLabel="Ver FidelOS"
        reverse
      />

      {/* Testimonios & Prueba Social */}
      <SocialProof />

      {/* Banner Pre-Footer Get On Track */}
      <GetOnTrackCta />

      {/* Casos Reales */}
      <section className="border-t border-border py-24 bg-background">
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
                  className="fmt-elevate group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card"
                >
                  <div className="relative aspect-video bg-muted">
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
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 font-semibold">
              <Link href="/casos">Ver todos los casos</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Proceso y Metodología */}
      <ProcessFunnel />
    </>
  );
}
