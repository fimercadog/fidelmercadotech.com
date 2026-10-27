"use client";

import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/*
 * Gemelo digital de referencia: una bodega con oficina en 3D isométrico,
 * hecha solo con CSS 3D (sin librerías). Es una maqueta ilustrativa: los
 * estados son cualitativos, no hay cifras.
 */

type Zone = {
  id: string;
  name: string;
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
  color: string;
  status: "ok" | "atencion";
  statusText: string;
  detail: string;
};

const ZONES: Zone[] = [
  { id: "muelle", name: "Recepción", x: 20, y: 30, w: 110, d: 150, h: 26, color: "#4de961", status: "ok", statusText: "En orden", detail: "Ves qué camión llegó, qué trae y si coincide con la orden de compra, sin caminar hasta el muelle." },
  { id: "estantes-a", name: "Estantería A", x: 170, y: 20, w: 60, d: 170, h: 70, color: "#38bdf8", status: "ok", statusText: "Stock normal", detail: "Cada estante muestra qué producto tiene y cuánto queda. Si algo se agota, el estante se marca." },
  { id: "estantes-b", name: "Estantería B", x: 260, y: 20, w: 60, d: 170, h: 70, color: "#f8c701", status: "atencion", statusText: "Stock bajo", detail: "Un producto está por agotarse: el gemelo lo resalta para que pidas antes de quedarte sin él." },
  { id: "despacho", name: "Despacho", x: 360, y: 30, w: 110, d: 150, h: 26, color: "#fe8a6e", status: "ok", statusText: "Pedidos en preparación", detail: "Los pedidos que salen hoy, en qué etapa van y quién los está alistando." },
  { id: "oficina", name: "Oficina", x: 170, y: 225, w: 150, d: 70, h: 44, color: "#a78bfa", status: "ok", statusText: "Al día", detail: "Facturación, compras y reportes, conectados al mismo modelo: lo que pasa en la bodega se refleja aquí." },
];

const W = 500;
const D = 320;
const TILT = 58;

function Box({ z, active, onPick, rot }: { z: Zone; active: boolean; onPick: () => void; rot: number }) {
  const face = (extra: CSSProperties): CSSProperties => ({ position: "absolute", background: z.color, ...extra });
  return (
    <div
      onClick={onPick}
      className="absolute cursor-pointer"
      style={{ left: z.x, top: z.y, width: z.w, height: z.d, transformStyle: "preserve-3d" }}
    >
      {/* Sombra en el piso */}
      <div className="absolute inset-0 rounded-sm bg-black/15 blur-[3px]" />
      {/* Lado derecho */}
      <div style={face({ left: z.w, top: 0, width: z.h, height: z.d, transformOrigin: "left", transform: "rotateY(-90deg)", filter: "brightness(.72)" })} />
      {/* Lado frontal */}
      <div style={face({ left: 0, top: z.d, width: z.w, height: z.h, transformOrigin: "top", transform: "rotateX(90deg)", filter: "brightness(.85)" })} />
      {/* Tapa */}
      <div
        className={cn("absolute inset-0 transition-[filter] duration-200", active && "ring-4 ring-white/90")}
        style={{ background: z.color, transform: `translateZ(${z.h}px)`, filter: active ? "brightness(1.1)" : undefined }}
      />
      {/* Etiqueta que siempre mira al frente */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        style={{ transform: `translateZ(${z.h + 8}px) rotateZ(${-rot}deg) rotateX(${-TILT}deg) translateY(-14px)`, transformOrigin: "center bottom" }}
      >
        <span className="whitespace-nowrap rounded-full bg-[#111] px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg">{z.name}</span>
        <i className={cn("mt-1 size-2 rounded-full ring-2 ring-white", z.status === "ok" ? "bg-[#4de961]" : "bg-[#f0b323]")} />
      </div>
    </div>
  );
}

export function DigitalTwin({ className }: { className?: string }) {
  const [rot, setRot] = useState(-45);
  const [sel, setSel] = useState(ZONES[2].id);
  const current = ZONES.find((z) => z.id === sel) ?? ZONES[0];

  return (
    <div className={cn("grid gap-0 bg-[#eef1f3] lg:grid-cols-[1.6fr_1fr]", className)}>
      <div className="relative flex min-h-85 items-center justify-center overflow-hidden sm:min-h-115" style={{ perspective: 1500 }}>
        <div className="origin-center scale-[.52] sm:scale-[.8] lg:scale-105" style={{ width: W, height: D }}>
          <div
            className="relative size-full transition-transform duration-300 motion-reduce:transition-none"
            style={{ transformStyle: "preserve-3d", transform: `rotateX(${TILT}deg) rotateZ(${rot}deg)` }}
          >
            {/* Piso con cuadrícula */}
            <div
              className="absolute inset-0 rounded-md bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)]"
              style={{
                backgroundImage: "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {ZONES.map((z) => (
              <Box key={z.id} z={z} rot={rot} active={z.id === sel} onPick={() => setSel(z.id)} />
            ))}
          </div>
        </div>
        <label className="absolute inset-x-6 bottom-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-[#787f84]">
          Girar
          <input
            type="range"
            min={-75}
            max={-15}
            value={rot}
            onChange={(e) => setRot(Number(e.target.value))}
            className="h-1 flex-1 cursor-pointer accent-[#15803d]"
            aria-label="Girar el modelo 3D"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 border-t border-[rgba(0,0,0,0.07)] bg-white p-6 lg:border-l lg:border-t-0">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#15803d]">Toca una zona</span>
        <div className="flex flex-wrap gap-2">
          {ZONES.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setSel(z.id)}
              aria-pressed={z.id === sel}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12px] font-semibold transition-colors",
                z.id === sel ? "border-[#111] bg-[#111] text-white" : "border-[rgba(0,0,0,0.12)] bg-white text-[#555] hover:border-[#111]",
              )}
            >
              {z.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2" aria-live="polite">
          <h3 className="saas-h5 text-[#333]">{current.name}</h3>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f5f6f7] px-3 py-1 text-[12px] font-semibold text-[#333]">
            <i className={cn("size-2 rounded-full", current.status === "ok" ? "bg-[#4de961]" : "bg-[#f0b323]")} />
            {current.statusText}
          </span>
          <p className="text-[14px] leading-7 text-[#666]">{current.detail}</p>
        </div>
        <p className="mt-auto text-[12px] leading-5 text-[#787f84]">Maqueta de referencia: una empresa de ejemplo, no un cliente real.</p>
      </div>
    </div>
  );
}
