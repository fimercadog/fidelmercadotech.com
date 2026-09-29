import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/marketing/container";
import { SectionHeading } from "@/components/marketing/section-heading";

interface PageHeroCta {
  label: string;
  href: string;
  external?: boolean;
  variant?: "green" | "outline" | "black";
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctas?: PageHeroCta[];
  image?: { src: string; alt: string; width: number; height: number };
}

export function PageHero({ eyebrow, title, description, ctas, image }: PageHeroProps) {
  return (
    <section className="saas overflow-hidden bg-white py-16 sm:py-24">
      <Container>
        <div className={image ? "grid items-center gap-10 lg:grid-cols-2 lg:gap-16" : "flex flex-col items-center text-center"}>
          {/* Text column */}
          <div className={`flex flex-col gap-8 ${!image ? "max-w-3xl" : ""}`}>
            <SectionHeading
              level={1}
              eyebrow={eyebrow}
              title={title}
              description={description}
              align={image ? "left" : "center"}
            />
            {ctas && ctas.length > 0 && (
              <div className={`flex flex-wrap gap-3 ${!image ? "justify-center" : ""}`}>
                {ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className={`saas-btn px-8 ${
                      cta.variant === "black" ? "saas-btn-black"
                      : cta.variant === "outline" ? "saas-btn-outline"
                      : "saas-btn-green"
                    }`}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Image column */}
          {image && (
            <div className="relative flex items-center justify-center">
              {/* Organic lime-green blob */}
              <div
                aria-hidden="true"
                className="absolute"
                style={{
                  width: "90%",
                  height: "90%",
                  background: "radial-gradient(ellipse at 55% 45%, rgba(157,241,75,0.30) 0%, rgba(77,233,97,0.18) 50%, transparent 75%)",
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                  filter: "blur(8px)",
                }}
              />
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="relative z-10 w-full max-w-[560px] drop-shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
