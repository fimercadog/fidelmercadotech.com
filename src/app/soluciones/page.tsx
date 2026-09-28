import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SOLUTIONS } from "@/content/solutions";
import { CASES } from "@/content/cases";

export const metadata: Metadata = {
  title: "Features & Soluciones",
  description:
    "CRM inmobiliario, sistema de RRHH, CRM + inventario, gestión veterinaria, FidelOS (inventario con IA) y agentes de WhatsApp. Desarrollos propios de Fidel Mercado Tech.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      {/* Hero estilo Divi SaaS Features Page */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-20 text-foreground sm:py-28">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-grid-bg absolute inset-0 opacity-20" aria-hidden="true" />

        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "15%", left: "6%" }} />
          <span className="s-tri" style={{ top: "22%", right: "8%" }} />
          <span className="s-dot" style={{ bottom: "18%", left: "12%" }} />
          <span className="s-plus" style={{ top: "50%", right: "5%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <SectionHeading
            level={1}
            eyebrow="Features & Soluciones"
            title="Capacidades diseñadas para tu operación"
            description="Revisa las características clave y plataformas listas para producción de Fidel Mercado Tech."
            align="center"
          />
        </Container>
      </section>

      {/* Grid de 6 Soluciones Principales (6 Cards en Grid 3x2) */}
      <section className="py-20 sm:py-28 bg-background">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo"
              title="6 soluciones especializadas"
              description="Cada módulo resuelve una necesidad concreta de tu empresa con tecnología moderna y soporte continuo."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Deep Dive 1: FidelOS (Left text, Right mockup en perspectiva) */}
      <section className="border-t border-border bg-card/30 py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <span className="fmt-eyebrow-pill w-fit">Inventario Inteligente</span>
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
              Captura de datos por foto, voz y escaneo
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Elimina los registros manuales en hojas de cálculo. Con FidelOS, tu personal solo toma una foto o envía un mensaje de voz y la IA extrae y categoriza los insumos automáticamente.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Reconocimiento de imágenes con modelo de IA optimizado",
                "Transcripción e interpretación de notas de voz en segundos",
                "Integración instantánea con tu base de datos de inventario",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-[#00c853]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/soluciones/fidelos"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Conocer FidelOS <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <div className="fmt-elevate relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <Image
                src="/images/saas-17t.png"
                alt="FidelOS Interfaz"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Feature Deep Dive 2: Agentes de WhatsApp (Left mockup, Right text) */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1} className="order-2 lg:order-1 flex justify-center">
            <div className="fmt-elevate relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <Image
                src={CASES[0]?.image || "/images/saas-17t.png"}
                alt="Agentes de WhatsApp"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="fmt-eyebrow-pill w-fit">Atención 24/7</span>
            <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
              Agentes conversacionales conectados a tu CRM
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Tus clientes obtienen respuestas inmediatas, cotizaciones y agendamiento sin esperar a un asesor humano, mientras tu equipo recibe contactos pre-calificados.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Respuestas automáticas inteligentes sin respuestas robóticas",
                "Creación automática de ficha de cliente en tu CRM",
                "Derivación transparente a asesores humanos cuando se requiere",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-[#00c853]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/soluciones/agentes-whatsapp"
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Ver Agentes de WhatsApp <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
