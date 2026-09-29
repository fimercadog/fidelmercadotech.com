import { Row, FaqColumn } from "@/components/saas/kit";
import type { Faq } from "@/content/faq";

export function FaqSection({
  items,
  eyebrow = "Preguntas frecuentes",
  title = "Antes de que preguntes",
}: {
  items: Faq[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id="faq" className="saas saas-section scroll-mt-24">
      <Row>
        <p className="mb-3 text-center text-[13px] font-bold tracking-[0.25em] text-[#4de961] uppercase">{eyebrow}</p>
        <h2 className="saas-h2 mb-[40px] text-center text-[#333]">{title}</h2>
        <div className="mx-auto max-w-3xl">
          <FaqColumn items={items} />
        </div>
      </Row>
    </section>
  );
}
