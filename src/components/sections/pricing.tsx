import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { cn } from "@/lib/utils";
import { PLANS } from "@/content/pricing";

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 py-20">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Planes"
            title="Precios de referencia"
            description="Puntos de partida claros. El alcance final se acuerda por escrito según tu negocio."
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05}>
              <div
                className={cn(
                  "flex h-full flex-col gap-4 rounded-xl border bg-card p-6",
                  plan.featured ? "border-primary shadow-[0_20px_45px_-25px_rgba(0,102,255,0.5)]" : "border-border",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base">{plan.name}</h3>
                  {plan.featured ? <Badge>Más elegido</Badge> : null}
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-2xl font-bold">{plan.price}</span>
                  <span className="text-xs text-muted-foreground">{plan.priceNote}</span>
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase">Entrega: {plan.delivery}</p>
                <ul className="flex flex-1 flex-col gap-2 text-sm">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                  <Link href={`/contacto?motivo=${plan.cta.motivo}&interes=${encodeURIComponent(plan.name)}`}>
                    {plan.cta.label}
                  </Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Precios en pesos colombianos (COP). No incluyen dominio ni hosting, que se cotizan aparte según el caso.
        </p>
      </Container>
    </section>
  );
}
