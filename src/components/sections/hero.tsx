import Link from "next/link";
import { Container } from "@/components/marketing/container";
import { HeroIntro } from "@/components/sections/hero-intro";
import { whatsappUrl } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-8 text-slate-900 sm:py-14 lg:py-20">
      <Container className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
          {/* Columna Izquierda */}
          <div className="flex flex-col">
            <HeroIntro className="items-start text-left gap-5">
              <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#787f84]">
                Software · IA · Automatización
              </span>

              <h1 className="font-heading text-[2.6rem] font-black leading-[1.08] tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem]">
                Software, automatización e IA para hacer crecer tu empresa.
              </h1>

              <p className="max-w-lg text-[15px] leading-7 text-[#666]">
                Creamos páginas web, sistemas empresariales, ERP, inventarios y agentes inteligentes que
                convierten procesos manuales en operaciones digitales.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/soluciones"
                  className="saas-btn saas-btn-green"
                >
                  Conoce nuestras soluciones
                </Link>
              </div>

              <p className="pt-1 text-[13px] text-[#787f84]">
                ¿Prefieres hablar directamente?{" "}
                <Link
                  href={whatsappUrl("Hola, quiero información sobre sus soluciones.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1a1a1a] underline underline-offset-4 hover:text-[#02e173]"
                >
                  Escríbenos por WhatsApp
                </Link>
              </p>
            </HeroIntro>
          </div>

          {/* Columna Derecha: cuadrícula 2×2 de cards con transformación global — igual al pack */}
          <div className="relative flex items-center justify-end overflow-hidden" style={{ minHeight: 520 }} aria-hidden="true">

            {/* SVG noise filter reutilizable */}
            <svg width="0" height="0" className="absolute" aria-hidden="true">
              <filter id="hero-grain"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" /></filter>
            </svg>

            {/* Hoja orgánica principal — lima/verde, igual al pack */}
            <div className="pointer-events-none absolute" style={{ width: 340, height: 390, left: "2%", top: "50%", transform: "translateY(-52%)", zIndex: 0 }}>
              <div className="absolute inset-0" style={{
                borderRadius: "74% 26% 58% 42% / 54% 46% 54% 46%",
                background: "linear-gradient(160deg, #d2f535 0%, #9df14b 28%, #4de961 58%, #27903e 100%)",
              }} />
              {/* Grano de textura sobre la hoja */}
              <div className="absolute inset-0 opacity-25" style={{
                borderRadius: "74% 26% 58% 42% / 54% 46% 54% 46%",
                filter: "url(#hero-grain)",
                background: "#000",
              }} />
            </div>

            {/* Blob verde oscuro inferior — mismo grano */}
            <div className="pointer-events-none absolute" style={{ width: 200, height: 190, left: "18%", bottom: "4%", zIndex: 1 }}>
              <div className="absolute inset-0" style={{
                borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%",
                background: "linear-gradient(140deg, #27903e 0%, #1a6b2a 100%)",
              }} />
              <div className="absolute inset-0 opacity-40" style={{
                borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%",
                filter: "url(#hero-grain)",
                background: "#000",
              }} />
            </div>

            {/* Óvalo naranja / ámbar — decorativo superior-izquierdo */}
            <div className="pointer-events-none absolute" style={{
              width: 72, height: 90,
              left: "8%", top: "24%",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #f8a532 0%, #e05a28 100%)",
              zIndex: 2,
            }} />

            {/* Cuadrícula 2×2 con transformación global en perspectiva */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                width: 500,
                position: "relative",
                zIndex: 10,
                transform: "perspective(1400px) rotateX(8deg) rotateY(-14deg) rotate(4deg)",
                transformOrigin: "center center",
              }}
            >
              {/* Card 1: Bar chart */}
              <div className="rounded-[22px] bg-[#1c1c1e] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <div className="flex items-end gap-1.5" style={{ height: 100 }}>
                  {[
                    { px: 44, c: "#c84b1e" },
                    { px: 60, c: "#d96e22" },
                    { px: 50, c: "#e8a025" },
                    { px: 82, c: "#a0d840" },
                    { px: 68, c: "#6dc93a" },
                    { px: 58, c: "#4de961" },
                    { px: 96, c: "#4de961" },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: bar.px, background: bar.c }} />
                  ))}
                </div>
                <div className="mt-2.5 flex justify-between text-[8px] text-white/30">
                  {["Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep"].map((m) => <span key={m}>{m}</span>)}
                </div>
              </div>

              {/* Card 2: Perfil */}
              <div className="rounded-[22px] bg-[#1c1c1e] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)] flex flex-col items-center">
                <div className="relative mb-3" style={{ width: 88, height: 88 }}>
                  <div className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(150deg,#7c6be8 0%,#9d5fc7 45%,#38a169 100%)" }} />
                  <svg className="absolute inset-0 opacity-60" width="88" height="88" viewBox="0 0 88 88" fill="none">
                    <circle cx="44" cy="30" r="15" fill="rgba(255,255,255,0.8)" />
                    <ellipse cx="44" cy="78" rx="28" ry="22" fill="rgba(255,255,255,0.6)" />
                  </svg>
                  <span className="absolute bottom-1 right-1 block size-4 rounded-full bg-[#4de961] ring-2 ring-[#1c1c1e]" />
                </div>
                <p className="text-[15px] font-bold text-white text-center leading-snug">Juan Martínez</p>
                <p className="text-[10px] text-white/35 mt-1 text-center">juan@empresa.com</p>
              </div>

              {/* Card 3: Wave + número grande */}
              <div className="rounded-[22px] bg-[#1c1c1e] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <svg className="mb-4 w-full" height="54" viewBox="0 0 220 54" fill="none">
                  <path d="M0 38 C18 38 30 12 52 20 C74 28 84 44 108 32 C132 20 146 8 172 14 C190 18 208 22 220 20"
                    stroke="#c84b1e" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <path d="M0 46 C24 46 40 30 66 36 C92 42 106 26 136 28 C158 29 180 20 220 16"
                    stroke="#e8a025" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
                <p className="text-[36px] font-black text-white leading-none">1.2k</p>
                <p className="text-[11px] text-white/35 mt-1">Clientes activos</p>
              </div>

              {/* Card 4: Gauge */}
              <div className="rounded-[22px] bg-[#1c1c1e] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)] flex flex-col items-center">
                <svg className="mb-2" width="100" height="60" viewBox="0 0 100 60" fill="none">
                  <path d="M8 56 A42 42 0 0 1 92 56" stroke="#2c2c2c" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M8 56 A42 42 0 0 1 80 18" stroke="#4de961" strokeWidth="7" strokeLinecap="round" fill="none" />
                </svg>
                <p className="text-[32px] font-black text-[#4de961] leading-none">92%</p>
                <p className="text-[10px] text-white/35 mt-1.5">Por FidelOS</p>
                <p className="text-[12px] font-semibold text-white/65 mt-0.5">FidelOS Product</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
