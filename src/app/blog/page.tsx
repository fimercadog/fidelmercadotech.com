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
      {/* Hero estilo Divi SaaS Blog Layout */}
      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-20 text-foreground sm:py-28">
        <div className="fmt-aurora" aria-hidden="true" />
        <div className="fmt-grid-bg absolute inset-0 opacity-20" aria-hidden="true" />
        
        <div className="fmt-shapes" aria-hidden="true">
          <span className="s-ring" style={{ top: "14%", right: "8%" }} />
          <span className="s-tri" style={{ top: "25%", left: "6%" }} />
          <span className="s-dot" style={{ bottom: "20%", left: "10%" }} />
          <span className="s-plus" style={{ top: "50%", right: "6%" }} />
        </div>

        <Container className="relative z-10 flex flex-col items-center text-center">
          <SectionHeading
            level={1}
            eyebrow="Blog"
            title="Ideas prácticas para operar mejor"
            description="Sin humo: qué hemos aprendido construyendo CRM, inventario y automatizaciones para PYMES."
            align="center"
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

      <section className="py-20 sm:py-28 bg-background">
        <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="fmt-elevate group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{post.readMinutes} min lectura</span>
                </div>
                <h2 className="text-xl font-bold leading-snug text-foreground">{post.title}</h2>
                <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
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
