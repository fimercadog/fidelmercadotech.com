# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # static export → out/
npm run lint         # eslint
npm run typecheck    # tsc --noEmit — run before any deploy
npm run test:e2e     # playwright
```

**Deploy:** `npm run build` → SCP `out/` to Hostinger via SSH (user `u910322706`, IP `82.29.157.42`, port `65002`, path `/home/u910322706/domains/fidelmercadotech.com/public_html`). `output: "export"` in `next.config.ts` — fully static, no server-side Next.js. Contact form hits `public/api/contact.php` served by Hostinger.

## Architecture

**Stack:** Next.js 16 App Router (static export) · React 19 · Tailwind CSS v4 · shadcn/ui · Framer Motion · React Hook Form + Zod.

**Content layer** (`src/content/`) — all copy lives here as TypeScript; components never hardcode text or contact info:
- `site.ts` — branding, phone, email, nav links. Source of truth for `SITE.*` constants.
- `solutions.ts` — solution catalogue (slug, features, status). Drives `/soluciones` and `/soluciones/[slug]`.
- `services.ts` — service catalogue. Drives `/servicios` and `/servicios/[slug]`.
- `cases.ts` — case studies for `/casos` and `/casos/[slug]`.
- `blog.ts`, `faq.ts`, `pricing.ts`, `story.ts` — supporting copy.

**Component layers:**
- `src/components/ui/` — shadcn/ui primitives.
- `src/components/marketing/` — layout shell: `SiteHeader`, `SiteFooter`, `FloatingWhatsApp`, `PageTransition`, section helpers (`SectionHeading`, `CtaBand`, `Container`, `Reveal`).
- `src/components/sections/` — full-page section blocks (`Hero`, `ProductFeatures`, `Pricing`, `FAQ`, `FeatureRow`, etc.).
- `src/components/icon.tsx` — resolves `lucide-react` icon name strings used in content files.

**Design system** (`src/app/globals.css`):
- Brand green: `--brand: #00e676`. Accent: `--brand-pink: #d2f800`. Background: near-black `#080A09`.
- Fonts: Poppins (`--font-heading`) + Inter (`--font-sans`).
- `.fmt-dark` on section wrappers is a structural marker only — it no longer redefines tokens.
- Sections **must alternate backgrounds** (white ↔ `--muted`/cream-gray). Never two consecutive sections with the same background.

**Static export constraints:** no `next/headers`, no server actions, no API routes in Next.js. Images have `unoptimized: true`. Brand images in `public/brand/`, Divi SaaS pack assets in `public/assets/saas-product/`.

## Graphify — actualizar antes de desarrollar

Antes de cualquier tarea que implique analizar, modificar o crear código: ejecutar `graphify update .` (en terminal; re-extrae el código sin LLM, ~5 s). Para documentos o imágenes nuevas, usar `/graphify --update` desde el asistente. Solo reutilizar el grafo existente si Graphify confirma explícitamente que no hubo cambios. No esperar que el usuario lo solicite.

## Layouts Elegant Themes — referencia visual autorizada

Fidel tiene licencia **Themes & Plugins Lifetime** de Elegant Themes. Los layouts del paquete **Divi SaaS Product Layout Pack** son la **referencia visual maestra** de este proyecto.

**Objetivo:** réplica visual fiel — no adaptación ni reinterpretación.

Reproducir exactamente:
- Estructura, composición, header, navegación, hero
- Tipografías, tamaños, espaciados, columnas
- Tarjetas, botones, formas, fondos, sombras, colores
- Posición de imágenes, CTA, footer
- Comportamiento responsive

**Colocar la información actual de FidelOS dentro de la estructura visual de los layouts.** No cambiar información, funcionalidades, ni backend salvo que sea estrictamente necesario.

Las páginas `/soluciones`, `/servicios` y `/casos` deben adoptar el mismo sistema visual.

**No hacer commit ni push sin aprobación visual previa de Fidel.**
