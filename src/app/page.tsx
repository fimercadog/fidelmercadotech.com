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
import { Pricing } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq";
import { PRICING_FAQ } from "@/content/faq";
import { CASES } from "@/content/cases";

export default function HomePage() {
  return (
    <>
      {/* Sección 0: Hero Split (Headline + CTAs a la izquierda, Mockup en perspectiva a la derecha) */}
      <Hero />

      {/* Sección 1: Tarjetas de Capacidad (3 columnas con bordes e íconos) */}
      <CapabilityStrip />

      {/* Sección 2: Marco de Demostración Interactivas / Video Box Centrado */}
      <DemoShowcase />

      {/* Sección 3: Recorrido Rápido (Encabezado + Disposición asimétrica 2/3 y 1/3 con cifra 10x) */}
      <QuickTour />

      {/* Sección 4: Fila Destacada en Banda con Fondo ("Todo Conectado") */}
      <IllustratedRow
        illustration="collaboration"
        eyebrow="Todo conectado"
        title="Tu web y tus sistemas hablan el mismo idioma"
        description="No entregamos piezas sueltas. La página capta el contacto, el ERP lo recibe con su ficha y el equipo le da seguimiento — sin copiar datos de un lado a otro."
        bullets={["Web + ERP sobre la misma base de datos", "Integración con WhatsApp y tus herramientas", "Un solo lugar con la información correcta"]}
        href="/servicios/integraciones"
        linkLabel="Ver integraciones"
        tinted
      />

      {/* Sección 5: Soluciones & Características de Producto (2 columnas detalladas + 3 blurbs de íconos) */}
      <ProductFeatures />

      {/* Sección 6: Demostración de Datos e Inventario con IA */}
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

      {/* Sección 7: Cuadrícula 2x2 de Testimonios y Confianza con Calificación de 5 Estrellas */}
      <SocialProof />

      {/* Sección 8: Banda de Llamado a la Acción "Da el Siguiente Paso" (Pre-Footer Split Showcase) */}
      <GetOnTrackCta />

      {/* Casos Reales y Proyectos */}
      <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb]">
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
                  className="saas-shadow-soft group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-[#f5f6f7]">
                    <Image src={c.image} alt={c.title} fill className="object-cover object-top" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">{c.sector}</span>
                    <h3 className="saas-h5 text-[#333]">{c.title}</h3>
                    <p className="text-[14px] leading-6 text-[#666]">{c.summary}</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                      Ver el caso
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="flex justify-center">
            <Button asChild size="lg" className="saas-btn saas-btn-black rounded-full px-8">
              <Link href="/casos">Ver todos los casos</Link>
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Precios */}
      <div id="precios">
        <Pricing />
        <FaqSection items={PRICING_FAQ} />
      </div>

      {/* Proceso y Metodología de Trabajo */}
      <ProcessFunnel />
    </>
  );
}
