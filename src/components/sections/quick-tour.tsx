import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const TOUR_HIGHLIGHTS = [
  "Captura automática de prospectos y fichas de clientes",
  "Inventario actualizado en tiempo real por fotos y notas de voz",
  "Flujos de trabajo simplificados para todo el equipo",
  "Información correcta centralizada en una sola base de datos",
];

export function QuickTour() {
  return (
    <section className="border-t border-slate-200/80 py-20 sm:py-28 bg-slate-50">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Recorrido rápido"
            title="Un recorrido por la experiencia FidelMercadoTech"
            description="Gestionar tu negocio no tiene por qué ser complejo. Diseñamos pantallas claras para acelerar decisiones."
            align="center"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Columna Izquierda (2/3 width = 7 cols): Asset original saas-46.png */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal>
              <div className="fmt-elevate overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-50">
                  <Image
                    src="/assets/saas-product/saas-46.png"
                    alt="Gráfico de interfaz saas-46"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-12 sm:items-center">
              <Reveal className="sm:col-span-4 flex flex-col justify-center rounded-2xl border border-slate-200 bg-[#d2f800] p-6 text-center shadow-md">
                <span className="font-heading text-5xl font-extrabold text-slate-950">10x</span>
                <span className="mt-1 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Más rápido en captura de datos
                </span>
              </Reveal>

              <div className="flex flex-col gap-3 sm:col-span-8">
                <h3 className="text-xl font-bold text-slate-900">Consolida tu relación con cada cliente</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Nuestras herramientas permiten registrar interacciones, productos e historial de solicitudes sin duplicar tareas.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha (1/3 width = 5 cols): Asset original saas-19.png */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <div className="fmt-elevate flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-square w-full max-w-[240px] mx-auto overflow-hidden">
                  <Image
                    src="/assets/saas-product/saas-19.png"
                    alt="Ilustración saas-19"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Software de gestión empresarial listo para usar
                </h3>
                <ul className="flex flex-col gap-3">
                  {TOUR_HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#00c853]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/contacto?motivo=demo"
                    className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#00c853]"
                  >
                    Solicitar prueba guiada <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
