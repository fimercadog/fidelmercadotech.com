import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Circle } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { DEFAULT_STORY_NOTE } from "@/content/story";
import { JOURNEY_CHAPTERS, JOURNEY_NAME, JOURNEY_POINTS, JOURNEY_STORY, type JourneyPart } from "@/content/distribuidora-story";
import { cn } from "@/lib/utils";

/** Hilo "Capítulo 1 de 2 → 2 de 2": muestra en qué parte de la historia está la página. */
export function JourneyStrip({ part }: { part: JourneyPart }) {
  return (
    <nav aria-label={JOURNEY_NAME} className="flex flex-col items-center gap-2">
      <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">
        {JOURNEY_NAME} · Capítulo {part} de {JOURNEY_CHAPTERS.length}
      </span>
      <ol className="flex flex-wrap items-center justify-center gap-2">
        {JOURNEY_CHAPTERS.map((c) => (
          <li key={c.part}>
            <Link
              href={c.href}
              aria-current={c.part === part ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors",
                c.part === part ? "border-[#111] bg-[#111] text-white" : "border-[rgba(0,0,0,0.12)] bg-white text-[#555] hover:border-[#111]",
              )}
            >
              {c.label}
              <span className="hidden font-normal opacity-80 sm:inline">· {c.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** La historia de usuario completa: en el capítulo 1 queda a medias, en el 2 se cumple entera. */
export function JourneyStory({ part, className }: { part: JourneyPart; className: string }) {
  const done = part === 2;
  const other = JOURNEY_CHAPTERS.find((c) => c.part !== part)!;
  return (
    <section className={`saas saas-section ${className}`}>
      <Container className="flex flex-col gap-10">
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">
            {done ? "Así termina la historia" : "Así empieza la historia"}
          </span>
          <h2 className="saas-h2 mt-2 text-[#333]">
            {done ? "Lo que necesitaba el gerente, cumplido de punta a punta" : "Lo que necesita el gerente: primer capítulo"}
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="saas-shadow-toggle flex flex-col gap-4 rounded-[24px] border border-[#4de961]/20 bg-white px-8 py-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">La situación</span>
            <p className="text-[15px] leading-7 text-[#333]">
              <strong>Cuando</strong> {JOURNEY_STORY.who} <strong>necesita</strong> {JOURNEY_STORY.needs}, lo que <strong>busca</strong> es {JOURNEY_STORY.goal}.
            </p>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Se cumple cuando</span>
            <ul className="flex flex-col gap-3">
              {JOURNEY_STORY.criteria.map((c) => {
                const met = c.part <= part;
                return (
                  <li key={c.text} className={cn("flex gap-3 text-[14px] leading-6", met ? "text-[#555]" : "text-[#9aa0a6]")}>
                    {met ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                    ) : (
                      <Circle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    )}
                    <span>
                      {c.text}
                      {!met ? <em className="ml-2 text-[11px] font-bold not-italic uppercase tracking-wider text-[#787f84]">Se cumple en el Caso {c.part}</em> : null}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <div className="flex flex-col gap-6">
            {JOURNEY_POINTS[part].map((p, i) => (
              <Reveal key={p.label} delay={0.05 + i * 0.05} className="saas-shadow-toggle flex flex-col gap-2 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-8 py-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">{p.label}</span>
                <p className="text-[14px] leading-7 text-[#666]">{p.text}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Link
                href={other.href}
                className="saas-shadow-soft group flex items-center justify-between gap-4 rounded-[24px] border-2 border-[#4de961]/40 bg-[#f0fdf4] px-8 py-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">
                    {done ? "Cómo empezó" : "Sigue la historia"} · {other.label}
                  </span>
                  <span className="text-[15px] font-semibold text-[#1a1a1a]">{other.title}</span>
                </div>
                {done ? (
                  <ArrowLeft className="size-5 shrink-0 text-[#15803d] transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="size-5 shrink-0 text-[#15803d] transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </Reveal>
            <p className="text-[12px] leading-5 text-[#787f84]">{DEFAULT_STORY_NOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
