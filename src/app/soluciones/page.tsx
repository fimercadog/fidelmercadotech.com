import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { SolutionCard } from "@/components/marketing/solution-card";
import { CtaBand } from "@/components/marketing/cta-band";
import { SOLUTIONS } from "@/content/solutions";
import { CASES } from "@/content/cases";

export const metadata: Metadata = {
  title: "Features & Soluciones",
  description:
    "ERP inmobiliario, sistema de RRHH, ERP + inventario, gestión veterinaria, FidelOS (inventario con IA) y agentes de WhatsApp. Desarrollos propios de Fidel Mercado Tech.",
  alternates: { canonical: "/soluciones" },
};

export default function SolucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features & Soluciones"
        title="Capacidades diseñadas para tu operación"
        description="Revisa las características clave y plataformas listas para producción de Fidel Mercado Tech."
        ctas={[
          { label: "Ver todas las soluciones", href: "#soluciones" },
          { label: "Solicitar demo", href: "/contacto?motivo=demo", variant: "outline" },
        ]}
        image={{ src: "/assets/saas-product/saas-45.png", alt: "Dashboard FidelOS", width: 1060, height: 900 }}
      />

      {/* Grid de 6 Soluciones Principales (6 Cards en Grid 3x2) */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <SectionHeading
              eyebrow="Catálogo"
              title="Soluciones especializadas"
              description="Cada módulo resuelve una necesidad concreta de tu empresa con tecnología moderna y soporte continuo."
              align="center"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.filter((s) => !s.hidden).map((solution, i) => (
              <Reveal key={solution.slug} delay={i * 0.05}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Deep Dive 1: FidelOS (Left text, Right mockup en perspectiva) */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Inventario Inteligente</span>
            <h2 className="saas-h2 text-[#333]">
              Captura de datos por foto, voz y escaneo
            </h2>
            <p className="saas-small">
              Elimina los registros manuales en hojas de cálculo. Con FidelOS, tu personal solo toma una foto o envía un mensaje de voz y la IA extrae y categoriza los insumos automáticamente.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Reconocimiento de imágenes con modelo de IA optimizado",
                "Transcripción e interpretación de notas de voz en segundos",
                "Integración instantánea con tu base de datos de inventario",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#333]">
                  <CheckCircle2 className="size-5 shrink-0 text-[#4de961]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/soluciones/fidelos"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#15803d] hover:underline"
              >
                Conocer FidelOS <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <Image
              src="/assets/saas-product/saas-46.png"
              alt="FidelOS en tablet"
              width={864}
              height={1090}
              className="saas-shadow-soft w-full max-w-sm rounded-[24px]"
            />
          </Reveal>
        </Container>
      </section>

      {/* Feature Deep Dive 2: Agentes de WhatsApp (Left mockup, Right text) */}
      <section className="saas saas-section bg-white">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1} className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/assets/saas-product/saas-47.png"
              alt="Agentes de WhatsApp en móvil"
              width={850}
              height={1540}
              className="saas-shadow-soft w-full max-w-xs rounded-[24px]"
            />
          </Reveal>
          <Reveal className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Atención 24/7</span>
            <h2 className="saas-h2 text-[#333]">
              Agentes conversacionales conectados a tu ERP
            </h2>
            <p className="saas-small">
              Tus clientes obtienen respuestas inmediatas, cotizaciones y agendamiento sin esperar a un asesor humano, mientras tu equipo recibe contactos pre-calificados.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Respuestas automáticas inteligentes sin respuestas robóticas",
                "Creación automática de ficha de cliente en tu ERP",
                "Derivación transparente a asesores humanos cuando se requiere",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#333]">
                  <CheckCircle2 className="size-5 shrink-0 text-[#4de961]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/soluciones/agentes-whatsapp"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#15803d] hover:underline"
              >
                Ver Agentes de WhatsApp <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="¿Necesitas una solución a la medida?"
        description="Cuéntanos qué proceso quieres resolver. Analizamos tu caso sin costo y te proponemos un alcance claro."
        primaryLabel="Solicitar demostración"
        primaryHref="/contacto?motivo=demo"
      />
    </>
  );
}
