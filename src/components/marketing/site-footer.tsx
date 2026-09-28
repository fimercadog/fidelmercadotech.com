import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { FOOTER_NAV, SITE, whatsappUrl } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Grid de 5 columnas estilo Divi SaaS (Sección 9) */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Columna 1: Marca & Eslogan */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Logo inverted textClassName="text-white" />
            <p className="text-xs leading-relaxed text-slate-400">
              Desarrollamos software empresarial, automatizaciones y soluciones con inteligencia artificial para
              empresas que quieren dejar atrás los procesos manuales.
            </p>
          </div>

          {/* Columnas 2, 3, 4, 5: Enlaces del sistema */}
          {FOOTER_NAV.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold tracking-wider uppercase text-white">{col.heading}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-slate-400 transition-colors hover:text-[#00e676]">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra Inferior */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacidad" className="transition-colors hover:text-white">
              Política de datos
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white">
              Términos
            </Link>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
              {SITE.email}
            </a>
            <a
              href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#00e676] font-bold text-slate-300"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
