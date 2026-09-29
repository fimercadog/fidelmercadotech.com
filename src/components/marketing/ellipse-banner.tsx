import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";

export function EllipseBanner({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="saas saas-section">
      <Container>
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f9fafb]">
        <div className="relative grid items-center gap-10 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-2 lg:py-20">
          <Reveal className="flex flex-col gap-5">
            {eyebrow && (
              <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-[#4de961]">{eyebrow}</span>
            )}
            <h2 className="max-w-xl text-2xl font-extrabold sm:text-3xl lg:text-4xl" style={{ color: "#1a1a1a" }}>
              {title}
            </h2>
            <p className="max-w-md text-[15px] leading-7 text-[#666]">{description}</p>
            <Link href={ctaHref} className="saas-btn saas-btn-green w-fit">
              {ctaLabel}
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="hidden lg:flex items-center justify-center">
            <Image
              src="/assets/saas-product/saas-24.png"
              alt="Dashboard FidelOS"
              width={760}
              height={700}
              className="w-full max-w-md drop-shadow-xl"
            />
          </Reveal>
        </div>
      </div>
      </Container>
    </section>
  );
}
