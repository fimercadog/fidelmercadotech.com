import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { FOOTER_NAV, SITE, whatsappUrl } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="fmt-dark bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo inverted textClassName="text-white" />
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              Desarrollamos software empresarial, automatizaciones y soluciones con inteligencia artificial para
              empresas que quieren dejar atrás los procesos manuales.
            </p>
          </div>

          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold tracking-wide uppercase">{col.heading}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacidad" className="transition-colors hover:text-foreground">
              Política de datos
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-foreground">
              Términos
            </Link>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">
              {SITE.email}
            </a>
            <a
              href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
