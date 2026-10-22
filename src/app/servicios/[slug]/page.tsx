import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { Illustration } from "@/components/marketing/illustration";
import { ContactForm } from "@/components/marketing/contact-form";
import { StoryBlock } from "@/components/marketing/story-block";
import { whatsappUrl } from "@/content/site";
import { SERVICES, getService } from "@/content/services";
import { SOLUTIONS } from "@/content/solutions";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/servicios/${service.id}` },
    openGraph: { title: `${service.title} | Fidel Mercado Tech`, description: service.summary, type: "website" },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const ILLUS: Record<string, "collaboration" | "productivity" | "automation" | "about"> = {
    automatizacion: "automation",
    integraciones: "collaboration",
    ia: "automation",
    agentes: "collaboration",
    software: "productivity",
    web: "productivity",
    "consultoria-ia": "about",
    "ia-local": "automation",
  };
  const illustration = ILLUS[service.id];

  const related = (service.related ?? [])
    .map((s) => SOLUTIONS.find((sol) => sol.slug === s))
    .filter((s): s is (typeof SOLUTIONS)[number] => Boolean(s));

  const flowTarget = service.flow ? getService(service.flow.slug) : undefined;

  const MOTIVO_BY_SERVICE: Record<string, string> = {
    "ia-local": "ia",
    "consultoria-ia": "ia",
    agentes: "ia",
    automatizacion: "automatizacion",
    integraciones: "proyecto",
  };
  const serviceMotivo = MOTIVO_BY_SERVICE[service.id];

  // Secciones tras "Qué incluye" (blanco): alternan gris ↔ blanco sin repetir fondo.
  const tail = [service.story ? "story" : null, "benefits", related.length ? "related" : null, "contact"].filter(Boolean);
  const bg = (k: string) => (tail.indexOf(k) % 2 === 0 ? "bg-[#f9fafb]!" : "bg-white!");

  return (
    <>
      {/* Hero */}
      <section className="saas overflow-hidden bg-white py-20 sm:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Link
            href="/servicios"
            className="inline-flex w-fit items-center gap-1.5 text-[13px] text-[#666] transition-colors hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="size-4" /> Servicios
          </Link>
          <span className="flex size-14 items-center justify-center rounded-2xl bg-[#f0f0f0] text-[#15803d]">
            <Icon name={service.icon} className="size-6" />
          </span>
          <h1 className="saas-h1 max-w-3xl" style={{ color: "#1a1a1a" }}>{service.title}</h1>
          <p className="max-w-2xl text-[15px] leading-7 text-[#666]">{service.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#contacto"
              className="saas-btn saas-btn-green"
            >
              Solicitar cotización
            </Link>
            <Link
              href={whatsappUrl(`Hola, me interesa el servicio de ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="saas-btn saas-btn-outline"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </Container>
      </section>

      {/* Problema / cómo lo abordamos */}
      <section className="saas saas-section overflow-hidden bg-[#f9fafb]!">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-10 py-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">El problema</span>
              <h2 className="saas-h5 text-[#333]">El reto que enfrentas</h2>
              <p className="text-[14px] leading-7 text-[#666]">{service.problem}</p>
            </div>
            <div className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[#4de961]/20 bg-[#4de961]/5 px-10 py-10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Cómo lo abordo</span>
              <h2 className="saas-h5 text-[#333]">La solución</h2>
              <p className="text-[14px] leading-7 text-[#555]">{service.summary}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {illustration ? (
              <Illustration name={illustration} alt="" className="max-w-md" />
            ) : (
              <div className="saas-shadow-soft flex items-center justify-center rounded-[24px] bg-[#4de961]/10 p-10 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#4de961]/20 text-[#333]">
                  <Icon name={service.icon} className="size-6" />
                </span>
              </div>
            )}
          </Reveal>
        </Container>
      </section>

      {/* Método paso a paso (si el servicio lo define) o lista de alcance */}
      {service.method ? (
        <section className="saas saas-section bg-[#0f1012]!">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Método de trabajo</span>
              <h2 className="saas-h2 mt-2" style={{ color: "#ffffff" }}>{service.method.title}</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/60">{service.method.intro}</p>
            </Reveal>
            <ol className="grid gap-5 sm:grid-cols-2">
              {service.method.steps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={i * 0.05} className="flex h-full flex-col gap-3 rounded-[24px] border border-white/10 bg-white/5 px-8 py-8">
                  <span className="text-[12px] font-bold tracking-widest text-white/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="saas-h5" style={{ color: "#ffffff" }}>{step.title}</h3>
                  <p className="text-[14px] font-bold text-[#4de961]">{step.question}</p>
                  <p className="text-[14px] leading-6 text-white/60">{step.detail}</p>
                  {step.example ? (
                    <p className="mt-1 border-l-2 border-[#4de961]/60 pl-4 text-[13px] leading-6 text-white/80">
                      <span className="font-bold text-[#4de961]">{service.method?.exampleLabel ?? "En la práctica:"} </span>
                      {step.example}
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </ol>
            {service.method.scope ? (
              <Reveal className="flex flex-col gap-6 rounded-[24px] border border-[#4de961]/30 bg-[#4de961]/5 px-8 py-10">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Hasta dónde llega</span>
                  <h3 className="saas-h4" style={{ color: "#ffffff" }}>{service.method.scope.title}</h3>
                  <p className="max-w-3xl text-[14px] leading-7 text-white/70">{service.method.scope.text}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {service.method.scope.paths.map((p) => (
                    <div key={p.title} className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-6">
                      <p className="text-[14px] font-bold text-[#4de961]">{p.title}</p>
                      <p className="text-[13px] leading-6 text-white/70">{p.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}
            <Reveal className="border-l-2 border-[#4de961] pl-6">
              <p className="max-w-2xl text-[15px] leading-7 text-white/85">{service.method.delivery}</p>
            </Reveal>
          </Container>
        </section>
      ) : (
      <section className="saas saas-section bg-white!">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Alcance</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Qué incluye este servicio</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.includes.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="saas-shadow-toggle flex h-full flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-8 py-10">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#4de961]/10 text-[#333]">
                    <Icon name={f.icon ?? service.icon} className="size-4" />
                  </span>
                  <h3 className="saas-h5 mt-2 text-[#333]">{f.title}</h3>
                  <p className="text-[14px] leading-6 text-[#666]">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Flow card — aparece después de los includes para no interrumpir el hero */}
          {flowTarget && service.flow ? (
            <Reveal className="mt-4">
              <Link
                href={`/servicios/${flowTarget.id}`}
                className="saas-shadow-soft group flex max-w-2xl flex-col gap-1.5 rounded-[20px] border-2 border-[#4de961]/40 bg-[#f0fdf4] px-6 py-5 text-left transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">
                  {service.flow.direction === "next" ? "Siguiente paso" : "Primer paso recomendado"}
                </span>
                <span className="text-[14px] leading-6 text-[#555]">{service.flow.text}</span>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                  {flowTarget.title}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ) : null}
        </Container>
      </section>
      )}

      {/* Ejemplo con historia de usuario: la ganancia concreta del servicio */}
      {service.story ? <StoryBlock story={service.story} className={bg("story")} /> : null}

      {/* Beneficios */}
      <section className={`saas saas-section ${bg("benefits")}`}>
        <Container className="flex flex-col gap-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Beneficios</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Lo que ganas</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 0.04} className="saas-shadow-toggle flex gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-8 py-8 text-[14px]">
                <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                <span className="text-[#555]">{b}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Soluciones relacionadas */}
      {related.length > 0 ? (
        <section className={`saas saas-section ${bg("related")}`}>
          <Container className="flex flex-col gap-10">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Relacionado</span>
              <h2 className="saas-h2 mt-2 text-[#333]">Soluciones que usan este servicio</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((sol, i) => (
                <Reveal key={sol.slug} delay={i * 0.05}>
                  <Link
                    href={`/soluciones/${sol.slug}`}
                    className="saas-shadow-soft group flex h-full flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#4de961]/10 text-[#333]">
                      <Icon name={sol.icon} className="size-5" />
                    </span>
                    <h3 className="saas-h5 text-[#333]">{sol.name}</h3>
                    <p className="text-[14px] leading-6 text-[#666]">{sol.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                      Ver solución
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Contacto */}
      <section id="contacto" className={`saas saas-section ${bg("contact")}`}>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Siguiente paso</span>
            <h2 className="saas-h2 text-[#333]">Cuéntame tu caso de {service.title.toLowerCase()}</h2>
            <p className="text-[14px] leading-7 text-[#666]">
              Déjame los detalles y te envío una propuesta con alcance y precio de referencia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="saas-shadow-soft rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-10 py-10">
              <ContactForm defaultMotivo={serviceMotivo} />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
