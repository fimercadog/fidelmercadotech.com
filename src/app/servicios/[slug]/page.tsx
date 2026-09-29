import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { Illustration } from "@/components/marketing/illustration";
import { ContactForm } from "@/components/marketing/contact-form";
import { PillBar } from "@/components/marketing/pill-bar";
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
  };
  const illustration = ILLUS[service.id];

  const related = (service.related ?? [])
    .map((s) => SOLUTIONS.find((sol) => sol.slug === s))
    .filter((s): s is (typeof SOLUTIONS)[number] => Boolean(s));

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
              href={`/contacto?motivo=proyecto&interes=${encodeURIComponent(service.title)}`}
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
      <section className="saas saas-section bg-white">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">El problema</span>
              <h2 className="saas-h5 text-[#333]">El reto que enfrentas</h2>
              <p className="text-[14px] leading-7 text-[#666]">{service.problem}</p>
            </div>
            <div className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[#4de961]/20 bg-[#4de961]/5 p-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Cómo lo abordamos</span>
              <h2 className="saas-h5 text-[#333]">Nuestra solución</h2>
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

      {/* Qué incluye */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Alcance</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Qué incluye este servicio</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.includes.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="saas-shadow-toggle flex h-full flex-col gap-2 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#4de961]/10 text-[#333]">
                    <Icon name={service.icon} className="size-4" />
                  </span>
                  <h3 className="saas-h5 mt-1 text-[#333]">{f.title}</h3>
                  <p className="text-[14px] leading-6 text-[#666]">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Beneficios</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Lo que ganas</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 0.04} className="saas-shadow-toggle flex gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 text-[14px]">
                <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                <span className="text-[#555]">{b}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Soluciones relacionadas */}
      {related.length > 0 ? (
        <section className="saas saas-section bg-[#f9fafb]">
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
      <section id="contacto" className="saas saas-section bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Siguiente paso</span>
            <h2 className="saas-h2 text-[#333]">Cuéntanos tu caso de {service.title.toLowerCase()}</h2>
            <p className="text-[14px] leading-7 text-[#666]">
              Déjanos los detalles y te enviamos una propuesta con alcance y precio de referencia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="saas-shadow-soft rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
              <ContactForm defaultMotivo="proyecto" defaultInteres={service.title} />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
