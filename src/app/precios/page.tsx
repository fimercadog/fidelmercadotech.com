import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Pricing } from "@/components/sections/pricing";
import { FaqSection } from "@/components/sections/faq";
import { PRICING_FAQ } from "@/content/faq";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Planes y precios",
  description:
    "Planes de sitio web desde $590.000 COP (Express, Profesional, Premium) y plan Web + Sistema desde $2.490.000 COP para proyectos con CRM, inventario, RRHH o automatización.",
  alternates: { canonical: "/precios" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function PreciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="fmt-dark relative overflow-hidden bg-background py-20 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Planes y precios"
            title="Precios claros para empezar hoy"
            description={`Elige un punto de partida. Ajustamos el alcance a tu negocio y lo dejamos por escrito antes de arrancar. Escríbenos si tienes dudas: ${SITE.email}.`}
          />
        </Container>
      </section>

      <Pricing />
      <FaqSection items={PRICING_FAQ} />
      <CtaBand
        title="¿No sabes cuál plan te conviene?"
        description="Cuéntanos qué necesitas y te recomendamos el plan (o el alcance) que mejor encaja."
        primaryLabel="Solicitar recomendación"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
