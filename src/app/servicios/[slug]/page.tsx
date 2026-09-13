import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "16%", right: "8%" }} />
          <span className="s-dot" style={{ bottom: "22%", left: "10%" }} />
        </div>
        <Container className="relative flex flex-col items-center gap-6 py-20 text-center sm:py-24">
          <Link
            href="/servicios"
            className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Servicios
          </Link>
          <span className="flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white">
            <Icon name={service.icon} className="size-6" />
          </span>
          <h1 className="max-w-3xl text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-5xl">{service.title}</h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{service.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={`/contacto?motivo=proyecto&interes=${encodeURIComponent(service.title)}`}>
                Solicitar cotización
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link
                href={whatsappUrl(`Hola, me interesa el servicio de ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar por WhatsApp
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Solicitar cotización", href: `/contacto?motivo=proyecto&interes=${encodeURIComponent(service.title)}`, variant: "default" },
          { label: "Ver todos los servicios", href: "/servicios" },
          { label: "WhatsApp", href: whatsappUrl(`Hola, me interesa el servicio de ${service.title}.`), external: true },
        ]}
      />

      {/* Problema / cómo lo abordamos */}
      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-bold">El problema</h2>
              <p className="text-sm leading-7 text-muted-foreground">{service.problem}</p>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-6">
              <h2 className="text-lg font-bold">Cómo lo abordamos</h2>
              <p className="text-sm leading-7 text-foreground/80">{service.summary}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {illustration ? (
              <Illustration name={illustration} alt="" className="max-w-md" />
            ) : (
              <div className="rounded-3xl border border-primary/15 bg-linear-to-br from-primary/10 to-brand-pink/10 p-10 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl fmt-gradient text-white">
                  <Icon name={service.icon} className="size-6" />
                </span>
              </div>
            )}
          </Reveal>
        </Container>
      </section>

      {/* Qué incluye */}
      <section className="border-t border-border bg-secondary/60 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="fmt-eyebrow-pill">Alcance</span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Qué incluye este servicio</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.includes.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="flex h-full flex-col gap-2 rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-xl fmt-gradient text-white shadow-lg shadow-primary/25">
                    <Icon name={service.icon} className="size-4" />
                  </span>
                  <h3 className="mt-1 text-base font-bold">{f.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Lo que ganas</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={i * 0.04} className="flex gap-3 rounded-2xl border border-border bg-card p-5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{b}</span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Soluciones relacionadas */}
      {related.length > 0 ? (
        <section className="border-t border-border bg-secondary/60 py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <Reveal>
              <span className="fmt-eyebrow-pill">Relacionado</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Soluciones que usan este servicio</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((sol, i) => (
                <Reveal key={sol.slug} delay={i * 0.05}>
                  <Link
                    href={`/soluciones/${sol.slug}`}
                    className="fmt-elevate group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl fmt-gradient text-white">
                      <Icon name={sol.icon} className="size-5" />
                    </span>
                    <h3 className="text-base font-bold">{sol.name}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{sol.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
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
      <section id="contacto" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="fmt-eyebrow-pill w-fit">Siguiente paso</span>
            <h2 className="text-2xl font-bold sm:text-3xl">Cuéntanos tu caso de {service.title.toLowerCase()}</h2>
            <p className="text-sm leading-7 text-muted-foreground">
              Déjanos los detalles y te enviamos una propuesta con alcance y precio de referencia.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm defaultMotivo="proyecto" defaultInteres={service.title} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
