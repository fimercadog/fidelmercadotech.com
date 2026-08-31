import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Illustration } from "@/components/marketing/illustration";
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
}: {
  illustration: "hero" | "collaboration" | "productivity" | "automation" | "about";
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
  reverse?: boolean;
}) {
  return (
    <Container className="py-16 sm:py-20">
      <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
        <Reveal className="flex flex-col gap-5">
          <span className="fmt-eyebrow-pill w-fit">{eyebrow}</span>
          <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="text-base leading-7 text-muted-foreground">{description}</p>
          {bullets ? (
            <ul className="flex flex-col gap-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {href ? (
            <Link href={href} className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              {linkLabel} <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </Reveal>
        <Reveal delay={0.1}>
          <Illustration name={illustration} alt="" className="max-w-md" />
        </Reveal>
      </div>
    </Container>
  );
}
