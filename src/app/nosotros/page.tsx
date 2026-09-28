import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Illustration } from "@/components/marketing/illustration";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/marketing/cta-band";
import { PillBar } from "@/components/marketing/pill-bar";
import { CASES } from "@/content/cases";
import { SITE, whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Fidel Mercado Tech desarrolla software empresarial, automatizaciones y soluciones con IA para empresas que quieren dejar atrás los procesos manuales.",
  alternates: { canonical: "/nosotros" },
};

const PRINCIPLES = [
  { icon: "Target", title: "Resolvemos un problema concreto", detail: "Cada proyecto arranca entendiendo qué proceso duele hoy, no vendiendo funciones." },
  { icon: "Layers", title: "Construido sobre base probada", detail: "Partimos de módulos ya en producción (CRM, inventario, RRHH, IA), no de cero absoluto." },
  { icon: "ShieldCheck", title: "Con trazabilidad y control", detail: "Roles, permisos y auditoría desde el primer día: sabes quién hizo qué y cuándo." },
  { icon: "Gauge", title: "Rápido y medible", detail: "Entregas por fases, tecnología moderna y métricas para saber si está funcionando." },
  { icon: "MessageSquare", title: "Cerca por WhatsApp", detail: "Comunicación directa durante y después del proyecto, sin tickets que se pierden." },
  { icon: "Puzzle", title: "A tu operación, no al revés", detail: "El software se adapta a cómo trabaja tu equipo, no una plantilla genérica." },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero estilo Divi SaaS About Page */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden pt-20 pb-36 text-foreground sm:pt-28 sm:pb-44">
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
            eyebrow="Nosotros"
            title="Software que saca a las empresas del proceso manual"
            description="Somos un equipo de desarrollo enfocado en PYMES: creamos páginas web, sistemas de gestión y soluciones con IA que las empresas de verdad usan a diario."
            align="center"
          />
        </Container>
      </section>

      {/* Imagen que se superpone al Hero estilo SaaS About */}
      <section className="relative z-20 -mt-24 sm:-mt-28">
        <Container>
          <Reveal className="fmt-elevate overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
            <div className="relative aspect-[16/8] w-full bg-muted">
              <Image
                src={CASES[0].image}
                alt="Plataforma desarrollada por Fidel Mercado Tech"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar demostración", href: "/contacto?motivo=demo", variant: "default" },
          { label: "Ver soluciones", href: "/soluciones" },
          { label: "WhatsApp", href: whatsappUrl("Hola, quiero conocer más sobre Fidel Mercado Tech."), external: true },
        ]}
      />

      {/* Misión — Estilo SaaS 2-Column Split */}
      <section className="py-20 sm:py-28 bg-background">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <span className="fmt-eyebrow-pill w-fit">Nuestra misión</span>
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
              Que la tecnología deje de ser el cuello de botella
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Muchas empresas crecen hasta que las hojas de cálculo, los correos sueltos y las herramientas
              desconectadas les frenan. Nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.
            </p>
            <p className="text-base leading-7 text-muted-foreground">
              Nosotros construimos el sistema que refleja cómo trabaja tu equipo: un solo lugar con la información
              correcta, con roles, reportes y automatizaciones. Y cuando tiene sentido, le sumamos IA para casos
              concretos, siempre con revisión humana.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <div className="fmt-elevate overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl w-full max-w-lg">
              <Illustration name="productivity" alt="Ilustración de productividad" className="w-full h-auto" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cómo trabajamos — Estilo SaaS Principles 3-Col Card Grid */}
      <section className="border-t border-border bg-card/30 py-20 sm:py-28">
        <Container className="flex flex-col gap-14">
          <Reveal>
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Seis cosas que no negociamos"
              description="Los principios que guían cada proyecto, del primero al último día."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="fmt-elevate group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon name={p.icon} className="size-6" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Casos — Estilo SaaS Grid */}
      <section className="py-20 sm:py-28 bg-background">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Casos"
              title="Lo que hemos construido"
              description="Proyectos en producción que puedes abrir y probar."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="fmt-elevate group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-video bg-muted">
                    <Image src={c.image} alt={c.title} fill className="object-cover object-top" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-8">
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">{c.sector}</span>
                    <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{c.summary}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Ver el caso
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quién está detrás — Estilo SaaS Team Card */}
      <section className="border-t border-border bg-card/40 py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal className="fmt-elevate flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-10 shadow-xl">
            <Illustration name="about" alt="Equipo de Fidel Mercado Tech" className="max-w-xs" />
            <span className="fmt-eyebrow-pill">Quién está detrás</span>
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Un equipo cercano, no una fábrica de software</h2>
            <p className="text-base leading-7 text-muted-foreground">
              Trabajamos con pocas empresas a la vez para poder entender cada operación a fondo. Hablas directo con
              quien construye, por WhatsApp o llamada, durante y después del proyecto. Escríbenos a{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-primary underline">
                {SITE.email}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="¿Hablamos de tu operación?"
        description="Cuéntanos qué proceso quieres mejorar y te proponemos por dónde empezar."
        primaryLabel="Solicitar demostración"
        primaryHref="/contacto?motivo=demo"
      />
    </>
  );
}
