import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/marketing/container";

export interface PillBarLink {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
  external?: boolean;
}

/**
 * Full-bleed button bar under every hero — the Divi "IT Services" pattern,
 * but on a dark strip (not a solid-green fill: tried that, looked bad at
 * this scale). Green stays confined to the primary button.
 */
export function PillBar({ links }: { links: PillBarLink[] }) {
  return (
    <div className="border-y border-border/60 bg-card py-5">
      <Container className="flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <Button key={link.label} asChild size="lg" variant={link.variant ?? "outline"}>
            <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
              {link.label}
            </Link>
          </Button>
        ))}
      </Container>
    </div>
  );
}
