import { Check } from "lucide-react";
import { Row, Pill } from "@/components/saas/kit";
import { cn } from "@/lib/utils";
import { PLANS } from "@/content/pricing";

export function Pricing() {
  return (
    <section id="precios" className="saas saas-section scroll-mt-24">
      <Row>
        <p className="mb-3 text-center text-[13px] font-bold tracking-[0.25em] text-[#4de961] uppercase">Planes</p>
        <h2 className="saas-h2 mb-4 text-center text-[#333]">Precios de referencia</h2>
        <p className="mb-[54px] max-w-xl mx-auto text-center text-[14px] text-[#787f84]">
          Puntos de partida claros. El alcance final se acuerda por escrito según tu negocio.
        </p>
      </Row>
      <Row>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "saas-shadow-toggle relative flex flex-col justify-between rounded-[24px] border bg-white p-[30px]",
                plan.featured ? "border-2 border-black" : "border-black",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(140deg,#4de961_20%,#02e173_80%)] px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-black shadow">
                  Más elegido
                </span>
              )}
              <div className="flex flex-col gap-4">
                <h3 className="saas-h5">{plan.name}</h3>
                <div className="flex flex-wrap items-end gap-1.5">
                  <span className="saas-h2 leading-none text-[#333]">{plan.price}</span>
                  <span className="mb-1 text-[12px] text-[#787f84]">{plan.priceNote}</span>
                </div>
                <p className="rounded-full bg-[#f5f6f7] px-3 py-1.5 text-center text-[12px] font-semibold uppercase tracking-wide text-[#787f84]">
                  Entrega: {plan.delivery}
                </p>
                <ul className="flex flex-col gap-2.5 pt-2">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[#555]">
                      <Check className="mt-0.5 size-4 shrink-0 text-[#4de961]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Pill
                  href={`/contacto?motivo=${plan.cta.motivo}&interes=${encodeURIComponent(plan.name)}`}
                  variant={plan.featured ? "green" : "black"}
                  className="block w-full text-center"
                >
                  {plan.cta.label}
                </Pill>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-[#787f84]">
          Precios en pesos colombianos (COP). No incluyen dominio ni hosting, que se cotizan aparte según el caso.
        </p>
      </Row>
    </section>
  );
}
