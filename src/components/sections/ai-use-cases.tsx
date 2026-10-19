import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";

const ROADMAP_STEPS = [
  { n: "01", title: "Auditoría de procesos", desc: "¿Cómo trabajan hoy?" },
  { n: "02", title: "Análisis de oportunidades", desc: "¿Qué se puede automatizar y con qué?" },
  { n: "03", title: "Estudio de vulnerabilidades", desc: "¿Qué se rompe si lo hacemos?" },
  { n: "04", title: "Hoja de ruta de implementación", desc: "¿En qué orden se hace?" },
];

const LOCAL_AI_BENEFITS = [
  { icon: "🔒", title: "Privacidad", desc: "Tus datos se procesan en tus propios equipos y no se envían a terceros." },
  { icon: "💰", title: "Sin costo por consulta", desc: "Sin tarifas por consulta. Pagas tus equipos y su mantenimiento." },
  { icon: "⚡", title: "Menos dependencia externa", desc: "Puede operar sin internet si todo está alojado localmente, y no depende de los precios de un proveedor." },
];

export function AiUseCases() {
  return (
    <section className="saas saas-section bg-[#f9fafb]">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <p className="mb-2 text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Servicios de IA</p>
          <h2 className="saas-h2 text-[#333]">IA que se adapta a tu empresa</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#666]">
            Dos formas de aplicar inteligencia artificial con criterio: primero entendiendo cómo operas, después desplegando donde más conviene.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card A — Consultoría de IA */}
          <Reveal>
            <Link
              href="/servicios/consultoria-ia"
              className="saas-shadow-soft group flex h-full flex-col gap-6 rounded-[24px] bg-[#0f1012] px-10 py-12 text-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <span className="mb-3 inline-block rounded-full bg-[#4de961]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#4de961]">
                  Consultoría de IA
                </span>
                <h3 className="saas-h4 text-white">Diagnóstico y consultoría inicial</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  Cuatro preguntas, en orden, y al final un plan que se puede ejecutar.
                </p>
              </div>
              <ol className="flex flex-col gap-4">
                {ROADMAP_STEPS.map((s) => (
                  <li key={s.n} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#4de961]/10 text-[11px] font-bold text-[#4de961]">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-white/90">{s.title}</p>
                      <p className="text-[13px] leading-snug text-white/50">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="border-l-2 border-[#4de961]/60 pl-4 text-[13px] leading-snug text-white/70">
                Puede ser un solo proceso o buena parte de tu operación: lo deciden los hallazgos, no una meta.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#4de961]">
                Ver servicio completo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          {/* Card B — IA en Local */}
          <Reveal delay={0.08}>
            <Link
              href="/servicios/ia-local"
              className="saas-shadow-soft group flex h-full flex-col gap-6 rounded-[24px] bg-white px-10 py-12 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <span className="mb-3 inline-block rounded-full bg-[#0f1012]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0f1012]">
                  IA en Local
                </span>
                <h3 className="saas-h4 text-[#333]">Modelos de IA que corren en tus propios equipos</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
                  No todo tiene que ir a la nube. Instalo modelos de lenguaje e IA dentro de tus propios equipos, sin enviar tus datos a terceros.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {LOCAL_AI_BENEFITS.map((b) => (
                  <div key={b.title} className="rounded-2xl bg-[#f9fafb] p-5">
                    <span className="mb-2 block text-2xl">{b.icon}</span>
                    <p className="mb-1 text-[13px] font-bold text-[#333]">{b.title}</p>
                    <p className="text-[12px] leading-snug text-[#777]">{b.desc}</p>
                  </div>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                Ver servicio completo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
