import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/marketing/device-frame";
import { ImagePlaceholder, type ImageSlot } from "@/components/marketing/image-placeholder";
import { ContactForm } from "@/components/marketing/contact-form";
import { whatsappUrl } from "@/content/site";
import { SOLUTIONS, getSolution, STATUS_LABEL } from "@/content/solutions";

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

function gallerySlots(slug: string): ImageSlot[] {
  return [
    {
      id: `${slug}-shot-1`,
      alt: "Captura de pantalla de la solución",
      ratio: "16/10",
      kind: "A",
      description: "Captura real de una pantalla principal de la solución (lista / tabla con datos de demo).",
    },
    {
      id: `${slug}-shot-2`,
      alt: "Captura de pantalla de un detalle de la solución",
      ratio: "16/10",
      kind: "A",
      description: "Captura real de una vista de detalle o formulario de la solución.",
    },
    {
      id: `${slug}-video`,
      alt: "Video corto de demostración de la solución",
      ratio: "16/10",
      kind: "D",
      description: "Video corto (20–40 s, MP4/WebM) recorriendo el flujo principal. Sustituir este slot por el reproductor cuando exista.",
    },
  ];
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const isPhone = solution.heroImage.kind === "B";
  const gallery = gallerySlots(slug);

  return (
    <>
      {/* Hero */}
      <section className="fmt-dark relative overflow-hidden bg-background text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col gap-5">
            <Link href="/soluciones" className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="size-4" /> Soluciones
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl fmt-gradient text-white">
                <Icon name={solution.icon} className="size-5" />
              </span>
              <Badge variant="secondary">{STATUS_LABEL[solution.status]}</Badge>
              <span className="text-xs font-semibold text-muted-foreground">{solution.category}</span>
            </div>
            <h1 className="text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{solution.name}</h1>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">{solution.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`/contacto?motivo=${solution.cta.kind === "demo" ? "demo" : "proyecto"}&interes=${solution.slug}`}>
                  {solution.cta.label}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={whatsappUrl(`Hola, quiero ver la demostración de ${solution.name}.`)} target="_blank" rel="noopener noreferrer">
                  Hablar por WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          <div>{isPhone ? <PhoneFrame slot={solution.heroImage} /> : <BrowserFrame slot={solution.heroImage} priority />}</div>
        </Container>
      </section>

      {/* Problema / solución */}
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-6">
            <h2 className="text-lg">El problema</h2>
            <p className="text-sm leading-7 text-muted-foreground">{solution.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-3 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h2 className="text-lg">Cómo lo resolvemos</h2>
            <p className="text-sm leading-7 text-foreground/80">{solution.summary}</p>
          </Reveal>
        </Container>
      </section>

      {/* Funcionalidades */}
      <section className="border-t border-border bg-muted/30 py-16">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Qué incluye</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {solution.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-6">
                  <h3 className="text-base">{f.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Galería / demostraciones */}
      <section className="py-16">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Demostración</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Screenshots y video del flujo principal. Solicita una demostración para verlo en vivo con datos reales.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="md:col-span-2">
              <BrowserFrame slot={gallery[0]} />
            </Reveal>
            <Reveal delay={0.06}>
              <ImagePlaceholder slot={gallery[1]} />
            </Reveal>
            <Reveal delay={0.12}>
              <ImagePlaceholder slot={gallery[2]} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Beneficios + stack */}
      <section className="border-t border-border bg-muted/30 py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            <h2 className="text-2xl">Beneficios</h2>
            <ul className="flex flex-col gap-3">
              {solution.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-4">
            <h2 className="text-2xl">Tecnología</h2>
            <div className="flex flex-wrap gap-2">
              {solution.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="fmt-eyebrow">Siguiente paso</span>
            <h2 className="text-2xl sm:text-3xl">Pide la demostración de {solution.name}</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Déjanos tus datos y coordinamos una sesión corta para mostrarte la solución funcionando y resolver tus
              dudas.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm defaultMotivo={solution.cta.kind === "demo" ? "demo" : "proyecto"} defaultInteres={solution.slug} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
