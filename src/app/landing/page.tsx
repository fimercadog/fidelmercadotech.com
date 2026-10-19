import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CapabilityStrip } from "@/components/marketing/capability-strip";
import { GetOnTrackCta } from "@/components/sections/get-on-track-cta";
import { CASES } from "@/content/cases";

export const metadata = {
  title: "Tú pones el negocio, yo me encargo de lo que se complica",
  description: "Página para campañas de Fidel Mercado Tech: cuéntame qué se te complica y te muestro la solución funcionando.",
  // Página de campaña: no compite con la portada en Google.
  robots: { index: false, follow: true },
};

export default function LandingLayoutPage() {
  return (
    <>
      {/* Hero estilo Divi SaaS Landing Page (Bold Title centrado, fondo blanco con shapes) */}
      <section className="saas fmt-gradient-band relative overflow-hidden pt-20 pb-32 sm:pt-24 sm:pb-40">
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "14%", left: "6%" }} />
          <span className="s-tri" style={{ top: "22%", right: "8%" }} />
          <span className="s-dot" style={{ bottom: "18%", left: "12%" }} />
          <span className="s-plus" style={{ top: "50%", right: "5%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <Reveal className="flex max-w-4xl flex-col items-center gap-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Plataforma Inteligente SaaS</span>
            <h1 className="saas-h1 text-[#1a1a1a]">
              Transforma tu operación empresarial con software e IA
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#555]">
              Automatiza la gestión de clientes, control de inventario y procesos de equipo con plataformas listas para usar y personalizadas a tu negocio.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-[#4de961] px-8 font-bold text-slate-950 hover:bg-[#02e173]">
                <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-black bg-white px-7 font-bold text-black hover:bg-black/5">
                <Link href="/soluciones">Explorar soluciones</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Floating Mockup Overlap Banner */}
      <section className="relative z-20 -mt-24 sm:-mt-32">
        <Container>
          <Reveal className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100">
              {/* TODO(imagen): reemplazar por una captura real de un producto (la anterior era una portada vacía). */}
              <Image
                src="/brand/illus-hero.png"
                alt="Ilustración de una persona trabajando con su sistema"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3 Capabilities Strip */}
      <CapabilityStrip />

      {/* Feature Highlight 1: Left text + checkmarks, Right perspective mockup */}
      <section className="saas saas-section bg-white">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Control Omnicanal</span>
            <h2 className="saas-h2 text-[#333]">
              Un solo lugar para todos tus clientes y ventas
            </h2>
            <p className="saas-small">
              Recibe contactos desde tu sitio web, WhatsApp y redes sociales directamente en una ficha unificada con registro completo de cada interacción.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Fichas automáticas por cliente con historial completo",
                "Integración transparente con WhatsApp Business",
                "Notificaciones instantáneas y asignación de asesores",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#333]">
                  <CheckCircle2 className="size-5 shrink-0 text-[#4de961]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/soluciones" className="inline-flex items-center gap-2 text-sm font-bold text-[#15803d] hover:underline">
                Ver todas las soluciones <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex justify-center">
            <div className="saas-shadow-soft relative aspect-video w-full overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
              <Image
                src={CASES[0]?.image || "/brand/illus-productivity.png"}
                alt="Plataforma ERP"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Feature Highlight 2: Left perspective mockup, Right text + checkmarks */}
      <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb]">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1} className="order-2 lg:order-1 flex justify-center">
            <div className="saas-shadow-soft relative aspect-video w-full overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
              <Image
                src={CASES[1]?.image || "/brand/rrhh.png"}
                alt="Inventario e IA"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 550px, 100vw"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 flex flex-col gap-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Todo en un solo sistema</span>
            <h2 className="saas-h2 text-[#333]">
              Un solo sistema para toda la empresa
            </h2>
            <p className="saas-small">
              FidelOS reúne comercial, inventario, ventas y finanzas sobre una misma base, para mantener tus operaciones y reportes al día.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Módulos que se activan según tu negocio",
                "IA y agente de WhatsApp como módulos premium",
                "Reportes ejecutivos automáticos sin hojas de cálculo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#333]">
                  <CheckCircle2 className="size-5 shrink-0 text-[#4de961]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link href="/servicios/automatizacion" className="inline-flex items-center gap-2 text-sm font-bold text-[#15803d] hover:underline">
                Conocer FidelOS <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA final */}
      <GetOnTrackCta />
    </>
  );
}
