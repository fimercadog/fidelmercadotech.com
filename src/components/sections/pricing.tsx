import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { cn } from "@/lib/utils";
import { PLANS } from "@/content/pricing";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 bg-background py-20 sm:py-28">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Planes"
            title="Precios de referencia"
            description="Puntos de partida claros. El alcance final se acuerda por escrito según tu negocio."
            align="center"
          />
        </Reveal>
        <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => {
            const featured = !!plan.featured;
            return (
              <Reveal key={plan.name} delay={i * 0.05} className="h-full">
                <div
                  className={cn(
                    "fmt-elevate relative flex h-full flex-col justify-between rounded-3xl p-8 transition-all",
                    featured
                      ? "border-2 border-primary bg-card shadow-xl shadow-primary/20"
                      : "border border-border bg-card shadow-sm hover:border-primary/50",
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.7rem] font-bold tracking-wider text-primary-foreground uppercase shadow-md">
                      Más elegido
                    </span>
                  ) : null}

                  <div className="flex flex-col gap-5">
                    <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>

                    <div className="flex flex-col gap-1">
                      <span className="font-heading text-3xl font-extrabold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium">
                        {plan.priceNote}
                      </span>
                    </div>

                    <div className="rounded-full bg-secondary/80 px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Entrega: {plan.delivery}
                    </div>

                    <ul className="flex flex-col gap-3 pt-2 text-sm">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-foreground/90">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                          <span className="text-xs leading-5 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60">
                    <Button
                      asChild
                      variant={featured ? "default" : "outline"}
                      size="lg"
                      className="w-full rounded-full font-bold shadow-md"
                    >
                      <Link href={`/contacto?motivo=${plan.cta.motivo}&interes=${encodeURIComponent(plan.name)}`}>
                        {plan.cta.label}
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Precios en pesos colombianos (COP). No incluyen dominio ni hosting, que se cotizan aparte según el caso.
        </p>
      </Container>
    </section>
  );
}
