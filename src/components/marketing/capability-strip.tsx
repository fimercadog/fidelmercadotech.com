import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PackIconImg, Row } from "@/components/saas/kit";

const FEATURED_CARDS = [
  {
    href: "/servicios/consultoria-ia",
    title: "Consultoría de IA",
    text: "Diagnóstico en cuatro preguntas encadenadas: entiendo cómo trabajas, qué automatizar, qué puede romperse y en qué orden hacerlo.",
  },
  {
    href: "/servicios/ia-local",
    title: "Inteligencia Artificial en tus propios equipos",
    text: "Implemento modelos de inteligencia artificial en equipos propios o en un servidor privado para que tu empresa tenga mayor control sobre sus datos, costos y tecnología.",
  },
];

export function CapabilityStrip() {
  return (
    <section className="saas saas-section border-y border-[rgba(0,0,0,0.07)]">
      <Row className="grid grid-cols-1 gap-7.5 md:grid-cols-3">
        <Link
          href="/servicios"
          className="group flex flex-col gap-4 rounded-[24px] border border-black/10 bg-white px-10 py-12 shadow-sm transition-transform duration-300 hover:-translate-y-1"
        >
          <PackIconImg name="browser" className="mb-1 size-16" />
          <h3 className="text-[18px] font-bold leading-snug text-[#1a1a1a]">Software Empresarial</h3>
          <p className="text-[14px] leading-relaxed text-[#555]">
            Sistemas a la medida, plataformas web y tableros operativos diseñados para centralizar la información de tu negocio.
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#15803d]">
            Ver servicios <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        {FEATURED_CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex flex-col gap-4 rounded-[24px] border-2 border-[#86efac] bg-[#f0fdf4] p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex size-11 items-center justify-center rounded-full bg-white shadow-sm">
              <Sparkles className="size-5 text-[#15803d]" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803d]">Destacado</span>
            <h3 className="text-[18px] font-bold leading-snug text-[#1a1a1a]">{card.title}</h3>
            <p className="text-[14px] leading-relaxed text-[#555]">{card.text}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[14px] font-semibold text-[#15803d]">
              Ver el servicio <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </Row>
    </section>
  );
}
