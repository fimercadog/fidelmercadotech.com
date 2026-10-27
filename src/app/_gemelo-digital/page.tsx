import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { ContactForm } from "@/components/marketing/contact-form";
import { JourneyStory, JourneyStrip } from "@/components/marketing/story-journey";
import { DigitalTwin } from "@/components/saas/digital-twin";
import { getSolution } from "@/content/solutions";
import { DEFAULT_STORY_NOTE } from "@/content/story";

const TITLE = "Tu empresa en 3D, para verla sin ir a la bodega";
const SUMMARY =
  "Un gemelo digital es una réplica en 3D de tu empresa conectada a tu sistema. Gira y toca esta bodega de ejemplo: es donde termina la historia de la distribuidora.";

export const metadata: Metadata = {
  title: "Gemelo digital 3D — Ejemplo de referencia",
  description: SUMMARY,
  alternates: { canonical: "/gemelo-digital" },
  openGraph: { title: "Gemelo digital 3D | Fidel Mercado Tech", description: SUMMARY, type: "article" },
};

const CHALLENGE =
  "En el Caso 1, la distribuidora ya registra cada pedido una sola vez y sin que sus datos salgan de la empresa. Pero para saber cómo va la bodega, el gerente todavía tiene que recorrerla, preguntar por WhatsApp y cruzar hojas de cálculo. Cuando algo falla, ya pasó: el producto se agotó, el pedido se atrasó o el camión llegó sin que nadie lo esperara.";

const APPROACH = [
  "Levanto el plano de tu empresa y lo convierto en un modelo 3D: zonas, estanterías, muelles y oficinas.",
  "Conecto el modelo a tu sistema, para que cada zona muestre su estado real: en orden, con atención o con un problema.",
  "Giras el modelo, tocas una zona y ves qué hay, qué falta y qué se está moviendo, sin caminar hasta allá.",
  "Pruebas cambios antes de hacerlos: mover una estantería o abrir un nuevo puesto de despacho, y ves el efecto en el modelo.",
];

/** Un pedido de principio a fin: los dos primeros pasos vienen del Caso 1. */
const ORDER_STEPS = [
  { from: "Caso 1", title: "Llega el pedido por WhatsApp", text: "La IA, instalada en el servidor de la empresa, lo lee y arma el borrador del pedido." },
  { from: "Caso 1", title: "Una persona lo confirma", text: "El pedido queda en facturación una sola vez, sin que nadie lo vuelva a digitar." },
  { from: "Caso 2", title: "La bodega lo refleja", text: "En el modelo 3D, Despacho marca el pedido como en preparación, y la estantería se resalta si algún producto queda por agotarse." },
  { from: "Caso 2", title: "El gerente decide a tiempo", text: "Lo ve sin salir de la oficina y pide más producto antes de que falte, no después." },
];

const RESULT = [
  "Ves toda la operación en una sola pantalla, desde cualquier lugar",
  "Los problemas se marcan antes de que se vuelvan retrasos",
  "Decides cambios de distribución sobre el modelo, no a ciegas",
  "Un modelo que entiende todo el equipo, sin leer reportes",
];

const STACK = ["Modelo 3D de tu empresa", "Conexión con tu sistema", "Alertas por zona", "Acceso protegido por usuario"];

export default function GemeloDigitalPage() {
  const solution = getSolution("fidelos");

  return (
    <>
      {/* Hero */}
      <section className="saas overflow-hidden bg-white pb-16 pt-20 sm:pb-24 sm:pt-28">
        <Container className="flex flex-col items-center gap-5 text-center">
          <JourneyStrip part={2} />
          <Link href="/servicios" className="inline-flex w-fit items-center gap-1.5 text-[13px] text-[#666] transition-colors hover:text-[#1a1a1a]">
            <ArrowLeft className="size-4" /> Servicios
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">Gemelo digital 3D</span>
            <span className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#555]">Ejemplo de referencia</span>
          </div>
          <h1 className="saas-h1 max-w-3xl" style={{ color: "#1a1a1a" }}>{TITLE}</h1>
          <p className="max-w-2xl text-[15px] leading-7 text-[#666]">{SUMMARY}</p>
        </Container>
      </section>

      {/* Gemelo 3D — se superpone al final del hero */}
      <section className="saas relative z-20 -mt-24 pb-2 sm:-mt-32">
        <Container>
          <Reveal>
            <div className="saas-shadow-soft overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white">
              <div className="flex items-center gap-1.5 border-b border-[rgba(0,0,0,0.07)] bg-[#f5f6f7] px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#fe8a6e]/80" />
                <span className="size-2.5 rounded-full bg-[#f8c701]/80" />
                <span className="size-2.5 rounded-full bg-[#4de961]/80" />
              </div>
              <DigitalTwin />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Reto y solución */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">El reto</span>
            <h2 className="saas-h5 text-[#333]">Lo que todavía falta</h2>
            <p className="text-[14px] leading-7 text-[#666]">{CHALLENGE}</p>
          </Reveal>
          <Reveal delay={0.08} className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[#4de961]/20 bg-[#4de961]/5 p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Cómo lo resuelvo</span>
            <h2 className="saas-h5 text-[#333]">La solución</h2>
            <ul className="flex flex-col gap-2.5">
              {APPROACH.map((a) => (
                <li key={a} className="flex gap-3 text-[14px] leading-6">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                  <span className="text-[#555]">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Narrativa: un pedido de principio a fin */}
      <section className="saas saas-section bg-white">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Un día cualquiera</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Un pedido, de principio a fin</h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#666]">
              Así se conectan los dos casos: lo que construyes en el primero alimenta lo que ves en el segundo.
            </p>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ORDER_STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.05} className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#111] text-[13px] font-bold text-white">{i + 1}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#787f84]">{s.from}</span>
                </div>
                <h3 className="text-[15px] font-semibold leading-6 text-[#333]">{s.title}</h3>
                <p className="text-[13px] leading-6 text-[#666]">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Resultado */}
      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="flex flex-col gap-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Resultado</span>
            <h2 className="saas-h2 mt-2 text-[#333]">Lo que cambia</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {RESULT.map((r, i) => (
              <Reveal as="li" key={r} delay={i * 0.04} className="saas-shadow-toggle flex gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-6 text-[14px]">
                <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                <span className="text-[#555]">{r}</span>
              </Reveal>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Qué lo hace funcionar:</span>
            {STACK.map((t) => (
              <span key={t} className="rounded-full border border-[rgba(0,0,0,0.07)] bg-white px-3 py-1 text-[11px] font-bold text-[#555] shadow-sm">{t}</span>
            ))}
          </div>
          <p className="text-[12px] leading-5 text-[#787f84]">{DEFAULT_STORY_NOTE}</p>
        </Container>
      </section>

      {/* Historia de usuario: aquí se cumple completa */}
      <JourneyStory part={2} className="bg-white" />

      {/* Solución relacionada */}
      {solution ? (
        <section className="saas saas-section bg-[#f9fafb]">
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
      <section id="contacto" className="saas saas-section bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Siguiente paso</span>
            <h2 className="saas-h2 text-[#333]">¿Quieres ver tu empresa en 3D?</h2>
            <p className="text-[14px] leading-7 text-[#666]">Cuéntame cómo es tu operación y te envío una propuesta con alcance y precio de referencia.</p>
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
