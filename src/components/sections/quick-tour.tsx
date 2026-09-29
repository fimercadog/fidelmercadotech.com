import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";

const TOUR_HIGHLIGHTS = [
  "Captura automática de prospectos y fichas de clientes",
  "Inventario actualizado en tiempo real por fotos y notas de voz",
  "Flujos de trabajo simplificados para todo el equipo",
  "Información correcta centralizada en una sola base de datos",
];

export function QuickTour() {
  return (
    <section className="saas saas-section bg-[#f9fafb]">
      <Container className="flex flex-col gap-14">
        <div className="text-center">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">Recorrido rápido</p>
          <h2 className="saas-h2 text-[#333]">Un recorrido por la experiencia FidelMercadoTech</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] text-[#666]">
            Gestionar tu negocio no tiene por qué ser complejo. Diseñamos pantallas claras para acelerar decisiones.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Columna Izquierda (7 cols): Asset original saas-46.png */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal>
              <div className="saas-shadow-soft overflow-hidden rounded-[24px] bg-white p-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-50">
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
              <Reveal className="sm:col-span-4 flex flex-col justify-center rounded-[18px] bg-[#d2f800] p-6 text-center shadow-md">
                <span className="font-heading text-5xl font-extrabold text-slate-950">10x</span>
                <span className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                  Más rápido en captura de datos
                </span>
              </Reveal>

              <div className="flex flex-col gap-3 sm:col-span-8">
                <h3 className="saas-h5 text-[#333]">Consolida tu relación con cada cliente</h3>
                <p className="text-[14px] leading-relaxed text-[#666]">
                  Nuestras herramientas permiten registrar interacciones, productos e historial de solicitudes sin duplicar tareas.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha (5 cols): Asset original saas-19.png */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Reveal>
              <div className="saas-shadow-soft flex flex-col gap-6 rounded-[24px] bg-white p-8">
                <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden">
                  <Image
                    src="/assets/saas-product/saas-19.png"
                    alt="Ilustración saas-19"
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="saas-h5 text-[#333]">
                  Software de gestión empresarial listo para usar
                </h3>
                <ul className="flex flex-col gap-3">
                  {TOUR_HIGHLIGHTS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-[#555]">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#4de961]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/contacto?motivo=demo"
                    className="inline-flex items-center gap-2 text-[14px] font-bold text-[#333] hover:text-[#02e173]"
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
