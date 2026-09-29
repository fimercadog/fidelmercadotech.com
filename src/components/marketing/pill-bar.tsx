import Link from "next/link";
import { Container } from "@/components/marketing/container";

export interface PillBarLink {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary";
  external?: boolean;
}

export function PillBar({ links }: { links: PillBarLink[] }) {
  return (
    <div className="border-y border-[rgba(0,0,0,0.07)] bg-white py-4">
      <Container className="flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={
              link.variant === "default"
                ? "saas-btn saas-btn-green text-[13px] px-5 py-2.5"
                : "saas-btn saas-btn-outline text-[13px] px-5 py-2.5"
            }
          >
            {link.label}
          </Link>
        ))}
      </Container>
    </div>
  );
}
