import { SocialProof } from "@/components/marketing/social-proof";
import { Hero } from "@/components/sections/hero";
import { ProblemContext } from "@/components/sections/problem-context";
import { IllustratedRow } from "@/components/sections/illustrated-row";
import { CapabilityStrip } from "@/components/marketing/capability-strip";
import { QuickTour } from "@/components/sections/quick-tour";
import { ProductFeatures } from "@/components/sections/product-features";
import { ProcessFunnel } from "@/components/sections/process-funnel";
import { ServicesStrip } from "@/components/sections/services-strip";
import { AiUseCases } from "@/components/sections/ai-use-cases";
import { GetOnTrackCta } from "@/components/sections/get-on-track-cta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — Qué es FidelOS y cuál es su propuesta de valor */}
      <Hero />

      {/* 2. Problema / contexto — Qué problemas operativos resuelve FidelOS */}
      <ProblemContext />

      {/* 3. Solución FidelOS — Todo conectado: web + ERP + WhatsApp */}
      <IllustratedRow
        illustration="collaboration"
        eyebrow="La solución"
        title="Tu web y tus sistemas hablan el mismo idioma"
        description="No entregamos piezas sueltas. La página capta el contacto, el ERP lo recibe con su ficha y el equipo le da seguimiento — sin copiar datos de un lado a otro."
        bullets={["Web + ERP sobre la misma base de datos", "Integración con WhatsApp y tus herramientas", "Un solo lugar con la información correcta"]}
        href="/servicios/integraciones"
        linkLabel="Ver integraciones"
      />

      {/* 4. Capacidades principales — Qué puede hacer FidelOS */}
      <CapabilityStrip />
      <QuickTour />
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

      {/* 5. Soluciones por vertical — Para quién es FidelOS */}
      <ProductFeatures />

      {/* 6. Cómo funciona — El recorrido del visitante a cliente */}
      <ProcessFunnel />

      {/* 7. Servicios — Catálogo de lo que construimos */}
      <ServicesStrip />

      {/* 8. Servicios de IA destacados — zoom en los 2 más diferenciados */}
      <AiUseCases />

      {/* Prueba social */}
      <SocialProof />

      {/* 9. CTA final — Llevar al visitante a contactar o pedir demo */}
      <GetOnTrackCta />
    </>
  );
}
