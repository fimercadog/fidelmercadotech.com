import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <section id="faq" className="scroll-mt-24 border-t border-border bg-muted/30 py-20">
      <Container className="flex max-w-3xl flex-col gap-10">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>
        <Reveal delay={0.06}>
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-5">
            {items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="leading-7">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
