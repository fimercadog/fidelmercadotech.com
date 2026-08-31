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
    <section id="precios" className="scroll-mt-24 bg-secondary/60 py-24">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Planes"
            title="Precios de referencia"
            description="Puntos de partida claros. El alcance final se acuerda por escrito según tu negocio."
          />
        </Reveal>
        <div className="grid items-center gap-6 lg:grid-cols-4">
          {PLANS.map((plan, i) => {
            const featured = !!plan.featured;
            return (
              <Reveal key={plan.name} delay={i * 0.05} className={cn("h-full", featured && "lg:-my-4")}>
                <div
                  className={cn(
                    "relative flex h-full flex-col gap-5 rounded-3xl p-7",
                    featured
                      ? "fmt-dark fmt-gradient-band text-foreground shadow-2xl shadow-primary/40 lg:p-8"
                      : "border border-border bg-card text-card-foreground shadow-[0_16px_48px_-24px_rgba(124,58,237,0.28)]",
                  )}
                >
                  {featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[0.7rem] font-bold tracking-wide text-primary-foreground uppercase shadow-lg">
                      Más elegido
                    </span>
                  ) : null}

                  <h3 className="font-heading text-lg font-bold">{plan.name}</h3>

                  <div className="flex flex-col gap-1">
                    <span
                      className={cn(
                        "font-heading text-3xl font-bold leading-none",
                        !featured && "fmt-gradient-text",
                      )}
                    >
                      {plan.price}
                    </span>
                    <span className={cn("text-xs", featured ? "text-muted-foreground" : "text-muted-foreground")}>
                      {plan.priceNote}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Entrega: {plan.delivery}
                  </p>

                  <ul className="flex flex-1 flex-col gap-2.5 text-sm">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check
                          className={cn("mt-0.5 size-4 shrink-0", featured ? "text-white" : "text-primary")}
                          aria-hidden="true"
                        />
                        <span className={featured ? "text-foreground/90" : "text-muted-foreground"}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant={featured ? "default" : "outline"} size="lg" className="w-full">
                    <Link href={`/contacto?motivo=${plan.cta.motivo}&interes=${encodeURIComponent(plan.name)}`}>
                      {plan.cta.label}
                    </Link>
                  </Button>
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
