import { IconCard, Row, type PackIcon } from "@/components/saas/kit";

const CAPABILITY_CARDS: { icon: PackIcon; title: string; text: string }[] = [
  {
    icon: "browser",
    title: "Software Empresarial",
    text: "Sistemas a la medida, plataformas web y tableros operativos diseñados para centralizar la información de tu negocio.",
  },
  {
    icon: "sliders",
    title: "IA Aplicada",
    text: "Captura de inventario por foto y voz, clasificación inteligente de clientes y asistentes virtuales integrados.",
  },
  {
    icon: "mail",
    title: "Automatización & ERP",
    text: "Flujos automatizados que conectan tu sitio web, agentes de WhatsApp y ERP para evitar tareas manuales repetitivas.",
  },
];

export function CapabilityStrip() {
  return (
    <section className="saas saas-section border-y border-[rgba(0,0,0,0.07)]">
      <Row className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        {CAPABILITY_CARDS.map((card) => (
          <IconCard key={card.title} icon={card.icon} title={card.title} text={card.text} variant="outline" />
        ))}
      </Row>
    </section>
  );
}
