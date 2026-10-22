import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Pill } from "@/components/saas/kit";
import { cn } from "@/lib/utils";

export function IllustratedRow({
  illustration,
  eyebrow,
  title,
  description,
  bullets,
  href,
  linkLabel = "Ver más",
  reverse = false,
  tinted = false,
  muted = false,
}: {
  illustration: "hero" | "collaboration" | "productivity" | "automation" | "about";
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
  reverse?: boolean;
  tinted?: boolean;
  muted?: boolean;
}) {
  // TODO(imagen): cambiar las ilustraciones por capturas reales cuando existan:
  //  - productivity (Todo en un solo sistema) -> captura del panel de FidelOS con su menú de módulos
  //  - automation -> captura del producto que corresponda
  //  - hero -> captura de un ERP con datos cargados
  const imageSrc =
    illustration === "collaboration" ? "/brand/crm-inmobiliario.png"
    : illustration === "productivity" ? "/brand/illus-productivity.png"
    : illustration === "about" ? "/brand/rrhh.png"
    : illustration === "automation" ? "/brand/illus-automation.png"
    : "/brand/illus-hero.png"; // hero

  return (
    <section
      className={cn(
        "saas saas-section relative overflow-hidden",
        tinted ? "bg-[#0f1012]!" : muted ? "bg-[#f9fafb]" : "bg-white",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal className="flex flex-col gap-6">
            <span className="w-fit text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">
              {eyebrow}
            </span>
            <h2
              className={cn(
                "saas-h2 leading-tight",
                tinted ? "text-white" : "text-[#333]",
              )}
            >
              {title}
            </h2>
            <p className={cn("text-base leading-relaxed", tinted ? "text-[#888]" : "text-[#666]")}>
              {description}
            </p>
            {bullets ? (
              <ul className="flex flex-col gap-3 py-1">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className={cn(
                      "flex items-center gap-3 text-sm font-semibold",
                      tinted ? "text-[#ccc]" : "text-[#444]",
                    )}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#4de961]/20">
                      <Check className="size-3.5 stroke-3 text-[#4de961]" aria-hidden="true" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {href ? (
              <div className="pt-2">
                <Pill href={href} variant="green">
                  {linkLabel}
                </Pill>
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            <div
              className={cn(
                "relative w-full max-w-lg overflow-hidden rounded-[24px] p-6",
                tinted
                  ? "border border-white/10 bg-white/5 shadow-2xl"
                  : "saas-shadow-soft border border-[rgba(0,0,0,0.07)] bg-white",
              )}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={1440}
                height={900}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
