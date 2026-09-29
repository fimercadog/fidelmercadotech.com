import Link from "next/link";
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
    <section className="saas saas-section bg-[#f9fafb]">
      <Container className="text-center">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="saas-h2 leading-tight" style={{ color: "#1a1a1a" }}>{title}</h2>
          <p className="text-[15px] leading-7 text-[#666]">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href={primaryHref} className="saas-btn saas-btn-green px-8">
              {primaryLabel}
            </Link>
            <Link
              href={whatsappUrl("Hola, quiero solicitar una demostración.")}
              target="_blank"
              rel="noopener noreferrer"
              className="saas-btn saas-btn-outline px-8"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
