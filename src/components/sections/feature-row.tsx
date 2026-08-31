import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { Icon } from "@/components/icon";
import { BrowserFrame, PhoneFrame } from "@/components/marketing/device-frame";
import type { ImageSlot } from "@/components/marketing/image-placeholder";
import { cn } from "@/lib/utils";

export interface FeatureRowProps {
  eyebrow: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  linkLabel?: string;
  image: ImageSlot;
  device?: "browser" | "phone";
  reverse?: boolean;
}

export function FeatureRow({
  eyebrow,
  icon,
  title,
  description,
  bullets,
  href,
  linkLabel = "Ver solución",
  image,
  device = "browser",
  reverse = false,
}: FeatureRowProps) {
  return (
    <Container className="py-16 sm:py-20">
      <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
        <Reveal className="flex flex-col gap-5">
          <span className="fmt-eyebrow-pill w-fit">
            <Icon name={icon} className="size-4" />
            {eyebrow}
          </span>
          <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h3>
          <p className="text-base leading-7 text-muted-foreground">{description}</p>
          <ul className="flex flex-col gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="link" className="h-auto w-fit p-0 text-primary">
            <Link href={href}>
              {linkLabel} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-linear-to-br from-primary/15 via-brand-cyan/10 to-brand-pink/15 blur-2xl"
            aria-hidden="true"
          />
          {device === "phone" ? <PhoneFrame slot={image} /> : <BrowserFrame slot={image} />}
        </Reveal>
      </div>
    </Container>
  );
}
