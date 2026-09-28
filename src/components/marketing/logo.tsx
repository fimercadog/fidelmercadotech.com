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
    <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 p-1.5 shadow-sm border border-slate-800", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-orca.png"
        alt="Fidel Mercado Tech"
        className="size-full object-contain"
      />
    </div>
  );
}

export function Logo({ className, markClassName, textClassName, inverted = false, withText = true }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center gap-2.5 group", className)} aria-label={`${SITE.name} — inicio`}>
      <span className={cn("font-heading text-xl sm:text-[1.35rem] font-bold tracking-tight transition-colors", inverted ? "text-white" : "text-[#18181b]", textClassName)}>
        Fidel Mercado <span className="text-[#00c853]">Tech</span>
      </span>
    </Link>
  );
}
