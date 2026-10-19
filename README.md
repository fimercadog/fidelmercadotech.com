# fidelmercadotech.com

Sitio web corporativo de **Fidel Mercado Tech** — empresa de desarrollo de
software empresarial, automatización y soluciones con inteligencia artificial.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** (Radix)
- **Framer Motion** (entrada del hero) + reveals propios por IntersectionObserver
- **Lucide React** (iconografía)
- **React Hook Form** + **Zod** (formulario de contacto)
- **n8n** (recibe los contactos del formulario: correo + hoja de Google)
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
subyacente no tenga. El sitio **no muestra testimonios ni cifras
que no se puedan verificar**.

## Variables de entorno

Ver `.env.example`. El formulario de contacto:

- envía cada contacto a un webhook de n8n: `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` (el sitio es estático, la variable se incrusta al compilar);
- si falta en producción, el formulario termina en WhatsApp con el mensaje ya redactado y no guarda nada en hoja ni correo;
- guía de puesta en marcha: `docs/n8n-formulario-contacto.md`.
