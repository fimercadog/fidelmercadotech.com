import { Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { DEFAULT_STORY_NOTE, type Story } from "@/content/story";

/** Ejemplo con historia de usuario: muestra la ganancia concreta de usar un servicio o solución. */
export function StoryBlock({ story, className }: { story: Story; className: string }) {
  return (
    <section className={`saas saas-section ${className}`}>
      <Container className="flex flex-col gap-10">
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">Tu ganancia, en un ejemplo</span>
          <h2 className="saas-h2 mt-2 text-[#333]">{story.title}</h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="saas-shadow-toggle flex flex-col gap-4 rounded-[24px] border border-[#4de961]/20 bg-white px-8 py-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Historia de usuario</span>
            <p className="text-[15px] leading-7 text-[#333]">
              <strong>Como</strong> {story.asA}, <strong>quiero</strong> {story.want}, <strong>para</strong> {story.soThat}.
            </p>
            <span className="mt-2 text-[11px] font-bold uppercase tracking-wider text-[#787f84]">Se cumple cuando</span>
            <ul className="flex flex-col gap-3">
              {story.criteria.map((c) => (
                <li key={c} className="flex gap-3 text-[14px] leading-6 text-[#555]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="flex flex-col gap-6">
            {story.points.map((p, i) => (
              <Reveal key={p.label} delay={0.05 + i * 0.05} className="saas-shadow-toggle flex flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white px-8 py-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4de961]">{p.label}</span>
                <p className="text-[14px] leading-7 text-[#666]">{p.text}</p>
              </Reveal>
            ))}
            <p className="text-[12px] leading-5 text-[#787f84]">{story.note ?? DEFAULT_STORY_NOTE}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
