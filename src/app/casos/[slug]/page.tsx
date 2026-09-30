import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { ContactForm } from "@/components/marketing/contact-form";
import { CASES, getCase } from "@/content/cases";
import { getSolution } from "@/content/solutions";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return {};
  return {
    title: `${study.client} — Caso`,
    description: study.summary,
    alternates: { canonical: `/casos/${study.slug}` },
    openGraph: { title: `${study.client} | Caso — Fidel Mercado Tech`, description: study.summary, type: "article" },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();
  const solution = study.solution ? getSolution(study.solution) : undefined;

  return (
    <>
      {/* Hero */}
      <section className="saas overflow-hidden bg-white pb-16 pt-20 sm:pb-24 sm:pt-28">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Link
            href="/casos"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] text-[#666] transition-colors hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="size-4" /> Casos
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">{study.sector}</span>
          <h1 className="saas-h1 max-w-3xl" style={{ color: "#1a1a1a" }}>{study.title}</h1>
          <p className="max-w-2xl text-[15px] leading-7 text-[#666]">{study.summary}</p>
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="saas-btn saas-btn-green mt-2 inline-flex items-center gap-2"
            >
              Abrir demo <ExternalLink className="size-4" />
            </a>
          ) : null}
        </Container>
      </section>

      {/* Screenshot — overlaps hero bottom */}
      <section className="saas relative z-20 -mt-24 sm:-mt-32 pb-2">
        <Container>
          <Reveal>
            <div className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
              <div className="flex items-center gap-1.5 border-b border-[rgba(0,0,0,0.07)] bg-[#f5f6f7] px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#fe8a6e]/80" />
                <span className="size-2.5 rounded-full bg-[#f8c701]/80" />
                <span className="size-2.5 rounded-full bg-[#4de961]/80" />
              </div>
              <div className="relative aspect-16/10 bg-[#f5f6f7]">
                <Image src={study.image} alt={study.title} fill priority className="object-cover object-top" sizes="(min-width: 1024px) 1000px, 100vw" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reto */}
      <section className="saas saas-section bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">El reto</span>
            <h2 className="saas-h5 text-[#333]">El problema que enfrentaban</h2>
            <p className="text-[14px] leading-7 text-[#666]">{study.challenge}</p>
          </Reveal>
          <Reveal delay={0.08} className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[#4de961]/20 bg-[#4de961]/5 p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Qué construimos</span>
            <h2 className="saas-h5 text-[#333]">Nuestra solución</h2>
            <ul className="flex flex-col gap-2.5">
              {study.approach.map((a) => (
                <li key={a} className="flex gap-3 text-[14px] leading-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                  <span className="text-[#555]">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Resultado */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Resultado</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Lo que cambió</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {study.result.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 0.04} className="saas-shadow-toggle flex gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 text-[14px]">
                <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                <span className="text-[#555]">{r}</span>
              </Reveal>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Tecnología:</span>
            {study.stack.map((t) => (
              <span key={t} className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#555] shadow-sm border border-[rgba(0,0,0,0.07)]">{t}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Solución relacionada */}
      {solution ? (
        <section className="saas saas-section bg-white">
          <Container>
            <Reveal>
              <Link
                href={`/soluciones/${solution.slug}`}
                className="saas-shadow-soft group flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Solución relacionada</span>
                  <h3 className="saas-h5 text-[#333]">{solution.name}</h3>
                  <p className="text-[14px] text-[#666]">{solution.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                  Ver solución
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {/* Contacto */}
      <section id="contacto" className="saas saas-section bg-[#f9fafb]">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Siguiente paso</span>
            <h2 className="saas-h2 text-[#333]">¿Un proyecto parecido?</h2>
            <p className="text-[14px] leading-7 text-[#666]">
              Cuéntanos tu caso y te enviamos una propuesta con alcance y precio de referencia.
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
