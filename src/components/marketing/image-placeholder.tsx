import Image from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageSlot {
  id: string;
  alt: string;
  /** aspect-ratio string, e.g. "16/10" */
  ratio: string;
  /** A: captura real · B: mockup con captura real · C: ilustración · D: comercial */
  kind: "A" | "B" | "C" | "D";
  description: string;
  /** When a real asset exists under /public, its src. Otherwise omit → placeholder. */
  src?: string;
}

/**
 * Renders a real image when `slot.src` is set, otherwise a clearly-labelled
 * placeholder that documents exactly which asset is still needed
 * (mirrors docs/IMAGE_REQUIRED.md).
 */
export function ImagePlaceholder({ slot, className, priority }: { slot: ImageSlot; className?: string; priority?: boolean }) {
  if (slot.src) {
    return (
      <div className={cn("relative overflow-hidden rounded-2xl bg-muted", className)} style={{ aspectRatio: slot.ratio }}>
        <Image src={slot.src} alt={slot.alt} fill priority={priority} className="object-cover object-top" sizes="(min-width: 1024px) 900px, 100vw" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-br from-primary/12 via-brand-cyan/8 to-brand-pink/12 p-8 text-center ring-1 ring-primary/10",
        className,
      )}
      style={{ aspectRatio: slot.ratio }}
    >
      <span className="flex size-12 items-center justify-center rounded-2xl fmt-gradient text-white shadow-lg shadow-primary/25">
        <ImageOff className="size-5" aria-hidden="true" />
      </span>
      <p className="text-xs font-bold tracking-wide text-primary uppercase">Vista previa · Tipo {slot.kind}</p>
      <p className="max-w-md text-xs leading-5 text-muted-foreground">{slot.description}</p>
    </div>
  );
}
