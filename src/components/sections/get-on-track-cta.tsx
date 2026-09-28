import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { whatsappUrl } from "@/content/site";

export function GetOnTrackCta() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/80 bg-white py-20 sm:py-28">
      {/* Formas y gráficos decorativos oficiales saas-4.png */}
      <div className="fmt-shapes" aria-hidden="true">
        <span className="s-ring" style={{ top: "15%", right: "8%" }} />
        <span className="s-plus" style={{ bottom: "20%", left: "6%" }} />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna Izquierda (2/5 width = 5 cols en grid de 12) */}
          <div className="flex flex-col gap-6 text-center lg:col-span-5 lg:text-left">
            <Reveal className="flex flex-col gap-4">
              <span className="fmt-eyebrow-pill w-fit mx-auto lg:mx-0">Da el siguiente paso</span>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Digitaliza tu operación
              </h2>
              <h4 className="text-xl font-bold text-slate-800">
                Sistemas conectados que escalan con tu empresa
              </h4>
              <p className="text-base leading-relaxed text-slate-600">
                Cuéntanos qué proceso necesitas automatizar o controlar. Creamos la solución adecuada con demostración previa y acompañamiento continuo.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
              <Button asChild size="lg" className="rounded-full bg-[#00e676] px-8 py-6 font-bold text-slate-950 hover:bg-[#00c853] shadow-lg shadow-green-500/20">
                <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 bg-white px-7 py-6 font-bold text-slate-800 hover:border-slate-400 hover:bg-slate-50">
                <Link
                  href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar por WhatsApp
                </Link>
              </Button>
            </Reveal>
          </div>

          {/* Columna Derecha (3/5 width = 7 cols): Asset original saas-37.png */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="fmt-elevate overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
                  <Image
                    src="/assets/saas-product/saas-37.png"
                    alt="Panel de control SaaS saas-37"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
