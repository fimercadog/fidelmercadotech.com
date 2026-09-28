import Image from "next/image";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";

const CAPABILITY_CARDS = [
  {
    icon: "/assets/saas-product/saas-icon-01.png",
    title: "Software Empresarial",
    description: "Sistemas a la medida, plataformas web y tableros operativos diseñados para centralizar la información de tu negocio.",
    pill: "Desarrollo",
  },
  {
    icon: "/assets/saas-product/saas-icon-05.png",
    title: "IA Aplicada",
    description: "Captura de inventario por foto y voz, clasificación inteligente de clientes y asistentes virtuales integrados.",
    pill: "Inteligencia Artificial",
  },
  {
    icon: "/assets/saas-product/saas-icon-11.png",
    title: "Automatización & CRM",
    description: "Flujos automatizados que conectan tu sitio web, agentes de WhatsApp y CRM para evitar tareas manuales repetitivas.",
    pill: "Integración",
  },
];

export function CapabilityStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50 py-20">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-8 md:grid-cols-3">
          {CAPABILITY_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <div className="fmt-elevate group flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#00e676] hover:shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-slate-100 p-3 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={64}
                      height={64}
                      className="size-8 object-contain"
                    />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-600">
                    {card.pill}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
