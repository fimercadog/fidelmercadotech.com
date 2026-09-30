import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Laptop, SparkCard, GaugeCard, RingCard, LeadCard } from "@/components/saas/widgets";

/* Piezas compartidas del pack Divi "SaaS Product". */

export function Row({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("saas-row", className)} {...props} />;
}

type PillVariant = "green" | "black" | "white" | "soft" | "outline";

export function Pill({
  href,
  variant = "green",
  className,
  children,
}: {
  href: string;
  variant?: PillVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("saas-btn", `saas-btn-${variant}`, className)}
    >
      {children}
    </Link>
  );
}

/** Íconos de línea del pack (PNG 64px sin marca). */
export type PackIcon = "browser" | "tablet" | "sliders" | "calendar" | "pencil" | "lock" | "mail" | "link";
const ICON_FILE: Record<PackIcon, string> = {
  browser: "saas-icon-01",
  tablet: "saas-icon-03",
  sliders: "saas-icon-05",
  calendar: "saas-icon-07",
  pencil: "saas-icon-09",
  lock: "saas-icon-10",
  mail: "saas-icon-11",
  link: "saas-icon-12",
};

export function PackIconImg({ name, className }: { name: PackIcon; className?: string }) {
  return <Image src={`/assets/saas-product/${ICON_FILE[name]}.png`} alt="" width={64} height={64} className={cn("size-16", className)} />;
}

/** Tarjeta con ícono: "outline" (borde negro, radio 10) o "float" (blanca, sombra, radio 24). */
export function IconCard({
  icon,
  title,
  text,
  variant = "outline",
  href,
  className,
}: {
  icon: PackIcon;
  title: string;
  text: string;
  variant?: "outline" | "float";
  href?: string;
  className?: string;
}) {
  const body = (
    <>
      <PackIconImg name={icon} className={variant === "float" ? "mb-[60px]" : "mb-[36px]"} />
      <h3 className="saas-h5 mb-2">{title}</h3>
      <p className="saas-small">{text}</p>
    </>
  );
  const cls = cn(
    "block h-full px-10 py-12 transition-transform duration-300",
    variant === "outline"
      ? "rounded-[24px] border border-black/10 saas-shadow-soft min-h-[280px] hover:-translate-y-1"
      : "rounded-[24px] bg-white saas-shadow-soft min-h-[300px]",
    href && "hover:-translate-y-1",
    className,
  );
  return href ? (
    <Link href={href} className={cls}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/** Kicker verde en el lugar de las estrellas del pack (no hay reseñas publicadas que citar). */
export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[14px] font-bold tracking-[0.3em] text-[#4de961] uppercase">{children}</p>;
}

export interface Quote {
  kicker: string;
  text: string;
}

/** Bloque "Testimonials": título centrado + cita grande + tres citas (home / pricing). */
export function QuotesFeatured({ title, featured, quotes }: { title: string; featured: Quote; quotes: Quote[] }) {
  return (
    <section className="saas saas-section">
      <Row>
        <h2 className="saas-h2 text-center">{title}</h2>
      </Row>
      <Row>
        <Kicker>{featured.kicker}</Kicker>
        <p className="saas-h3 text-[#333]">“{featured.text}”</p>
      </Row>
      <Row className="grid gap-10 md:grid-cols-3 md:gap-[5.5%]">
        {quotes.map((q) => (
          <div key={q.kicker}>
            <Kicker>{q.kicker}</Kicker>
            <p className="saas-h4 text-[#333]">“{q.text}”</p>
          </div>
        ))}
      </Row>
    </section>
  );
}

/** Rejilla 2×2 de citas grandes (landing). */
export function QuotesGrid({ quotes }: { quotes: Quote[] }) {
  return (
    <section className="saas saas-section">
      <Row className="grid gap-x-[5.5%] gap-y-14 md:grid-cols-2">
        {quotes.map((q) => (
          <div key={q.kicker}>
            <Kicker>{q.kicker}</Kicker>
            <p className="saas-h3 text-[#333]">“{q.text}”</p>
          </div>
        ))}
      </Row>
    </section>
  );
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Acordeón del pack: tarjetas blancas radio 24, "+" verde, la primera abierta. */
export function FaqColumn({ items, openFirst = true }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div className="flex flex-col gap-[30px]">
      {items.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0} className="saas-toggle saas-shadow-toggle rounded-[24px] bg-white p-5">
          <summary className="flex items-start justify-between gap-4">
            <h3 className="text-[clamp(1.05rem,1.6vw,1.375rem)] leading-snug font-medium! text-black!">{f.q}</h3>
            <Plus className="saas-toggle-icon mt-1 size-5 shrink-0 text-[#4de961] transition" strokeWidth={3} />
          </summary>
          <p className="mt-3 text-[14px] leading-[1.7]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Banda verde redondeada con título, texto y botón negro (hiring / request a feature). */
export function GreenBand({ title, text, cta }: { title: string; text: string; cta: { label: string; href: string } }) {
  return (
    <div className="saas-grad-green-soft saas-shadow-green rounded-[24px] px-[8%] py-[57px] text-center">
      <h2 className="saas-h2 mx-auto max-w-[850px]">{title}</h2>
      <p className="mx-auto mt-5 max-w-[850px] text-[14px] leading-[1.7] font-semibold text-black">{text}</p>
      <Pill href={cta.href} variant="black" className="mt-6">
        {cta.label}
      </Pill>
    </div>
  );
}

/** Composición de widgets sobre el arco amarillo-verde (saas-32 + saas-30). */
export function WidgetArc({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-[1080/820] w-full text-[clamp(7px,1.1vw,16px)]", className)}>
      <Image src="/assets/saas-product/saas-32.png" alt="" fill sizes="(min-width: 1080px) 1080px, 80vw" className="object-contain" />
      <span className="absolute top-[26%] left-[8%] h-[16%] w-[8%] rotate-[-30deg] rounded-[50%] border border-black saas-grad-orange opacity-90 blur-[0.3px]" />
      <SparkCard className="absolute top-[6%] left-[10%] w-[31%]" />
      <GaugeCard title="" subtitle="" value={60} legend={["Web", "WhatsApp"]} className="absolute top-0 left-[53%] w-[30%]" />
      <RingCard value={90} color="#fe8a6e" className="absolute top-[44%] left-[26%] w-[17%]" />
      <LeadCard name="Nuevo lead" sub="Inmobiliaria Prime" initials="IP" className="absolute top-[44%] left-[52%] w-[31%]" />
    </div>
  );
}

/** "Get on Track": círculo con textura + laptop, y columna negra con puntos. */
export function GetOnTrack({
  title,
  subtitle,
  text,
  cta,
}: {
  title: string;
  subtitle: string;
  text: string;
  cta: { label: string; href: string };
}) {
  return (
    <section className="saas saas-section overflow-hidden pt-[58px]">
      <Row className="relative">
        <div className="saas-tex-sun relative mx-auto aspect-[1080/839] w-full rounded-[600px_600px_300px_30px]">
          <span className="saas-grad-orange absolute top-[5%] left-[5%] h-[27%] w-[13%] rounded-[60px_10px] shadow-[0_60px_80px_rgba(253,150,97,.5)]" />
          <div className="saas-widget absolute top-[35%] left-[4%] aspect-[574/348] w-[42%] text-[clamp(7px,1.05vw,15px)]">
            <RingCard value={90} className="absolute inset-[8%_10%_8%_24%] bg-none shadow-none" />
          </div>
          <SparkCard className="absolute top-[42%] left-[-4%] w-[28%] text-[clamp(7px,1vw,14px)]" />
        </div>
        <Laptop className="absolute top-[-6%] right-[-22%] w-[88%]" />
      </Row>
      <Row className="grid items-center gap-12 md:grid-cols-[396fr_624fr] md:gap-[5.5%]">
        <div className="relative z-10">
          <h2 className="saas-h2-lg">{title}</h2>
          <p className="saas-h4 mt-3 text-[#787f84]!">{subtitle}</p>
          <p className="mt-6">{text}</p>
          <Pill href={cta.href} className="mt-6">
            {cta.label}
          </Pill>
        </div>
        <div className="relative -mr-[12vw] max-md:hidden" style={{ width: "58%" }}>
          <Image
            src="/assets/saas-product/saas-37.png"
            alt="Dashboard FidelOS"
            width={900}
            height={620}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </Row>
    </section>
  );
}
