import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";

export const metadata: Metadata = {
  title: "Página no encontrada | Fidel Mercado Tech",
  robots: { index: false },
};

const LINKS = [
  { label: "Soluciones", href: "/soluciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
] as const;

export default function NotFound() {
  return (
    <main className="flex min-h-[80svh] flex-col items-center justify-center bg-background py-24 text-center">
      <Container className="flex flex-col items-center gap-8">
        {/* 404 number */}
        <p
          aria-hidden
          className="select-none text-[9rem] font-black leading-none tracking-tight text-[--brand] opacity-20 sm:text-[12rem]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          404
        </p>

        {/* Heading */}
        <div className="-mt-8 flex flex-col gap-3">
          <h1
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Esta página no existe
          </h1>
          <p className="mx-auto max-w-md text-base text-muted-foreground">
            El enlace puede estar roto o la página pudo haberse movido.
            Usa uno de los accesos rápidos de abajo para continuar.
          </p>
        </div>

        {/* Primary CTA */}
        <Button
          asChild
          size="lg"
          className="rounded-full bg-[--brand] px-8 font-semibold text-[--navy] hover:bg-[--brand-hover]"
        >
          <Link href="/">Volver al inicio</Link>
        </Button>

        {/* Secondary links */}
        <nav aria-label="Páginas sugeridas" className="flex flex-wrap justify-center gap-3">
          {LINKS.map(({ label, href }) => (
            <Button key={href} asChild variant="outline" size="sm" className="rounded-full">
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </nav>
      </Container>
    </main>
  );
}
