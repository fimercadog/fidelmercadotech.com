import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { CASES } from "@/content/cases";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Proyectos reales de Fidel Mercado Tech: portal inmobiliario con ERP conectado y sistema de Recursos Humanos para PYMES, ambos con demo disponible.",
  alternates: { canonical: "/casos" },
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="Proyectos reales, en producción"
        description="No mostramos plantillas: estas son plataformas que construimos y que puedes abrir y probar ahora mismo."
        ctas={[
          { label: "Ver proyectos", href: "#proyectos" },
          { label: "Solicitar demo", href: "/contacto?motivo=demo", variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-37.png", alt: "Widgets del dashboard FidelOS", width: 760, height: 520 }}
      />

      {/* Grid de casos con diseño SaaS pack */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="flex flex-col gap-10">
          {CASES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/casos/${c.slug}`}
                className="saas-shadow-soft group grid gap-8 overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-2 md:items-center md:p-8"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-[18px] bg-[#f5f6f7]">
                  <Image
                    src={c.image}
                    alt={`${c.client} — ${c.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">{c.sector}</span>
                  <h2 className="saas-h5 text-[#333]">{c.title}</h2>
                  <p className="text-[14px] leading-7 text-[#666]">{c.summary}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                    Ver el caso
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        title="¿Quieres algo parecido para tu empresa?"
        description="Cuéntanos tu operación y te proponemos el alcance, con precio de referencia."
        primaryLabel="Solicitar propuesta"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
