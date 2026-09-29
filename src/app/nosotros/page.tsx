import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { Illustration } from "@/components/marketing/illustration";
import { IconCard, Row, type PackIcon } from "@/components/saas/kit";
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

const PRINCIPLES: { icon: PackIcon; title: string; detail: string }[] = [
  { icon: "browser", title: "Resolvemos un problema concreto", detail: "Cada proyecto arranca entendiendo qué proceso duele hoy, no vendiendo funciones." },
  { icon: "sliders", title: "Construido sobre base probada", detail: "Partimos de módulos ya en producción (ERP, inventario, RRHH, IA), no de cero absoluto." },
  { icon: "lock", title: "Con trazabilidad y control", detail: "Roles, permisos y auditoría desde el primer día: sabes quién hizo qué y cuándo." },
  { icon: "calendar", title: "Rápido y medible", detail: "Entregas por fases, tecnología moderna y métricas para saber si está funcionando." },
  { icon: "mail", title: "Cerca por WhatsApp", detail: "Comunicación directa durante y después del proyecto, sin tickets que se pierden." },
  { icon: "link", title: "A tu operación, no al revés", detail: "El software se adapta a cómo trabaja tu equipo, no una plantilla genérica." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Software que saca a las empresas del proceso manual"
        description="Somos un equipo de desarrollo enfocado en PYMES: creamos páginas web, sistemas de gestión y soluciones con IA que las empresas de verdad usan a diario."
        ctas={[
          { label: "Ver soluciones", href: "/soluciones" },
          { label: "Hablar con nosotros", href: "/contacto", variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-4.png", alt: "Dashboard FidelOS en laptop", width: 1060, height: 895 }}
      />

      {/* Imagen que se superpone al Hero estilo SaaS About */}
      <section className="relative z-20 -mt-24 sm:-mt-28">
        <Container>
          <Reveal className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
            <div className="relative aspect-[16/8] w-full bg-[#f5f6f7]">
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

      {/* Misión — Estilo SaaS 2-Column Split */}
      <section className="saas saas-section bg-white">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Nuestra misión</span>
            <h2 className="saas-h2 text-[#333]">
              Que la tecnología deje de ser el cuello de botella
            </h2>
            <p className="text-[15px] leading-7 text-[#666]">
              Muchas empresas crecen hasta que las hojas de cálculo, los correos sueltos y las herramientas
              desconectadas les frenan. Nadie sabe cuál es el dato bueno y cada proceso vive en un lugar distinto.
            </p>
            <p className="text-[15px] leading-7 text-[#666]">
              Nosotros construimos el sistema que refleja cómo trabaja tu equipo: un solo lugar con la información
              correcta, con roles, reportes y automatizaciones. Y cuando tiene sentido, le sumamos IA para casos
              concretos, siempre con revisión humana.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <div className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 w-full max-w-lg">
              <Illustration name="productivity" alt="Ilustración de productividad" className="w-full h-auto" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cómo trabajamos — SaaS Principles 3-Col IconCard outline */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Row>
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Cómo trabajamos</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">Seis cosas que no negociamos</h2>
          <p className="mb-[40px] text-center text-[14px] text-[#666]">Los principios que guían cada proyecto, del primero al último día.</p>
        </Row>
        <Row className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <IconCard key={p.title} icon={p.icon} title={p.title} text={p.detail} variant="outline" />
          ))}
        </Row>
      </section>

      {/* Casos — Estilo SaaS Grid */}
      <section className="saas saas-section bg-[#f9fafb]">
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
                  className="saas-shadow-soft group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-video bg-[#f5f6f7]">
                    <Image src={c.image} alt={c.title} fill className="object-cover object-top" sizes="(min-width: 768px) 45vw, 100vw" />
                  </div>
                  <div className="flex flex-col gap-2 p-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">{c.sector}</span>
                    <h3 className="saas-h5 text-[#333]">{c.title}</h3>
                    <p className="text-[14px] leading-6 text-[#666]">{c.summary}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
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
      <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-white">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Reveal className="saas-shadow-soft flex max-w-3xl flex-col items-center gap-6 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-10">
            <Illustration name="about" alt="Equipo de Fidel Mercado Tech" className="max-w-xs" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Quién está detrás</span>
            <h2 className="saas-h2 text-[#333]">Un equipo cercano, no una fábrica de software</h2>
            <p className="text-[15px] leading-7 text-[#666]">
              Trabajamos con pocas empresas a la vez para poder entender cada operación a fondo. Hablas directo con
              quien construye, por WhatsApp o llamada, durante y después del proyecto. Escríbenos a{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-[#02e173] underline">
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
