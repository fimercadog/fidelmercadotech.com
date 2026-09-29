import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { POSTS, formatDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos prácticos sobre ERP, inventario, automatización e IA aplicada para PYMES, del equipo de Fidel Mercado Tech.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas prácticas para operar mejor"
        description="Sin humo: qué hemos aprendido construyendo ERP, inventario y automatizaciones para PYMES."
        ctas={[
          { label: "Ver soluciones", href: "/soluciones" },
          { label: "Escríbenos", href: "/contacto?motivo=proyecto", variant: "outline" },
        ]}
      />

      <section className="saas saas-section bg-[#f9fafb]">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="saas-shadow-soft group flex h-full flex-col gap-4 rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white p-8 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#4de961]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#333]">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-medium text-[#787f84]">{post.readMinutes} min lectura</span>
                </div>
                <h2 className="saas-h5 text-[#333]">{post.title}</h2>
                <p className="text-[14px] leading-6 text-[#666]">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[rgba(0,0,0,0.07)] pt-4 text-[11px] text-[#787f84]">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#333] transition-colors group-hover:text-[#02e173]">
                    Leer artículo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand
        title="¿Tienes un proceso que te está frenando?"
        description="Cuéntanoslo y te decimos si lo resolvemos con un producto nuestro o con un desarrollo a medida."
        primaryLabel="Escríbenos"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
