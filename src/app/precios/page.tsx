import type { Metadata } from "next";
import { Container } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";
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

      {/* Hero estilo Divi SaaS Pricing Page */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-20 text-foreground sm:py-28">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-grid-bg absolute inset-0 opacity-20" aria-hidden="true" />

        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "14%", right: "8%" }} />
          <span className="s-tri" style={{ top: "25%", left: "6%" }} />
          <span className="s-dot" style={{ bottom: "20%", left: "10%" }} />
          <span className="s-plus" style={{ top: "50%", right: "6%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <SectionHeading
            level={1}
            eyebrow="Planes y precios"
            title="Precios claros para empezar hoy"
            description={`Elige un punto de partida. Ajustamos el alcance a tu negocio y lo dejamos por escrito antes de arrancar. Escríbenos si tienes dudas: ${SITE.email}.`}
            align="center"
          />
        </Container>
      </section>

      <Pricing />
      <FaqSection items={PRICING_FAQ} />
    </>
  );
}
