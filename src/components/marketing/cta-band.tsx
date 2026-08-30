import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { whatsappUrl } from "@/content/site";

export function CtaBand({
  title = "¿Listo para ver una demostración?",
  description = "Te mostramos la solución funcionando con datos reales y resolvemos tus dudas en una llamada corta.",
  primaryHref = "/contacto?motivo=demo",
  primaryLabel = "Solicitar demostración",
}: {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="fmt-dark relative overflow-hidden bg-background text-foreground">
      <div className="fmt-aurora" aria-hidden="true" />
      <Container className="relative py-20 text-center">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="text-base leading-7 text-muted-foreground">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={whatsappUrl("Hola, quiero solicitar una demostración.")} target="_blank" rel="noopener noreferrer">
                Hablar por WhatsApp
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
