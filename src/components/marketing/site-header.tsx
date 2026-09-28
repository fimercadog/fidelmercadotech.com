"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/marketing/logo";
import { NAV_LINKS } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm shadow-xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Izquierda: Logo estilo SaaS Product Home / Fidel Mercado Tech */}
        <Logo />

        {/* Derecha: Menú exacto de las 8 páginas del pack + Ícono de Carrito final estilo Elegant Themes */}
        <div className="hidden items-center gap-7 lg:flex">
          <nav className="flex items-center gap-6 xl:gap-7">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-semibold transition-colors hover:text-slate-950 tracking-tight",
                    active ? "text-slate-950 font-bold" : "text-slate-600",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          {/* Ícono de carrito idéntico al layout de referencia */}
          <Link
            href="/contacto?motivo=demo"
            className="flex items-center justify-center text-slate-800 transition-colors hover:text-[#00c853] p-1.5 rounded-full hover:bg-slate-50"
            aria-label="Carrito / Ver demostración"
          >
            <ShoppingCart className="size-5 text-slate-800 hover:text-[#00c853]" />
          </Link>
        </div>

        {/* Menú Mobile para pantallas pequeñas */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
              <Menu className="size-6 text-slate-900" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-xs bg-white text-slate-900">
            <SheetHeader className="p-4 border-b border-slate-100">
              <SheetTitle asChild>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.title + link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900",
                      isActive(pathname, link.href) ? "bg-slate-100 text-slate-900 font-bold" : "text-slate-600",
                    )}
                  >
                    {link.title}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto border-t border-slate-100 p-4">
              <SheetClose asChild>
                <Button asChild className="w-full rounded-full bg-[#00e676] font-bold text-slate-950 hover:bg-[#00c853]">
                  <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
