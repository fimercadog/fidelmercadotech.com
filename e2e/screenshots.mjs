import { chromium, devices } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://localhost:3100";
const OUT = "docs/screenshots";
const PAGES = [
  ["home", "/"],
  ["soluciones", "/soluciones"],
  ["solucion-fidelos", "/soluciones/fidelos"],
  ["solucion-crm-inventario", "/soluciones/crm-inventario"],
  ["servicios", "/servicios"],
  ["precios", "/precios"],
  ["contacto", "/contacto"],
  ["privacidad", "/privacidad"],
];

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();

for (const [profile, viewport] of [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", devices["Pixel 7"].viewport],
]) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await context.newPage();
  for (const [name, path] of PAGES) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    // Scroll through so IntersectionObserver-based reveals trigger.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/${name}-${profile}.png`, fullPage: true });
    console.log(`✓ ${name}-${profile}.png`);
  }
  await context.close();
}

await browser.close();
