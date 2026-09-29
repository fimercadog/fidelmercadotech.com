import { TourPanel } from "@/components/saas/widgets";
import { Row, Kicker } from "@/components/saas/kit";

export function DemoShowcase() {
  return (
    <section className="saas saas-section">
      <Row className="flex flex-col items-center text-center">
        <Kicker>Demostración interactiva</Kicker>
        <h2 className="saas-h2 mb-[30px] text-[#333]">
          Conoce cómo funciona nuestra plataforma en tiempo real
        </h2>
      </Row>
      <Row>
        <TourPanel href="/contacto?motivo=demo" label="Solicitar demo en vivo" />
      </Row>
    </section>
  );
}
