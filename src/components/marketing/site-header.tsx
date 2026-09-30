"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/marketing/logo";
import { NAV_LINKS, NAV_SOLUTIONS_DROPDOWN } from "@/content/site";
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
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-5 xl:gap-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);

              if (link.title === "Soluciones") {
                return (
                  <div key="soluciones" className="group relative">
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex items-center gap-1 text-[14px] font-medium transition-colors",
                        active ? "text-[#333] font-semibold" : "text-[#787f84] hover:text-[#333]",
                      )}
                    >
                      {link.title}
                      <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Puente invisible para que el mouse no salga del group al bajar */}
                    <div className="absolute left-0 top-full h-3 w-60" />

                    <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                      <div className="w-60 rounded-2xl border border-slate-100 bg-white py-2 shadow-xl">
                        {NAV_SOLUTIONS_DROPDOWN.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2.5 text-[13px] font-medium text-[#555] transition-colors hover:bg-[#f9fafb] hover:text-[#333]"
                          >
                            {item.title}
                          </Link>
                        ))}
                        <div className="mx-4 my-2 border-t border-slate-100" />
                        <Link
                          href="/soluciones"
                          className="block px-4 py-2.5 text-[13px] font-semibold text-[#15803d] transition-colors hover:bg-[#f9fafb]"
                        >
                          Ver todas las soluciones →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.title + link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-medium transition-colors",
                    active ? "text-[#333] font-semibold" : "text-[#787f84] hover:text-[#333]",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <span className="h-5 w-px bg-slate-200" aria-hidden="true" />

          <Link
            href="/contacto?motivo=demo"
            className="saas-btn saas-btn-green text-[13px] px-5 py-2.5"
          >
            Solicitar demo
          </Link>
        </div>

        {/* Mobile menu */}
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
            <nav className="flex flex-col gap-1 p-4 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.title + link.href}>
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-slate-100 hover:text-slate-900",
                        isActive(pathname, link.href) ? "bg-slate-100 text-slate-900 font-bold" : "text-slate-600",
                      )}
                    >
                      {link.title}
                    </Link>
                  </SheetClose>

                  {link.title === "Soluciones" && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-slate-100 pl-3">
                      {NAV_SOLUTIONS_DROPDOWN.map((item) => (
                        <SheetClose asChild key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-md px-2 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-800"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  )}
                </div>
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
