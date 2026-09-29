import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
  const topSolutions = SOLUTIONS.slice(0, 6);

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

        {/* 2-Column Detailed Feature Row (Side-by-side con assets saas-13.png y saas-14.png) */}
        <div className="grid gap-8 lg:grid-cols-2">
          {topSolutions.slice(0, 2).map((sol, i) => {
            const assetImg = i === 0 ? "/assets/saas-product/saas-13.png" : "/assets/saas-product/saas-14.png";
            return (
              <Reveal key={sol.slug} delay={i * 0.1}>
                <div className="saas-shadow-soft group flex h-full flex-col justify-between rounded-[24px] bg-white p-8 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-col gap-5">
                    <div className="relative aspect-video w-full max-w-sm mx-auto overflow-hidden">
                      <Image
                        src={assetImg}
                        alt={sol.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-[#4de961]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#333]">
                        {sol.category}
                      </span>
                      <Link
                        href={`/soluciones/${sol.slug}`}
                        className="inline-flex size-9 items-center justify-center rounded-full bg-[#f5f5f5] text-[#555] transition-colors group-hover:bg-[#4de961] group-hover:text-black"
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>

                    <h3 className="saas-h4 text-[#333]">{sol.name}</h3>
                    <p className="text-[14px] leading-6 text-[#666]">{sol.summary}</p>

                    <ul className="flex flex-col gap-2.5 pt-2">
                      {sol.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-[13px] font-semibold text-[#333]">
                          <span className="size-2 rounded-full bg-[#4de961]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[rgba(0,0,0,0.07)] pt-6">
                    <Link href={`/soluciones/${sol.slug}`} className="saas-btn saas-btn-outline w-full justify-center">
                      Ver detalle de {sol.name} <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Grid de Soluciones completas */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topSolutions.slice(2).map((solution, i) => (
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
