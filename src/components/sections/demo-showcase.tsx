import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

export function DemoShowcase() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white">
      <Container className="flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Demostración interactiva"
            title="Conoce cómo funciona nuestra plataforma en tiempo real"
            description="Observa la velocidad, claridad y capacidad de integración de nuestras soluciones antes de implementarlas."
            align="center"
          />
        </Reveal>

        <Reveal className="w-full max-w-5xl">
          <div className="fmt-elevate group relative aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl">
            {/* Asset oficial saas-27.jpg de previsualización de video */}
            <Image
              src="/assets/saas-product/saas-27.jpg"
              alt="Demostración en video de FidelMercadoTech"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/40 transition-opacity group-hover:bg-slate-950/30" />

            {/* Play button e info flotante */}
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
              <Link
                href="/contacto?motivo=demo"
                className="group/btn flex size-22 items-center justify-center rounded-full bg-[#00e676] text-slate-950 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
                aria-label="Ver demostración"
              >
                <Play className="ml-1 size-9 fill-slate-950 text-slate-950 transition-transform group-hover/btn:scale-110" />
              </Link>
              
              <div className="flex flex-col items-center gap-2">
                <span className="rounded-full bg-slate-900/90 px-4 py-1.5 text-xs font-bold text-[#00e676] backdrop-blur">
                  Demostración en vivo disponible
                </span>
                <p className="max-w-md text-sm font-medium text-white shadow-sm">
                  Haz clic para solicitar un recorrido personalizado con tu propio flujo de datos.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
