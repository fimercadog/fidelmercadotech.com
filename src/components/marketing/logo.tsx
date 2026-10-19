import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";

type LogoProps = {
  className?: string;
  /** On dark backgrounds (footer) the logo sits on a white pill so its navy wordmark stays legible. */
  inverted?: boolean;
};

/** Full brand logo (mark + wordmark + tagline), 2014×352. */
export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link href="/" className={cn("flex shrink-0 items-center", className)} aria-label={`${SITE.name} — inicio`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-fmt.png"
        alt={SITE.name}
        width={2014}
        height={352}
        className={cn("h-9 w-auto max-w-full sm:h-11", inverted && "box-content h-8 rounded-xl bg-white px-3 py-2 sm:h-9")}
      />
    </Link>
  );
}
