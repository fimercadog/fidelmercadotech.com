import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  inverted?: boolean;
  withText?: boolean;
};

/** Orca mark — white silhouette, transparent background. Site is one dark theme end to end, so it renders the same everywhere (no light/dark variant needed). */
export function LogoMark({ className }: Pick<LogoProps, "className" | "inverted">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-orca.png"
      alt="Fidel Mercado Tech"
      className={cn("size-10 shrink-0 object-contain", className)}
    />
  );
}

export function Logo({ className, markClassName, textClassName, inverted = false, withText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-2.5", className)} aria-label={`${SITE.name} — inicio`}>
      <LogoMark className={markClassName} inverted={inverted} />
      {withText ? (
        <span className={cn("flex flex-col leading-none", textClassName)}>
          <span className="font-heading text-[0.95rem] font-bold tracking-tight">
            Fidel Mercado <span className="fmt-gradient-text">Tech</span>
          </span>
          <span
            className={cn(
              "mt-1 text-[0.55rem] font-bold tracking-[0.22em] uppercase",
              inverted ? "text-white/50" : "text-muted-foreground",
            )}
          >
            Software · IA · Automatización
          </span>
        </span>
      ) : null}
    </Link>
  );
}
