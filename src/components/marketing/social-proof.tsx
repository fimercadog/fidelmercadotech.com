import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
  rating?: number;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote: "Centralizar nuestra gestión inmobiliaria y el seguimiento de prospectos en un solo lugar duplicó la respuesta de nuestro equipo.",
    name: "Gerencia Comercial",
    role: "Sector Inmobiliario",
    rating: 5,
  },
  {
    quote: "La captura de inventarios por voz y fotografía con IA eliminó los errores manuales al registrar entradas de almacén.",
    name: "Dirección de Operaciones",
    role: "Control & Logística",
    rating: 5,
  },
  {
    quote: "La integración con WhatsApp nos permite responder automáticamente a cada cliente sin perder la ficha de seguimiento en el CRM.",
    name: "Coordinación de Servicios",
    role: "Atención al Cliente",
    rating: 5,
  },
  {
    quote: "Una solución rápida, probada y adaptada a nuestras necesidades. El proceso de implementación fue claro desde la demo inicial.",
    name: "Administración General",
    role: "Empresa de Servicios",
    rating: 5,
  },
];

export function SocialProof({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Confianza & Resultados"
            title="Lo que destacan las empresas que confían en nosotros"
            description="Plataformas en producción diseñadas para transformar procesos manuales en operaciones digitales fluidas."
            align="center"
          />
        </Reveal>

        {/* 2x2 Grid de Tarjetas con Estrellas (Layout Divi SaaS Sección 7) */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="fmt-elevate flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col gap-5">
                  {/* Rating 5 estrellas en verde neón */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating || 5 }).map((_, starIdx) => (
                      <Star key={starIdx} className="size-5 fill-[#00e676] text-[#00e676]" />
                    ))}
                  </div>

                  {/* Cita en formato de título H3 */}
                  <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </h3>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6 text-sm">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#00e676]/20 font-bold text-slate-950">
                    {t.name.slice(0, 1)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900">{t.name}</span>
                    <span className="text-xs text-slate-500 font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
