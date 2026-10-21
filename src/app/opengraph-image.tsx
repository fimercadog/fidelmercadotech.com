export const dynamic = "force-static";
import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { SITE } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.tagline}`;

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/brand/logo-fmt.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: solo logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={412} height={72} alt="Fidel Mercado Tech" />

        {/* Tagline principal */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.1, color: "#0f1012", maxWidth: 1040 }}>
            {SITE.tagline}
          </div>
          <div style={{ fontSize: 24, color: "#4b5563", maxWidth: 860, lineHeight: 1.5 }}>
            ERP · Inventarios · Automatización · IA — acompañamiento directo antes y después de la entrega.
          </div>
        </div>

        {/* Footer: dominio en pill verde */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 32px",
              background: "#15803d",
              borderRadius: 50,
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            fidelmercadotech.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
