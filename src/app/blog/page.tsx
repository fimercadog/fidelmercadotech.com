import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { PillBar } from "@/components/marketing/pill-bar";
import { POSTS, formatDate } from "@/content/blog";
import { whatsappUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos prácticos sobre CRM, inventario, automatización e IA aplicada para PYMES, del equipo de Fidel Mercado Tech.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return (
    <>
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-24 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-dot" style={{ top: "26%", left: "9%" }} />
          <span className="s-plus" style={{ bottom: "22%", right: "10%" }} />
        </div>
        <Container className="relative">
          <SectionHeading
            level={1}
            eyebrow="Blog"
            title="Ideas prácticas para operar mejor"
            description="Sin humo: qué hemos aprendido construyendo CRM, inventario y automatizaciones para PYMES."
          />
        </Container>
      </section>

      <PillBar
        links={[
          { label: "Ver soluciones", href: "/soluciones", variant: "default" },
          { label: "Escríbenos", href: "/contacto?motivo=proyecto" },
          { label: "WhatsApp", href: whatsappUrl("Hola, tengo una pregunta."), external: true },
        ]}
      />

      <section className="py-20">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="fmt-elevate group flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-7"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
                  <span className="text-primary">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readMinutes} min</span>
                </div>
                <h2 className="text-lg font-bold leading-snug">{post.title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
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
