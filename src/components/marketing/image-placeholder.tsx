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
      <div className={cn("relative overflow-hidden rounded-xl border border-border bg-muted", className)} style={{ aspectRatio: slot.ratio }}>
        <Image src={slot.src} alt={slot.alt} fill priority={priority} className="object-cover" sizes="(min-width: 1024px) 900px, 100vw" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-dashed border-primary/40 bg-[repeating-linear-gradient(135deg,color-mix(in_oklch,var(--primary)_6%,transparent)_0_12px,transparent_12px_24px)] p-6 text-center",
        className,
      )}
      style={{ aspectRatio: slot.ratio }}
    >
      <ImageOff className="size-6 text-primary/60" aria-hidden="true" />
      <p className="text-xs font-bold tracking-wide text-primary/80 uppercase">Imagen pendiente · Tipo {slot.kind}</p>
      <p className="max-w-md text-xs leading-5 text-muted-foreground">{slot.description}</p>
      <code className="rounded bg-primary/10 px-1.5 py-0.5 text-[0.65rem] text-primary/80">{slot.id}</code>
    </div>
  );
}
