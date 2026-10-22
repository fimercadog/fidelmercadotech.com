import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { POSTS, formatDate } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | Fidel Mercado Tech",
  description:
    "Artículos prácticos sobre ERP, inventario, automatización e IA aplicada para PYMES, del equipo de Fidel Mercado Tech.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      {/* ── Blog hero ── */}
      <section className="bg-white pt-20 pb-10">
        <Container>
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#4de961]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#15803d]">
              Blog
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-[#0f172a] sm:text-5xl">
              Ideas prácticas<br className="hidden sm:block" /> para operar mejor
            </h1>
            <p className="mt-4 text-[16px] leading-7 text-[#64748b]">
              Sin humo: qué hemos aprendido construyendo ERP, inventario y automatizaciones para PYMES latinoamericanas.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Artículo destacado ── */}
      <section className="bg-white pb-16">
        <Container>
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-0 overflow-hidden rounded-[28px] border border-[rgba(0,0,0,0.08)] bg-[#f8fafc] shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
            >
              {/* Imagen */}
              {featured.coverImage && (
                <div className="relative min-h-[260px] bg-[#eef0f2] lg:min-h-[400px]">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/5" />
                </div>
              )}

              {/* Contenido */}
              <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#00e676]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#15803d]">
                    Destacado
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#64748b] shadow-sm">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl font-black leading-[1.15] tracking-tight text-[#0f172a] sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-[15px] leading-7 text-[#64748b]">{featured.excerpt}</p>
                <div className="flex items-center justify-between border-t border-[rgba(0,0,0,0.07)] pt-5">
                  <div className="flex items-center gap-3 text-[12px] text-[#94a3b8]">
                    <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{featured.readMinutes} min lectura</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#15803d] transition-colors group-hover:text-[#00e676]">
                    Leer artículo <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ── Grid de artículos ── */}
      <section className="bg-[#f8fafc] py-16">
        <Container>
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-xl font-extrabold text-[#0f172a]">Todos los artículos</h2>
            <span className="text-[13px] text-[#94a3b8]">{rest.length} artículos</span>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {post.coverImage && (
                    <div className="relative aspect-video overflow-hidden bg-[#f5f6f7]">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#4de961]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#333]">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-medium text-[#94a3b8]">{post.readMinutes} min</span>
                    </div>
                    <h3 className="text-[15px] font-extrabold leading-snug text-[#0f172a]">{post.title}</h3>
                    <p className="text-[13px] leading-6 text-[#64748b]">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-[rgba(0,0,0,0.06)] pt-4">
                      <time dateTime={post.date} className="text-[11px] text-[#94a3b8]">
                        {formatDate(post.date)}
                      </time>
                      <span className="inline-flex items-center gap-1 text-[12px] font-bold text-[#15803d] transition-colors group-hover:text-[#00e676]">
                        Leer <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Tienes un proceso que te está frenando?"
        description="Cuéntamelo y te digo si lo resolvemos con un producto mío o con un desarrollo a medida."
        primaryLabel="Escríbeme"
        primaryHref="/contacto?motivo=proyecto"
      />
    </>
  );
}
