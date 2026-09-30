import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SERVICES } from "@/content/services";

const SERVICE_IDS = ["web", "software", "automatizacion", "ia", "agentes", "integraciones"];

export function ServicesStrip() {
  const services = SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(Boolean) as typeof SERVICES;

  return (
    <section className="saas saas-section border-t border-[rgba(0,0,0,0.07)] bg-white">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Lo que construimos para ti"
            description="Cada servicio está diseñado para resolver un problema concreto de tu operación. Todos pueden combinarse."
            align="center"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={i * 0.05}>
              <Link
                href={`/servicios/${svc.id}`}
                className="saas-shadow-toggle group flex h-full flex-col gap-3 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-7 transition-colors hover:border-[#4de961]/40"
              >
                <h3 className="saas-h5 text-[#333]">{svc.title}</h3>
                <p className="flex-1 text-[13px] leading-6 text-[#666]">{svc.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                  Ver servicio <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center">
          <Link href="/servicios" className="saas-btn saas-btn-black px-8">
            Ver todos los servicios
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
