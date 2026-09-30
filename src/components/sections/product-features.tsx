import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SOLUTIONS } from "@/content/solutions";
import { SolutionCard } from "@/components/marketing/solution-card";

const ICON_BLURBS = [
  {
    icon: "/assets/saas-product/saas-icon-12.png",
    title: "Multicanal & Social",
    description: "Captura clientes desde WhatsApp, formularios web e Instagram directamente hacia tu base de datos.",
  },
  {
    icon: "/assets/saas-product/saas-icon-05.png",
    title: "Seguro & Confiable",
    description: "Roles, permisos y auditoría campo a campo para proteger la información confidencial de tu empresa.",
  },
  {
    icon: "/assets/saas-product/saas-icon-11.png",
    title: "Conexión en Tiempo Real",
    description: "Tus sistemas hablan entre sí sin demoras, sin duplicar tareas ni perder registros importantes.",
  },
];

export function ProductFeatures() {
  const topSolutions = SOLUTIONS.filter((s) => !s.hidden).slice(2, 5);

  return (
    <section id="soluciones" className="saas saas-section bg-white">
      <Container className="flex flex-col gap-16">
        {/* Section Header */}
        <Reveal>
          <SectionHeading
            eyebrow="Nuestras soluciones"
            title="Productos listos para tu empresa"
            description="Desarrollos propios que resuelven un problema concreto. Cada uno tiene demostración y página con el detalle."
            align="center"
          />
        </Reveal>

        {/* Fila de 3 SolutionCards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topSolutions.map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 0.05}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <Link href="/soluciones" className="saas-btn saas-btn-black px-8">
            Ver todas las soluciones
          </Link>
        </Reveal>

        {/* 3-Column Icon Blurbs */}
        <div className="mt-8 grid gap-8 border-t border-[rgba(0,0,0,0.07)] pt-16 sm:grid-cols-3">
          {ICON_BLURBS.map((blurb, i) => (
            <Reveal key={blurb.title} delay={i * 0.08} className="flex flex-col gap-4 text-center sm:text-left">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-[#4de961]/10 p-3 sm:mx-0 mx-auto">
                <Image
                  src={blurb.icon}
                  alt={blurb.title}
                  width={64}
                  height={64}
                  className="size-8 object-contain"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h4 className="saas-h5 text-[#333]">{blurb.title}</h4>
                <p className="saas-small">{blurb.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
