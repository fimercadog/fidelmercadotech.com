import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
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
}) {
  // Mapear ilustraciones a assets oficiales del pack SaaS
  const imageSrc =
    illustration === "collaboration"
      ? "/assets/saas-product/saas-47.png"
      : illustration === "productivity"
      ? "/assets/saas-product/saas-24.png"
      : "/assets/saas-product/saas-17t.png";

  return (
    <section className={cn("py-20 sm:py-28 relative overflow-hidden", tinted ? "bg-slate-50 border-y border-slate-200" : "bg-white")}>
      <Container>
        <div className={cn("grid items-center gap-12 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
          <Reveal className="flex flex-col gap-6">
            <span className="fmt-eyebrow-pill w-fit">{eyebrow}</span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight text-slate-900">{title}</h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
            {bullets ? (
              <ul className="flex flex-col gap-3 py-1">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[#00e676]/20 text-slate-950">
                      <Check className="size-3.5 stroke-[3]" aria-hidden="true" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {href ? (
              <div className="pt-2">
                <Button asChild size="lg" className="rounded-full bg-[#00e676] px-8 font-bold text-slate-950 hover:bg-[#00c853] shadow-md">
                  <Link href={href}>
                    {linkLabel} <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={0.1} className="flex justify-center">
            <div className="fmt-elevate relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <Image
                src={imageSrc}
                alt={title}
                width={800}
                height={660}
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
