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
import { CASES } from "@/content/cases";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Fidel Mercado Tech desarrolla software empresarial, automatizaciones y soluciones con IA para empresas que quieren dejar atrás los procesos manuales.",
  alternates: { canonical: "/nosotros" },
};

const PRINCIPLES: { icon: PackIcon; title: string; detail: string }[] = [
  { icon: "browser", title: "Voy al problema real", detail: "Cada proyecto arranca entendiendo qué proceso se te complica hoy, no vendiendo funciones." },
  { icon: "sliders", title: "Sobre base ya construida", detail: "Parto de módulos que ya tengo construidos (ERP, inventario, RRHH, IA), no de cero absoluto." },
  { icon: "lock", title: "Tu información, a salvo", detail: "Roles, permisos y auditoría desde el primer día: sabes quién hizo qué y cuándo." },
  { icon: "calendar", title: "Rápido y medible", detail: "Entregas por fases, tecnología moderna y métricas para saber si está funcionando." },
  { icon: "mail", title: "Cerca después de entregar", detail: "Comunicación directa por WhatsApp durante y después del proyecto, sin tickets que se pierden." },
  { icon: "link", title: "Me adapto a tu operación", detail: "El software se ajusta a cómo trabaja tu equipo, no a una plantilla genérica." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="A quien llaman cuando algo se complica"
description="Llevo años siendo la persona a la que buscan cuando algo se traba y nadie más logra destrabarlo. Hoy lo hago con software de gestión, automatización e IA para PYMES, entendiendo tu operación antes de escribir una línea de código."
        ctas={[
          { label: "Ver soluciones", href: "/soluciones" },
          { label: "Cuéntame tu caso", href: "/contacto", variant: "outline" },
        ]}
        // TODO(imagen): reemplazar por una captura real de un producto (la anterior era una portada vacía).
        image={{ src: "/brand/illus-about.png", alt: "Ilustración de un equipo de trabajo", width: 1600, height: 1200 }}
      />

      {/* Imagen que se superpone al Hero estilo SaaS About */}
      <section className="relative z-20">
        <Container>
          <Reveal className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
            <div className="relative aspect-16/8 w-full bg-[#f5f6f7]">
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
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Mi misión</span>
            <h2 className="saas-h2 text-[#333]">
              Que tú te dediques a tu negocio, y yo a lo que se complica
            </h2>
            <p className="text-[15px] leading-7 text-[#666]">
              Mucha gente me busca cuando algo se traba y nadie más logra destrabarlo. Y es muy común en las
              empresas: crecen hasta que las hojas de cálculo, los correos sueltos y las herramientas
              desconectadas les frenan, y nadie sabe cuál es el dato bueno.
            </p>
            <p className="text-[15px] leading-7 text-[#666]">
              Ahí entro yo: construyo el sistema que refleja cómo trabaja tu equipo, con la información correcta
              en un solo lugar, roles, reportes y automatizaciones. Cuando tiene sentido le sumo IA para casos
              concretos, siempre con revisión humana, y sigo cerca para que todo siga funcionando.
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
          <p className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Cómo trabajo</p>
          <h2 className="saas-h2 mb-4 text-center text-[#333]">Seis compromisos que no negocio</h2>
          <p className="mb-10 text-center text-[14px] text-[#666]">Los compromisos que guían cada proyecto, del primero al último día.</p>
        </Row>
        <Row className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
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
              title="Lo que he resuelto"
              description="Proyectos con demo que puedes abrir y probar."
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

      {/* Quién está detrás — Perfil del fundador */}
      <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-white">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna izquierda: narrativa */}
          <Reveal className="flex flex-col gap-5">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Quién está detrás</span>
            <h2 className="saas-h2 text-[#333]">
              Hablas directo con quien te va a resolver el problema
            </h2>
            <p className="text-[15px] leading-7 text-[#666]">
              Soy <strong className="text-[#1a1a1a]">Fidel Mercado</strong>, fundador de Fidel Mercado Tech —
              un grupo de desarrolladores especializados en software empresarial para PYMES.
              Desde 2020 hemos construido sistemas de gestión para negocios reales: clínicas veterinarias,
              clínicas estéticas, ferreterías, instituciones educativas, comercios y empresas de servicios
              en Colombia y Estados Unidos.
            </p>
            <p className="text-[15px] leading-7 text-[#666]">
              No vendo plantillas. Cada módulo que te ofrezco — inventario, agenda, historia clínica, facturación,
              CRM, agentes de WhatsApp con IA — ya lo construí y ajusté en proyectos anteriores. También monto
              modelos de IA que corren en tu propio servidor, para que tu información no salga de tu empresa.
              Parto de una base ya construida y la adapto a tu operación sin empezar desde cero.
            </p>
            <p className="text-[15px] leading-7 text-[#666]">
              Cuando me contratas, el trato es directo conmigo desde el diagnóstico y durante toda la entrega —
              no hay vendedor en el medio que prometa lo que no sabe construir.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 inline-flex w-fit text-[15px] font-semibold text-[#15803d] transition-colors hover:text-[#4de961]"
            >
              {SITE.email}
            </a>
          </Reveal>

          {/* Columna derecha: certificaciones */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="saas-shadow-soft flex flex-col gap-1 rounded-[20px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                <span className="text-[32px] font-black leading-none tracking-tight text-[#1a1a1a]">+6</span>
                <span className="text-[13px] leading-5 text-[#888]">años en sistemas empresariales</span>
              </div>
              <div className="saas-shadow-soft flex flex-col gap-1 rounded-[20px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                <span className="text-[32px] font-black leading-none tracking-tight text-[#1a1a1a]">+10</span>
                <span className="text-[13px] leading-5 text-[#888]">sistemas desarrollados de punta a punta</span>
              </div>
            </div>
            {/* Card ancha: 15 años programando */}
            <div className="saas-shadow-soft flex flex-col gap-1 rounded-[20px] border-2 border-[#4de961]/40 bg-[#f0fdf4] p-6">
              <span className="text-[48px] font-black leading-none tracking-tight text-[#1a1a1a]">16 años</span>
              <span className="text-[14px] font-semibold text-[#15803d]">programando — desde 2010</span>
              <span className="mt-1 text-[13px] leading-5 text-[#666]">De apps móviles en Bogotá a ERP empresariales en Colombia y EE.UU.</span>
            </div>
            {/* Badges certificaciones */}
            {[
              {
                label: "Meta Back-End Developer",
                sub: "Certificado profesional · Coursera × Meta · ene 2026",
                url: "https://coursera.org/verify/professional-cert/IGI8N24BEKR3",
              },
              {
                label: "Back-End Developer Certified Professional",
                sub: "Certificado profesional · jun 2025",
                url: "https://www.linkedin.com/in/fidel-mercado-g/details/certifications/",
              },
            ].map((cert) => (
              <div key={cert.label} className="saas-shadow-soft flex items-center gap-4 rounded-[20px] border border-[rgba(0,0,0,0.07)] bg-white p-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0081fb]/10 text-[20px] font-black text-[#0081fb]">
                  M
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[13px] font-bold text-[#1a1a1a]">{cert.label}</span>
                  <span className="text-[12px] text-[#888]">{cert.sub}</span>
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-[#15803d] hover:underline">
                    Verificar certificado →
                  </a>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>


      <CtaBand
        title="¿Qué se te está complicando?"
        description="Cuéntame qué proceso quieres mejorar o destrabar y te propongo por dónde empezar."
        primaryLabel="Cuéntame tu caso"
        primaryHref="/contacto?motivo=demo"
      />
    </>
  );
}
