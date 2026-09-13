import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/marketing/reveal";

const RING_ICONS = ["Workflow", "ShieldCheck", "Database", "Bot", "BarChart3", "Plug"];
const RING_POSITIONS = [
  { top: "8%", left: "82%" },
  { top: "50%", left: "94%" },
  { top: "88%", left: "76%" },
  { top: "88%", left: "24%" },
  { top: "50%", left: "6%" },
  { top: "8%", left: "18%" },
];

/**
 * Big blob-shaped gradient banner with a decorative icon ring — the Divi
 * "IT Services" half-ellipse CTA section, recolored to the violet system.
 */
export function EllipseBanner({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="py-4">
      <div className="fmt-dark fmt-gradient-band relative mx-4 overflow-hidden rounded-[2.5rem] text-foreground sm:mx-6 lg:mx-8 lg:rounded-r-[10rem]">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="relative grid items-center gap-12 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <Reveal className="flex flex-col gap-5">
            {eyebrow ? <span className="fmt-eyebrow-pill w-fit">{eyebrow}</span> : null}
            <h2 className="max-w-xl text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">{description}</p>
            <Button asChild size="lg" className="w-fit">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto hidden aspect-square w-full max-w-xs sm:block">
            <div className="absolute inset-[12%] rounded-full border border-white/20" aria-hidden="true" />
            <div className="absolute inset-[28%] rounded-full border border-white/15" aria-hidden="true" />
            {RING_ICONS.map((name, i) => (
              <span
                key={name}
                className="absolute flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
                style={RING_POSITIONS[i]}
              >
                <Icon name={name} className="size-4.5 text-white" />
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
