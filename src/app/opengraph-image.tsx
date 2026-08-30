import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #071526 0%, #0b1f3a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "linear-gradient(135deg,#0066FF,#00D9FF)" }} />
          <div style={{ fontSize: 30, fontWeight: 700 }}>Fidel Mercado Tech</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, maxWidth: 1000 }}>
            Software, automatización e IA para hacer crecer tu empresa
          </div>
          <div style={{ fontSize: 28, color: "#aab7c8", maxWidth: 900 }}>
            CRM · Inventario · RRHH · FidelOS · Agentes de WhatsApp · Desarrollo a medida
          </div>
        </div>
      </div>
    ),
    size,
  );
}
