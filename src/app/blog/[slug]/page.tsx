import type { Metadata } from "next";
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
    openGraph: { title: `${post.title} | Fidel Mercado Tech`, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Fidel Mercado Tech" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="fmt-dark fmt-gradient-band relative overflow-hidden py-20 text-foreground">
        <div className="fmt-aurora" aria-hidden="true" />
        <Container className="relative flex max-w-3xl flex-col items-center gap-5 text-center">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="size-4" /> Blog
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <span className="text-white">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readMinutes} min</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1 className="text-3xl leading-[1.15] font-bold sm:text-4xl">{post.title}</h1>
        </Container>
      </section>

      <article className="py-16">
        <Container className="flex max-w-2xl flex-col gap-5">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="mt-4 text-xl font-bold">{block.text}</h2>;
            if (block.type === "ul")
              return (
                <ul key={i} className="flex flex-col gap-2 text-sm leading-7 text-muted-foreground">
                  {block.items?.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            return <p key={i} className="text-[0.95rem] leading-7 text-foreground/80">{block.text}</p>;
          })}
        </Container>
      </article>

      <section className="border-t border-border bg-secondary/60 py-16">
        <Container className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">Sigue leyendo</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {more.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="fmt-elevate group flex h-full flex-col gap-2 rounded-3xl border border-border bg-card p-6">
                  <span className="text-xs font-semibold uppercase text-primary">{p.category}</span>
                  <h3 className="text-base font-bold leading-snug">{p.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-primary">
                    Leer
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿Te suena tu caso en esto?"
        description="Cuéntanos qué proceso quieres mejorar y te proponemos por dónde empezar."
        primaryLabel="Solicitar demostración"
        primaryHref="/contacto?motivo=demo"
      />
    </>
  );
}
