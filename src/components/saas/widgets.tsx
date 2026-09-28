import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Widgets oscuros y dispositivos del pack Divi "SaaS Product", reconstruidos
 * en SVG/CSS. Los PNG originales llevan "Divi X / By Elegant Themes" impreso,
 * así que aquí se redibujan con el contenido de Fidel Mercado Tech.
 */

const BRAND = "Fidel Mercado Tech";

function Spark({ className, color = "orange" }: { className?: string; color?: "orange" | "green" | "white" }) {
  const stroke = color === "green" ? "#4de961" : color === "white" ? "#fff" : "url(#spark-o)";
  return (
    <svg viewBox="0 0 80 24" className={cn("h-6 w-20", className)} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="spark-o" x1="0" x2="1">
          <stop offset="0" stopColor="#fe7e8e" />
          <stop offset="1" stopColor="#f8c701" />
        </linearGradient>
      </defs>
      <path d="M2 14c6-9 9 8 15 2s7-10 13-4 8 9 14 3 6-9 12-4 8 7 12 1 5-5 10-3" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** Semicírculo verde/naranja con porcentaje. */
export function Gauge({ value, className, track = false }: { value: number; className?: string; track?: boolean }) {
  return (
    <svg viewBox="0 0 120 66" className={className} aria-hidden="true">
      <path d="M12 60a48 48 0 0 1 96 0" pathLength={100} fill="none" stroke={track ? "#fff" : "#f0b323"} strokeWidth="18" />
      <path d="M12 60a48 48 0 0 1 96 0" pathLength={100} fill="none" stroke={track ? "#4de961" : "#6fbf3f"} strokeWidth="18" strokeDasharray={`${value} 100`} style={track ? { strokeDashoffset: -(100 - value) * 0, transform: "scaleX(-1)", transformOrigin: "60px 33px" } : undefined} />
    </svg>
  );
}

/** Arco de 3/4 de círculo (el "90%"). */
function Arc({ value, color = "#4de961", className }: { value: number; color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 70" className={className} aria-hidden="true">
      <path d="M14 62a40 40 0 1 1 72 0" pathLength={100} fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="9" strokeLinecap="round" />
      <path d="M14 62a40 40 0 1 1 72 0" pathLength={100} fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" strokeDasharray={`${value} 100`} />
    </svg>
  );
}

const MONTHS = ["Mar", "Abr", "May", "Jun", "Jul", "Ago"];
const BARS = [70, 52, 80, 88, 100, 62];

export function Bars({ className, highlight = 4, labels = true }: { className?: string; highlight?: number; labels?: boolean }) {
  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="flex flex-1 items-end justify-between gap-[10%]">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="w-full rounded-full"
            style={{
              height: `${h}%`,
              background: i === highlight ? "linear-gradient(#4de961,#2fbf4a)" : "linear-gradient(#f8c701,#fe7e8e)",
            }}
          />
        ))}
      </div>
      {labels ? (
        <div className="mt-2 flex justify-between text-[0.5em] text-white/60">
          {MONTHS.map((m, i) => (
            <span key={m} className={i === 3 ? "font-bold text-white" : undefined}>{m}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Avatar({ initials, online, className }: { initials: string; online?: boolean; className?: string }) {
  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center rounded-full border-[3px] border-white/80 bg-gradient-to-br from-[#9df14b] to-[#02e173] font-bold text-black", className)}>
      {initials}
      {online ? <span className="absolute -top-0.5 -right-0.5 size-[26%] rounded-full border-2 border-white bg-[#4de961]" /> : null}
    </span>
  );
}

/* ------------------------------------------------------------------ cards */

type Box = { className?: string; style?: React.CSSProperties };

export function SparkCard({ title = "FidelOS", year = "2026", by = BRAND, className, style }: Box & { title?: string; year?: string; by?: string }) {
  return (
    <div className={cn("saas-widget flex items-center justify-between gap-4 px-7 py-5", className)} style={style}>
      <div className="leading-tight">
        <p className="text-[1.35em] font-semibold">{title}</p>
        <p className="text-[.7em] text-white/50">({year})</p>
        <p className="text-[.7em] font-semibold text-white/70">{by}</p>
      </div>
      <Spark />
    </div>
  );
}

export function GaugeCard({ title = "FidelOS", subtitle = BRAND, value = 60, legend = ["Web", "WhatsApp"], className, style }: Box & { title?: string; subtitle?: string; value?: number; legend?: [string, string] }) {
  return (
    <div className={cn("saas-widget flex flex-col items-center px-6 pt-7 pb-5 text-center", className)} style={style}>
      {title ? <p className="text-[1.3em] font-semibold leading-tight">{title}</p> : null}
      {subtitle ? <p className="text-[.7em] text-white/50">{subtitle}</p> : null}
      <div className="relative mt-3 w-full">
        <Gauge value={value} className="w-full" />
        <span className="absolute inset-x-0 bottom-0 text-[2.1em] leading-none font-medium">{value}%</span>
      </div>
      <div className="mt-3 flex w-full justify-between text-[.7em] text-white/70">
        <span className="flex flex-col items-center gap-1"><i className="size-1.5 rounded-full bg-[#6fbf3f]" />{legend[0]}</span>
        <span className="flex flex-col items-center gap-1"><i className="size-1.5 rounded-full bg-[#f0b323]" />{legend[1]}</span>
      </div>
    </div>
  );
}

export function RingCard({ value = 90, caption = BRAND, footer, color = "#4de961", className, style }: Box & { value?: number; caption?: string; footer?: string; color?: string }) {
  return (
    <div className={cn("saas-widget flex flex-col items-center px-6 pt-7 pb-6 text-center", className)} style={style}>
      <div className="relative w-[78%]">
        <Arc value={value} color={color} className="w-full" />
        <span className="absolute inset-x-0 bottom-0 text-[1.8em] font-bold leading-none">{value}%</span>
      </div>
      <p className="mt-2 text-[.75em] text-white/60">{caption}</p>
      {footer ? <p className="mt-4 text-[.95em] font-semibold text-[#fe8a6e]">{footer}</p> : null}
    </div>
  );
}

export function BarsCard({ title = "Rendimiento", className, style }: Box & { title?: string }) {
  return (
    <div className={cn("saas-widget flex flex-col px-6 pt-5 pb-4", className)} style={style}>
      {title ? <p className="mb-3 text-center text-[.8em] font-semibold">{title}</p> : null}
      <Bars className="min-h-0 flex-1" />
    </div>
  );
}

export function StatCard({ value = "24/7", label = "Atención WhatsApp", className, style }: Box & { value?: string; label?: string }) {
  return (
    <div className={cn("saas-widget flex flex-col items-center justify-center px-5 py-5 text-center", className)} style={style}>
      <Spark className="w-[70%]" />
      <p className="mt-3 text-[1.6em] font-bold leading-none">{value}</p>
      <p className="mt-1 text-[.6em] text-white/60">{label}</p>
    </div>
  );
}

export function ProfileCard({ name = BRAND, sub = "contacto@fidelmercadotech.com", initials = "FM", className, style }: Box & { name?: string; sub?: string; initials?: string }) {
  return (
    <div className={cn("saas-widget flex flex-col items-center px-6 py-6 text-center", className)} style={style}>
      <Avatar initials={initials} online className="size-[3.6em] text-[1em]" />
      <p className="mt-3 text-[1em] font-semibold leading-tight">{name}</p>
      <p className="text-[.62em] text-white/50">{sub}</p>
    </div>
  );
}

export function LeadCard({ name = "Nuevo lead", sub = "Inmobiliaria Prime", initials = "IP", spark = false, className, style }: Box & { name?: string; sub?: string; initials?: string; spark?: boolean }) {
  return (
    <div className={cn("saas-widget flex items-center gap-4 px-6 py-5", className)} style={style}>
      <Avatar initials={initials} className="size-[2.8em] text-[.8em]" />
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-[1em] font-semibold">{name}</p>
        <p className="truncate text-[.8em] text-white/50">{sub}</p>
      </div>
      {spark ? <Spark color="green" /> : null}
    </div>
  );
}

/** Gauge grande de una sola cifra (features "60%" / "80%"). */
export function BigGaugeCard({ value, variant = "duo", className, style }: Box & { value: number; variant?: "duo" | "mono" }) {
  return (
    <div className={cn("saas-widget flex items-end justify-center px-[10%] pt-[12%] pb-[10%]", className)} style={style}>
      <div className="relative w-full">
        {variant === "mono" ? (
          <svg viewBox="0 0 120 66" className="w-full" aria-hidden="true">
            <path d="M12 60a48 48 0 0 1 96 0" pathLength={100} fill="none" stroke="#fff" strokeWidth="18" />
            <path d="M108 60a48 48 0 0 0-96 0" pathLength={100} fill="none" stroke="#4de961" strokeWidth="18" strokeDasharray={`${100 - value + 20} 100`} />
          </svg>
        ) : (
          <Gauge value={value} className="w-full" />
        )}
        <span className="absolute inset-x-0 bottom-0 text-center text-[3.2em] font-normal leading-none">{value}%</span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- panels */

/** Panel negro 16:9 con widgets + botón play (equivalente al video del pack). */
export function TourPanel({ href, label = "Ver demo en vivo", className }: { href: string; label?: string; className?: string }) {
  return (
    <div className={cn("relative aspect-[1080/608] w-full overflow-hidden rounded-[24px] bg-black text-[clamp(7px,1.05vw,15px)]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,.07),transparent_70%)]" />
      <StatCard value="24/7" label="Atención WhatsApp" className="absolute top-[6%] left-[15.5%] w-[11.5%] rounded-[14px]" />
      <RingCard value={90} caption={BRAND} footer="Captura con IA" className="absolute top-[39%] left-[8.5%] w-[24%]" />
      <GaugeCard title="FidelOS" subtitle={BRAND} value={60} className="absolute top-[2%] left-[36.5%] w-[32%]" />
      <SparkCard className="absolute top-[80%] left-[36.5%] w-[32%]" />
      <ProfileCard className="absolute top-[21%] left-[76%] w-[15%] rounded-[14px] text-[.8em]" />
      <BarsCard title="" className="absolute top-[60%] left-[76%] h-[32%] w-[15.5%] rounded-[14px] text-[.7em]" />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="absolute top-1/2 left-1/2 flex size-[8%] min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-white transition-transform hover:scale-110"
      >
        <Play className="size-1/2 translate-x-[8%] fill-white" />
      </a>
    </div>
  );
}

/** Dashboard en miniatura para las pantallas de los dispositivos. */
export function MiniDashboard({ layout = "wide" }: { layout?: "wide" | "phone" }) {
  if (layout === "phone") {
    return (
      <div className="grid h-full grid-cols-2 content-start gap-[4%] p-[7%] text-[5px]">
        {[0, 1, 2].map((k) => (
          <div key={k} className="contents">
            <BarsCard title="Rendimiento" className="aspect-[3/4] rounded-[6px] px-1.5 pt-1.5 pb-1 text-[4px]" />
            <div className="flex flex-col gap-[6%]">
              <GaugeCard title="FidelOS" subtitle="" value={60} legend={["", ""]} className="rounded-[6px] px-1 pt-1.5 pb-1 text-[4px]" />
              <SparkCard className="rounded-[6px] px-1.5 py-1 text-[3.5px]" />
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-[4%]">
              {["Lead nuevo", "Cita agendada", "Stock bajo", "Venta cerrada"].map((t) => (
                <LeadCard key={t} name={t} sub={BRAND} initials="FM" className="rounded-[6px] gap-1 px-1.5 py-1 text-[4px]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid h-full grid-cols-[1fr_2.1fr] grid-rows-[auto_1fr] gap-[3%] p-[4%] text-[clamp(4px,.55vw,8px)]">
      <div className="col-span-2 grid grid-cols-3 gap-[4%]">
        <SparkCard title="CRM" className="rounded-[10px] px-3 py-2" />
        <SparkCard title="Inventario" className="rounded-[10px] px-3 py-2" />
        <SparkCard title="RRHH" className="rounded-[10px] px-3 py-2" />
      </div>
      <GaugeCard title="FidelOS" subtitle={BRAND} value={60} className="rounded-[12px] px-2 pt-3 pb-2" />
      <div className="saas-widget relative flex flex-col rounded-[12px] px-4 pt-3 pb-2">
        <p className="mb-2 text-center text-[1.3em] font-semibold">Rendimiento</p>
        <div className="flex flex-1 items-end justify-between gap-[3%]">
          {[40, 30, 62, 50, 78, 45, 60, 85, 55, 70, 95].map((h, i) => (
            <span key={i} className="w-full rounded-full" style={{ height: `${h}%`, background: i === 7 ? "linear-gradient(#f8c701,#fe7e8e)" : "linear-gradient(#4de961,#2fbf4a)" }} />
          ))}
        </div>
        <span className="absolute top-[26%] left-[62%] rounded-md bg-black/80 px-1.5 py-0.5 text-[.9em]">2.000</span>
      </div>
    </div>
  );
}

/** Laptop en perspectiva (saas-4 / saas-45 del pack). */
export function Laptop({ className }: { className?: string }) {
  return (
    <div className={cn("[perspective:1800px]", className)} aria-hidden="true">
      <div className="relative [transform:rotateX(8deg)_rotateY(-26deg)_rotateZ(3deg)] [transform-style:preserve-3d]">
        <div className="rounded-[14px] border-[6px] border-[#1a1a1a] bg-black p-[1.2%] shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
          <div className="saas-screen aspect-[16/10] overflow-hidden rounded-[6px]">
            <MiniDashboard />
          </div>
        </div>
        <div className="relative -mt-[1px] h-[14px] origin-top rounded-b-[18px] bg-gradient-to-b from-[#d9d9de] to-[#8d8f96] [transform:rotateX(-72deg)_scaleX(1.12)] shadow-[0_40px_40px_-10px_rgba(0,0,0,.35)]" />
        <div className="mx-auto mt-6 h-6 w-[90%] rounded-[50%] bg-black/25 blur-xl" />
      </div>
    </div>
  );
}

/** Tablet inclinada (saas-46 del pack). */
export function Tablet({ className, tilt = "left" }: { className?: string; tilt?: "left" | "right" }) {
  return (
    <div className={cn("[perspective:2000px]", className)} aria-hidden="true">
      <div
        className="rounded-[28px] bg-gradient-to-br from-[#2b2d33] to-[#0c0c0e] p-[2.2%] shadow-[0_50px_70px_-25px_rgba(0,0,0,.55)] ring-1 ring-[#5b5e66]"
        style={{ transform: tilt === "left" ? "rotateX(24deg) rotateY(-8deg) rotateZ(-9deg)" : "rotateX(20deg) rotateY(10deg) rotateZ(-8deg)" }}
      >
        <div className="saas-screen aspect-[4/3] overflow-hidden rounded-[14px]">
          <MiniDashboard />
        </div>
      </div>
    </div>
  );
}

/** Teléfono inclinado (saas-47 del pack). */
export function Phone({ className }: { className?: string }) {
  return (
    <div className={cn("[perspective:1600px]", className)} aria-hidden="true">
      <div className="rounded-[36px] bg-[#111] p-[3.5%] shadow-[0_50px_70px_-25px_rgba(0,0,0,.6)] ring-2 ring-[#2c2c2c] [transform:rotateZ(22deg)_rotateY(-14deg)_rotateX(6deg)]">
        <div className="saas-screen aspect-[9/19] overflow-hidden rounded-[28px]">
          <MiniDashboard layout="phone" />
        </div>
      </div>
    </div>
  );
}
