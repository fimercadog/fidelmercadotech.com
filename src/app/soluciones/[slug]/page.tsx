import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/marketing/device-frame";
import { ImagePlaceholder, type ImageSlot } from "@/components/marketing/image-placeholder";
import { ContactForm } from "@/components/marketing/contact-form";
import { whatsappUrl } from "@/content/site";
import { ExternalLink } from "lucide-react";
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
              <span className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#555]">
                {STATUS_LABEL[solution.status]}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">{solution.category}</span>
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

      {/* Galería / demostraciones */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Demo</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Demostración</h2>
            <p className="mt-2 max-w-2xl text-[14px] text-[#666]">
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
                <span key={tech} className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#555] shadow-sm border border-[rgba(0,0,0,0.07)]">
                  {tech}
                </span>
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
              <ContactForm defaultMotivo={solution.cta.kind === "demo" ? "demo" : "proyecto"} defaultInteres={solution.slug} />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
