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
      {/* Hero */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden pt-24 pb-40 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "16%", right: "8%" }} />
          <span className="s-dot" style={{ top: "30%", left: "10%" }} />
        </div>
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Nosotros"
            title="Software que saca a las empresas del proceso manual"
            description="Somos un equipo de desarrollo enfocado en PYMES: creamos páginas web, sistemas de gestión y soluciones con IA que las empresas de verdad usan a diario."
          />
        </Container>
      </section>

      {/* Imagen que sale del hero */}
      <section className="relative z-10 -mt-28">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-border bg-card fmt-card-shadow">
            <div className="relative aspect-16/8 bg-muted">
              <Image
                src={CASES[0].image}
                alt="Plataforma desarrollada por Fidel Mercado Tech"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 1000px, 100vw"
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

      {/* Misión */}
      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <span className="fmt-eyebrow-pill w-fit">Nuestra misión</span>
            <h2 className="text-2xl font-bold sm:text-3xl">Que la tecnología deje de ser el cuello de botella</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Muchas empresas crecen hasta que las hojas de cálculo, los correos sueltos y las herramientas
              desconectadas les frenan. Nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              Nosotros construimos el sistema que refleja cómo trabaja tu equipo: un solo lugar con la información
              correcta, con roles, reportes y automatizaciones. Y cuando tiene sentido, le sumamos IA para casos
              concretos, siempre con revisión humana.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Illustration name="productivity" alt="Ilustración de productividad" />
          </Reveal>
        </Container>
      </section>

      {/* Cómo trabajamos */}
      <section className="border-t border-border bg-secondary/60 py-20">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Cómo trabajamos"
              title="Seis cosas que no negociamos"
              description="Los principios que guían cada proyecto, del primero al último día."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl fmt-gradient text-white shadow-lg shadow-primary/25">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <h3 className="mt-1 text-base font-bold">{p.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Casos */}
      <section className="py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <SectionHeading
              eyebrow="Casos"
              title="Lo que hemos construido"
              description="Proyectos en producción que puedes abrir y probar."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/casos/${c.slug}`}
                  className="group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-muted">
                    <Image src={c.image} alt={c.title} fill className="object-cover object-top" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-6 pt-0">
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
        </Container>
      </section>

      {/* Quién está detrás */}
      <section className="border-t border-border bg-secondary/60 py-20">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal className="flex flex-col items-center gap-4">
            <Illustration name="about" alt="Equipo de Fidel Mercado Tech" className="max-w-xs" />
            <span className="fmt-eyebrow-pill">Quién está detrás</span>
            <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">Un equipo cercano, no una fábrica de software</h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Trabajamos con pocas empresas a la vez para poder entender cada operación a fondo. Hablas directo con
              quien construye, por WhatsApp o llamada, durante y después del proyecto. Escríbenos a {SITE.email}.
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
