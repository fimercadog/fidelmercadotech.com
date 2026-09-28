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

export function ServiceGrid({ items, className }: { items: ServiceGridItem[]; className?: string }) {
  return (
    <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, i) => {
        return (
          <Reveal key={item.id} delay={i * 0.05}>
            <Link
              href={item.href}
              className="fmt-elevate group flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                  Servicio
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-border/60">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:underline">
                  Ver detalle de servicio
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
