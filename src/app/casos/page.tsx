import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { CASES } from "@/content/cases";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Proyectos reales de Fidel Mercado Tech: portal inmobiliario con CRM conectado y sistema de Recursos Humanos para PYMES, ambos en producción y con demo pública.",
  alternates: { canonical: "/casos" },
};

export default function CasosPage() {
  return (
    <>
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-24 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "18%", left: "7%" }} />
          <span className="s-tri" style={{ bottom: "20%", right: "9%" }} />
        </div>
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Casos"
            title="Proyectos reales, en producción"
            description="No mostramos plantillas: estas son plataformas que construimos y que puedes abrir y probar ahora mismo."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col gap-10">
          {CASES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/casos/${c.slug}`}
                className="fmt-elevate group grid gap-8 overflow-hidden rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:items-center md:p-8"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.client} — ${c.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="fmt-eyebrow-pill w-fit">{c.sector}</span>
                  <h2 className="text-xl font-bold sm:text-2xl">{c.title}</h2>
                  <p className="text-sm leading-7 text-muted-foreground">{c.summary}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
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
