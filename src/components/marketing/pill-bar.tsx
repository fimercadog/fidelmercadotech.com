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
 * Full-bleed gradient strip with pill buttons — the Divi "IT Services"
 * button bar that runs edge-to-edge under every hero / above every footer.
 */
export function PillBar({ links }: { links: PillBarLink[] }) {
  return (
    <div className="fmt-dark fmt-gradient py-5">
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
