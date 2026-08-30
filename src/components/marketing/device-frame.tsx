import { cn } from "@/lib/utils";
import { ImagePlaceholder, type ImageSlot } from "@/components/marketing/image-placeholder";

/** Browser-chrome frame around a product screenshot (reference layout style). */
export function BrowserFrame({ slot, className, priority }: { slot: ImageSlot; className?: string; priority?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border bg-card fmt-card-shadow", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 hidden rounded-md bg-background px-3 py-1 text-[0.7rem] text-muted-foreground sm:block">
          app.fidelmercadotech.com
        </span>
      </div>
      <ImagePlaceholder slot={slot} priority={priority} className="rounded-none border-0" />
    </div>
  );
}

/** Phone frame — for FidelOS captures and WhatsApp conversations. */
export function PhoneFrame({ slot, className }: { slot: ImageSlot; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[300px] rounded-[2.5rem] border-8 border-navy bg-navy p-2 fmt-card-shadow", className)}>
      <div className="overflow-hidden rounded-[1.8rem] bg-card">
        <ImagePlaceholder slot={{ ...slot, ratio: "9/19" }} className="rounded-none border-0" />
      </div>
    </div>
  );
}
