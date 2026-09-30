import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/marketing/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { POSTS, getPost, formatDate } from "@/content/blog";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Fidel Mercado Tech`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allOthers = POSTS.filter((p) => p.slug !== post.slug);
  const currentIndex = POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = POSTS[currentIndex - 1] ?? null;
  const nextPost = POSTS[currentIndex + 1] ?? null;
  const related = allOthers.slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Fidel Mercado Tech" },
    ...(post.coverImage ? { image: post.coverImage } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero: imagen izquierda + título derecha */}
      <section className="bg-white pt-10 pb-12">
        <Container className="max-w-5xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[13px] text-[#666] transition-colors hover:text-[#1a1a1a] mb-8">
            <ArrowLeft className="size-4" /> Volver al blog
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Imagen */}
            {post.coverImage && (
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px] bg-[#f5f6f7] shadow-md">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            )}

            {/* Meta + título */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                <span className="rounded-full bg-[#4de961]/15 px-3 py-1 text-[#15803d]">{post.category}</span>
                <span aria-hidden="true" className="text-[#ccc]">·</span>
                <span className="text-[#999]">{post.readMinutes} min de lectura</span>
                <span aria-hidden="true" className="text-[#ccc]">·</span>
                <time dateTime={post.date} className="text-[#999]">{formatDate(post.date)}</time>
              </div>
              <h1 className="text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.6rem]" style={{ color: "#1a1a1a" }}>
                {post.title}
              </h1>
              <p className="text-[16px] leading-7 text-[#666]">{post.excerpt}</p>
              <div className="flex items-center gap-3 border-t border-[rgba(0,0,0,0.07)] pt-4">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#4de961]/20">
                  <span className="text-sm font-black text-[#15803d]">F</span>
                </div>
                <span className="text-[13px] font-semibold text-[#555]">Fidel Mercado Tech</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Cuerpo del artículo */}
      <article className="bg-white pb-16">
        <Container className="flex max-w-3xl flex-col gap-6">
          {post.body.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="mt-4 text-[1.35rem] font-extrabold leading-snug tracking-tight" style={{ color: "#1a1a1a" }}>
                  {block.text}
                </h2>
              );
            if (block.type === "ul")
              return (
                <ul key={i} className="flex flex-col gap-3">
                  {block.items?.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] leading-7 text-[#555]">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#4de961]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="text-[15px] leading-[1.9] text-[#555]">{block.text}</p>
            );
          })}

          {/* 4. CTA inline post-cuerpo */}
          <div className="mt-6 flex items-center gap-4 rounded-[20px] border border-[rgba(0,0,0,0.07)] bg-[#f5fef7] p-6">
            <div className="flex-1">
              <p className="text-[15px] font-extrabold text-[#1a1a1a]">¿Te aplicó este artículo?</p>
              <p className="mt-1 text-[13px] text-[#666]">Cuéntanos tu caso y te decimos cómo FidelOS puede ayudarte.</p>
            </div>
            <Link
              href="/contacto?motivo=demo"
              className="saas-btn saas-btn-green shrink-0 rounded-full px-5 py-2.5 text-[13px]"
            >
              Solicitar demo
            </Link>
          </div>
        </Container>
      </article>

      {/* 5. Prev / Next */}
      <div className="border-t border-[rgba(0,0,0,0.07)] bg-white py-8">
        <Container className="flex max-w-3xl items-center justify-between gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex items-center gap-2 text-[13px] font-semibold text-[#333] transition-colors hover:text-[#15803d]"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">{prevPost.title}</span>
              <span className="sm:hidden">Anterior</span>
            </Link>
          ) : <span />}
          <Link href="/blog" className="text-[12px] font-bold uppercase tracking-wider text-[#999] hover:text-[#333]">
            Todos los artículos
          </Link>
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center gap-2 text-[13px] font-semibold text-[#333] transition-colors hover:text-[#15803d]"
            >
              <span className="hidden sm:inline">{nextPost.title}</span>
              <span className="sm:hidden">Siguiente</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <span />}
        </Container>
      </div>

      {/* 6. Bio del autor */}
      <section className="border-t border-[rgba(0,0,0,0.07)] bg-[#f9fafb] py-12">
        <Container className="max-w-3xl">
          <div className="flex items-center gap-5">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#4de961]/20">
              <span className="text-xl font-black text-[#15803d]">F</span>
            </div>
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-[#999]">Escrito por</p>
              <p className="text-[16px] font-extrabold text-[#1a1a1a]">Fidel Mercado Tech</p>
              <p className="text-[13px] leading-6 text-[#666]">
                Equipo de desarrollo de software para PYMES — ERP, inventario, automatización e IA aplicada.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Más artículos (con thumbnails) */}
      {related.length > 0 && (
        <section className="saas saas-section bg-white">
          <Container className="flex flex-col gap-10">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-extrabold" style={{ color: "#1a1a1a" }}>Más artículos</h2>
              <Link href="/blog" className="text-[13px] font-bold text-[#15803d] hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="saas-shadow-soft group flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(0,0,0,0.07)] bg-white transition-transform hover:-translate-y-1"
                  >
                    {p.coverImage && (
                      <div className="relative aspect-video bg-[#f5f6f7]">
                        <Image
                          src={p.coverImage}
                          alt={p.title}
                          fill
                          className="object-cover object-top"
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-3 p-6">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-[#4de961]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#333]">
                          {p.category}
                        </span>
                        <span className="text-[11px] text-[#999]">{p.readMinutes} min</span>
                      </div>
                      <h3 className="text-[15px] font-extrabold leading-snug text-[#1a1a1a]">{p.title}</h3>
                      <p className="text-[13px] leading-6 text-[#666]">{p.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-2 text-[13px] font-bold text-[#15803d] transition-colors group-hover:text-[#4de961]">
                        Leer artículo <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="¿Te suena tu caso en esto?"
        description="Cuéntanos qué proceso quieres mejorar y te proponemos por dónde empezar."
        primaryLabel="Solicitar demostración"
        primaryHref="/contacto?motivo=demo"
      />
    </>
  );
}
