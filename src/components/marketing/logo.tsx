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

/** FM monogram — geometric, modular, works as favicon at 32px. */
export function LogoMark({ className, inverted = false }: Pick<LogoProps, "className" | "inverted">) {
  return (
    <svg viewBox="0 0 96 96" role="img" aria-label="Fidel Mercado Tech" className={cn("size-10 shrink-0", className)}>
      <defs>
        <linearGradient id="fmt-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#24C40C" />
          <stop offset="1" stopColor="#39FF14" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="24" fill={inverted ? "#ffffff" : "#080A09"} />
      <g fill={inverted ? "#080A09" : "url(#fmt-mark)"}>
        {/* F */}
        <rect x="24" y="26" width="10" height="44" rx="2" />
        <rect x="24" y="26" width="26" height="10" rx="2" />
        <rect x="24" y="43" width="20" height="10" rx="2" />
        {/* M */}
        <rect x="56" y="26" width="10" height="44" rx="2" />
        <rect x="72" y="26" width="10" height="44" rx="2" />
        <rect x="60" y="26" width="18" height="10" rx="2" />
      </g>
    </svg>
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
