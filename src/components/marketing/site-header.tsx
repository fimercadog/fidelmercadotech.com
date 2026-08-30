"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/marketing/logo";
import { NAV_LINKS, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-foreground",
                isActive(pathname, link.href) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href={whatsappUrl("Hola, quiero información sobre sus soluciones.")} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex w-full flex-col gap-0 sm:max-w-xs">
            <SheetHeader>
              <SheetTitle asChild>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive(pathname, link.href) ? "bg-accent text-accent-foreground" : "text-foreground",
                    )}
                  >
                    {link.title}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
              <SheetClose asChild>
                <Button asChild>
                  <Link href="/contacto?motivo=demo">Solicitar demostración</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline">
                  <Link href={whatsappUrl("Hola, quiero información sobre sus soluciones.")} target="_blank" rel="noopener noreferrer">
                    Hablar por WhatsApp
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
