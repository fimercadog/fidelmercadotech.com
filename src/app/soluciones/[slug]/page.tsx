import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/marketing/device-frame";
import { ContactForm } from "@/components/marketing/contact-form";
import { whatsappUrl } from "@/content/site";
import { ExternalLink } from "lucide-react";
import { SOLUTIONS, getSolution, STATUS_LABEL } from "@/content/solutions";
import { TermBadge } from "@/components/marketing/term-badge";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.summary,
    alternates: { canonical: `/soluciones/${solution.slug}` },
    openGraph: { title: `${solution.name} | Fidel Mercado Tech`, description: solution.summary, type: "website" },
  };
}


export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const isPhone = solution.heroImage.kind === "B";

  return (
    <>
      {/* Hero */}
      <section className="saas overflow-hidden bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Link href="/soluciones" className="inline-flex w-fit items-center gap-1.5 text-[13px] text-[#666] transition-colors hover:text-[#1a1a1a]">
              <ArrowLeft className="size-4" /> Soluciones
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-[#4de961]/20 text-[#15803d]">
                <Icon name={solution.icon} className="size-5" />
              </span>
              <TermBadge term={STATUS_LABEL[solution.status]} className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#555]" />
              <TermBadge term={solution.category} className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]" />
            </div>
            <h1 className="saas-h1" style={{ color: "#1a1a1a" }}>{solution.name}</h1>
            <p className="text-[15px] leading-7 text-[#666]">{solution.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contacto?motivo=${solution.cta.kind === "demo" ? "demo" : "proyecto"}&interes=${solution.slug}`}
                className="saas-btn saas-btn-green"
              >
                {solution.cta.label}
              </Link>
              {solution.demoUrl && (
                <a
                  href={solution.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="saas-btn saas-btn-outline inline-flex items-center gap-2"
                >
                  <ExternalLink className="size-4" />
                  Ver demo en vivo
                </a>
              )}
              <Link
                href={whatsappUrl(`Hola, quiero ver la demostración de ${solution.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="saas-btn saas-btn-outline"
              >
                Hablar por WhatsApp
              </Link>
            </div>
          </div>
          <div>{isPhone ? <PhoneFrame slot={solution.heroImage} /> : <BrowserFrame slot={solution.heroImage} priority />}</div>
        </Container>
      </section>

      {/* Problema / solución */}
      <section className="saas saas-section bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">El problema</span>
            <h2 className="saas-h5 text-[#333]">¿Por qué necesitas esto?</h2>
            <p className="text-[14px] leading-7 text-[#666]">{solution.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[#4de961]/20 bg-[#4de961]/5 p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Cómo lo resolvemos</span>
            <h2 className="saas-h5 text-[#333]">Nuestra solución</h2>
            <p className="text-[14px] leading-7 text-[#555]">{solution.summary}</p>
          </Reveal>
        </Container>
      </section>

      {/* Funcionalidades */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Alcance</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Qué incluye</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {solution.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="saas-shadow-toggle flex h-full flex-col gap-2 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                  <h3 className="saas-h5 text-[#333]">{f.title}</h3>
                  <p className="text-[14px] leading-6 text-[#666]">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>


      {/* Beneficios + stack */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Beneficios</span>
            <h2 className="saas-h2 text-[#333]">Lo que ganas</h2>
            <ul className="flex flex-col gap-3">
              {solution.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-[14px]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                  <span className="text-[#555]">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Stack</span>
            <h2 className="saas-h2 text-[#333]">Tecnología</h2>
            <div className="flex flex-wrap gap-2">
              {solution.stack.map((tech) => (
                <TermBadge key={tech} term={tech} className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#555] shadow-sm border border-[rgba(0,0,0,0.07)]" />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="saas saas-section bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Siguiente paso</span>
            <h2 className="saas-h2 text-[#333]">Pide la demostración de {solution.name}</h2>
            <p className="text-[14px] leading-7 text-[#666]">
              Déjanos tus datos y coordinamos una sesión corta para mostrarte la solución funcionando y resolver tus
              dudas.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="saas-shadow-soft rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
