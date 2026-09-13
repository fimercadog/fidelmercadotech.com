import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative flex flex-col items-center gap-5 py-20 text-center sm:py-24">
          <Link
            href="/casos"
            className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Casos
          </Link>
          <span className="fmt-eyebrow-pill">{study.sector}</span>
          <h1 className="max-w-3xl text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">{study.title}</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{study.summary}</p>
          {study.liveUrl ? (
            <Button asChild size="lg" variant="outline">
              <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                Abrir demo <ExternalLink className="size-4" />
              </a>
            </Button>
          ) : null}
        </Container>
      </section>

      {/* Screenshot */}
      <section className="relative -mt-10 pb-4">
        <Container>
          <Reveal className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-brand-pink/30 to-brand-cyan/30 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-3xl border border-border bg-card fmt-card-shadow">
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
                <span className="size-2.5 rounded-full bg-brand-pink/60" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="relative aspect-16/10 bg-muted">
                <Image src={study.image} alt={study.title} fill priority className="object-cover object-top" sizes="(min-width: 1024px) 1000px, 100vw" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reto */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-3xl border border-border bg-muted/40 p-7">
            <h2 className="text-lg font-bold">El reto</h2>
            <p className="text-sm leading-7 text-muted-foreground">{study.challenge}</p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-7">
            <h2 className="text-lg font-bold">Qué construimos</h2>
            <ul className="flex flex-col gap-2.5">
              {study.approach.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Resultado */}
      <section className="border-t border-border bg-secondary/60 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="fmt-eyebrow-pill">Resultado</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Lo que cambió</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {study.result.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 0.04} className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{r}</span>
              </Reveal>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase text-muted-foreground">Tecnología:</span>
            {study.stack.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Solución relacionada */}
      {solution ? (
        <section className="py-16 sm:py-20">
          <Container>
            <Reveal>
              <Link
                href={`/soluciones/${solution.slug}`}
                className="fmt-elevate group flex flex-col gap-3 rounded-3xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase text-muted-foreground">Solución relacionada</span>
                  <h3 className="text-lg font-bold">{solution.name}</h3>
                  <p className="text-sm text-muted-foreground">{solution.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Ver solución
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      {/* Contacto */}
      <section id="contacto" className="border-t border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="fmt-eyebrow-pill w-fit">Siguiente paso</span>
            <h2 className="text-2xl font-bold sm:text-3xl">¿Un proyecto parecido?</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Cuéntanos tu caso y te enviamos una propuesta con alcance y precio de referencia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm defaultMotivo="proyecto" defaultInteres={study.client} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
