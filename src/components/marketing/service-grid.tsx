import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/marketing/reveal";
import { cn } from "@/lib/utils";

export interface ServiceGridItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

/**
 * Grid of cards cycling through 4 background variants (Divi "IT Services"
 * alternating-color card rhythm), recolored to the site's violet system.
 */
const VARIANT_CYCLE = ["brand", "muted", "outline", "outline", "dark", "brand"] as const;
type Variant = (typeof VARIANT_CYCLE)[number];

const VARIANT_CLASSES: Record<Variant, string> = {
  brand: "fmt-gradient text-white [&_.sg-icon]:bg-white/20 [&_.sg-link]:text-white",
  dark: "bg-navy-deep text-white [&_.sg-icon]:bg-white/10 [&_.sg-link]:text-white",
  muted: "bg-secondary text-secondary-foreground [&_.sg-icon]:bg-white [&_.sg-icon]:text-background [&_.sg-link]:text-primary",
  outline: "border border-border bg-card [&_.sg-icon]:fmt-gradient [&_.sg-icon]:text-white [&_.sg-link]:text-primary",
};

export function ServiceGrid({ items, className }: { items: ServiceGridItem[]; className?: string }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, i) => {
        const variant = VARIANT_CYCLE[i % VARIANT_CYCLE.length];
        return (
          <Reveal key={item.id} delay={i * 0.04}>
            <Link
              href={item.href}
              className={cn(
                "fmt-elevate group flex h-full flex-col gap-3 rounded-3xl p-6",
                VARIANT_CLASSES[variant],
              )}
            >
              <span className="sg-icon flex size-11 items-center justify-center rounded-2xl">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-1 text-base font-bold">{item.title}</h3>
              <p className="text-sm leading-6 opacity-80">{item.description}</p>
              <span className="sg-link mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold">
                Ver más
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
