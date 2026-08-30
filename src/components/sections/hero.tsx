import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { BrowserFrame } from "@/components/marketing/device-frame";
import { HeroIntro } from "@/components/sections/hero-intro";
import { whatsappUrl } from "@/content/site";
import type { ImageSlot } from "@/components/marketing/image-placeholder";

const HERO_IMAGE: ImageSlot = {
  id: "home-hero-product",
  alt: "Panel de una de las soluciones de Fidel Mercado Tech con métricas y pipeline",
  ratio: "16/10",
  kind: "A",
  description:
    "Captura real del panel de una solución (preferiblemente CRM + Inventario o RRHH): dashboard con métricas, tablas y navegación lateral, con datos de demostración. Fondo claro.",
};

export function Hero() {
  return (
    <section className="fmt-dark relative overflow-hidden bg-background text-foreground">
      <div className="fmt-aurora" aria-hidden="true" />
      <div className="fmt-grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-14 py-20 text-center sm:py-28">
        <HeroIntro>
          <span className="fmt-eyebrow">Empresa de tecnología · Software · IA · Automatización</span>
          <h1 className="text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            Software, automatización e IA para <span className="fmt-gradient-text">hacer crecer tu empresa</span>.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Creamos sistemas empresariales, CRM, inventarios, soluciones especializadas y agentes inteligentes que
            convierten procesos manuales en operaciones digitales.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/soluciones">Conoce nuestras soluciones</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            ¿Prefieres hablar?{" "}
            <Link
              href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline underline-offset-4"
            >
              Escríbenos por WhatsApp
            </Link>
          </p>
        </HeroIntro>

        <div className="w-full max-w-4xl">
          <BrowserFrame slot={HERO_IMAGE} priority />
        </div>
      </Container>
    </section>
  );
}
