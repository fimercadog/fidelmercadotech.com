import { cn } from "@/lib/utils";

/**
 * Flat vector illustration slot. Uses a plain <img> (not next/image) so a
 * missing asset degrades to empty space instead of breaking the build.
 * Assets live in /public/brand/illus-*.png.
 */
export function Illustration({
  name,
  alt,
  className,
  priority,
}: {
  name: "hero" | "collaboration" | "productivity" | "automation" | "about";
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/brand/illus-${name}.png`}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={cn("mx-auto h-auto w-full max-w-lg", className)}
    />
  );
}
