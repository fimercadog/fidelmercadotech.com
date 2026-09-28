import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { HeroIntro } from "@/components/sections/hero-intro";
import { whatsappUrl } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-8 text-slate-900 sm:py-14 lg:py-18">
      {/* Forma de arco verde/lima orgánico de fondo en el lado derecho estilo SaaS Product Layout */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-5%] z-0 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#d2f800] opacity-95 blur-2xl lg:h-[680px] lg:w-[680px]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Columna Izquierda: Titular optimizado y Botón verde estilo Divi SaaS */}
          <div className="flex flex-col lg:col-span-6">
            <HeroIntro className="items-start text-left gap-4">
              <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-slate-500">
                Software · IA · Automatización
              </span>
              
              <h1 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
                Software, automatización e IA para{" "}
                <span className="text-slate-900">hacer crecer tu empresa.</span>
              </h1>

              <p className="max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                Creamos páginas web, sistemas empresariales, CRM, inventarios y agentes inteligentes que
                convierten procesos manuales en operaciones digitales.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#00e676] px-8 py-5 text-sm font-extrabold text-slate-950 shadow-lg shadow-green-500/20 hover:bg-[#00c853] hover:shadow-green-500/35 transition-all"
                >
                  <Link href="/soluciones">Conoce nuestras soluciones</Link>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-300 bg-white px-6 py-5 text-sm font-bold text-slate-800 hover:border-slate-400 hover:bg-slate-50"
                >
                  <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
                </Button>
              </div>

              <p className="pt-1 text-xs text-slate-500">
                ¿Prefieres hablar directamente?{" "}
                <Link
                  href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-slate-900 underline underline-offset-4 hover:text-[#00c853]"
                >
                  Escríbenos por WhatsApp
                </Link>
              </p>
            </HeroIntro>
          </div>

          {/* Columna Derecha: Composición de capas con saas-17t.png (tarjetas flotantes de Divi SaaS) */}
          <div className="relative flex justify-center w-full lg:col-span-6">
            <div className="relative w-full max-w-lg lg:max-w-xl transition-transform duration-500 hover:scale-[1.02]">
              {/* Sombra de profundidad de la composición */}
              <div
                className="absolute inset-4 -z-10 rounded-3xl bg-slate-900/10 blur-xl"
                aria-hidden="true"
              />
              <Image
                src="/assets/saas-product/saas-17t.png"
                alt="Panel de control e indicadores SaaS FidelMercadoTech"
                width={1600}
                height={1600}
                priority
                className="h-auto w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
