# fidelmercadotech.com

Sitio web corporativo de **Fidel Mercado Tech** — empresa de desarrollo de
software empresarial, automatización y soluciones con inteligencia artificial.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (Radix)
- **Framer Motion** (entrada del hero) + reveals propios por IntersectionObserver
- **Lucide React** (iconografía)
- **React Hook Form** + **Zod** (formulario de contacto)
- **reCAPTCHA v3** (anti-spam del formulario)
- **Playwright** (E2E)

Design System: `../fidelmercadotech/fidel-mercado-tech-brand-guide.md`
(violeta `#7C3AED`, fucsia `#C026D3`, rosa `#EC4899`, violeta noche `#2E1065`, Poppins + Inter).

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar claves
npm run dev                  # http://localhost:3000
```

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test:e2e` | Playwright (desktop + mobile) |
| `node e2e/screenshots.mjs` | Captura screenshots a `docs/screenshots/` (requiere `npm run start` en :3100) |

## Estructura

```
src/
  app/                 rutas (App Router) + sitemap/robots/manifest/opengraph
    api/contact/        route handler del formulario (reCAPTCHA + webhook)
  components/
    marketing/          header, footer, cards, formulario, placeholders
    sections/           hero, feature-row, pricing, faq, process-funnel
    ui/                 shadcn/ui
  content/             solutions.ts · services.ts · pricing.ts · faq.ts · site.ts
  lib/                 utils, contact-schema, recaptcha
docs/
  IMAGE_REQUIRED.md   imágenes pendientes de generar
  screenshots/        capturas desktop + mobile
```

## Contenido

El catálogo de soluciones (`src/content/solutions.ts`) está redactado a partir
de la documentación real de cada proyecto hermano
(`docs/development-status.md`). No añadir funcionalidades que el producto
subyacente no tenga. Prueba social (`social-proof.tsx`) va **sin datos
inventados**: se rellena cuando haya referencias verificables.

## Variables de entorno

Ver `.env.example`. El formulario de contacto:

- verifica reCAPTCHA v3 en `RECAPTCHA_SECRET_KEY` (si no está, no verifica — solo local);
- reenvía el lead a `CONTACT_WEBHOOK_URL` (p. ej. n8n) si está definido; si no, lo registra en logs.
