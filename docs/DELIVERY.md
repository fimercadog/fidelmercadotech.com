# Entrega — Sitio web corporativo Fidel Mercado Tech

Fecha: 2026-08-30 · Rama: `main`

## 1. Rutas creadas

| Ruta | Tipo | Descripción |
|------|------|-------------|
| `/` | Static | Home: hero, franja de capacidades, grid de 6 soluciones, 3 filas de producto destacado, servicios, embudo visitante→oportunidad, prueba social, CTA |
| `/soluciones` | Static | Índice de soluciones (6 cards) |
| `/soluciones/crm-inmobiliario` | SSG | Case study: problema, solución, funcionalidades, demo, beneficios, stack, formulario |
| `/soluciones/rrhh` | SSG | ídem |
| `/soluciones/crm-inventario` | SSG | ídem |
| `/soluciones/veterinaria` | SSG | ídem (marcada "en construcción") |
| `/soluciones/fidelos` | SSG | ídem (producto propio, captura foto/voz + IA) |
| `/soluciones/agentes-whatsapp` | SSG | ídem |
| `/servicios` | Static | 9 servicios + CTA a precios |
| `/precios` | Static | 4 planes (Express, Profesional*, Premium, Web+Sistema) + FAQ (con JSON-LD `FAQPage`) |
| `/contacto` | Dynamic | Canales + formulario (lee `?motivo=` y `?interes=`) |
| `/privacidad` | Static | Política de tratamiento de datos (Ley 1581) |
| `/terminos` | Static | Términos y condiciones |
| `/api/contact` | Route Handler | Valida (Zod) + verifica reCAPTCHA v3 + reenvía a webhook |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/icon.svg` | Metadata | SEO / PWA |
| `/no-existe` (cualquier 404) | Static | `not-found.tsx` con CTAs |

\* Plan destacado.

## 2. Screenshots

`docs/screenshots/` — desktop (1440px) y mobile (Pixel 7) de: home, soluciones,
solucion-fidelos, solucion-crm-inventario, servicios, precios, contacto, privacidad.
Regenerar: `npm run start -- --port 3100` + `node e2e/screenshots.mjs`.

## 3. Componentes

**Creados**
- `marketing/`: `site-header`, `site-footer`, `logo` (+ `LogoMark`), `floating-whatsapp`,
  `container`, `section-heading`, `reveal`, `image-placeholder`, `device-frame`
  (`BrowserFrame`, `PhoneFrame`), `cta-band`, `capability-strip`, `social-proof`,
  `solution-card`, `contact-form`, `legal-page`
- `sections/`: `hero`, `hero-intro` (Framer Motion), `feature-row`, `process-funnel`,
  `pricing`, `faq`
- `icon.tsx` (mapa lucide), `theme-provider.tsx`

**Reutilizados** (copiados de `crm inmobiliaria/frontend`, mismas versiones)
- `components/ui/`: `button`, `card`, `badge`, `dialog`, `sheet`, `tabs`, `input`,
  `textarea`, `label`, `field`, `separator`, `skeleton`, `sonner`, `checkbox`
- `components/ui/accordion.tsx` — añadido siguiendo el mismo patrón shadcn
- `lib/utils.ts` (`cn`)

## 4. Imágenes reales utilizadas

Ninguna todavía: no existían capturas reales de producto en el repositorio.
Todos los slots renderizan `ImagePlaceholder` identificado. Iconografía: lucide-react.
Logo y favicon: SVG propios con el gradiente de marca.

## 5. Imágenes por generar

Ver [`IMAGE_REQUIRED.md`](./IMAGE_REQUIRED.md) — 7 slots de hero + 18 slots de
galería (3 × 6 soluciones) + OG opcional.

## 6. Tests ejecutados

- `npm run lint` → **OK** (0 warnings)
- `npm run typecheck` (`tsc --noEmit`, vía `next build`) → **OK**
- `npm run build` → **OK** (21 rutas, sin errores)
- `npm run test:e2e` (Playwright) → **12/12** (desktop + mobile): home, journey
  home→soluciones→detalle→formulario, validación de contacto, precios + FAQ,
  navegación + páginas legales, robots + sitemap
- Barrido de consola en 15 rutas → **sin errores** (el único 404 es la propia
  página `/no-existe`, comportamiento esperado)

## 7. Build

`next build` con Turbopack, Next 16.3.2 — compila en ~11 s, 21 rutas generadas,
TypeScript sin errores.

## 8. Bugs encontrados y corregidos

1. **`shadcn/tailwind.css` no existe** en el paquete `shadcn` v4.19 instalado
   (el `globals.css` de `crm inmobiliaria` lo importa). → `globals.css` reescrito
   autocontenido con los tokens de marca; no se importa ese archivo.
2. **Contenido oculto bajo el pliegue**: `Reveal` con `initial opacity:0` de Framer
   Motion dejaba todo el contenido below-the-fold invisible (no se disparaba
   `whileInView` en captura full-page ni sin scroll). → `Reveal` reescrito como
   mejora progresiva: visible por defecto (SSR / sin JS), solo oculta y anima lo
   que está bajo el pliegue al montar. Framer Motion queda en `hero-intro` (entrada
   al cargar, above-the-fold).
3. **Checkbox de consentimiento con `register` sobre Radix Checkbox** (es un
   `<button>`, no captura el valor). → checkbox nativo estilado.
4. **Playwright: worker crashes en Windows** con `fullyParallel` + 2 proyectos.
   → `workers: 1`, `fullyParallel: false`, `retries: 1`.
5. **Aserciones de test frágiles** (heading que era eyebrow; nombre duplicado entre
   card y trigger de FAQ). → asertos ajustados (`exact`, texto real del `<h2>`).

## 9. Decisiones automáticas tomadas

1. **Ubicación**: repo propio en `fidelmercadotech.com/` (como los proyectos
   hermanos, cada uno con su `.git`), no dentro del vault claude-obsidian.
2. **Scaffold**: se replicaron las convenciones de `crm inmobiliaria/frontend`
   (stack canónico) y se copiaron sus componentes `ui/*` probados, en vez de
   correr `npx shadcn` (evita dependencia de registry/red).
3. **Sin modo oscuro global**: el sitio es light-first (estética "Software
   Marketing"); las bandas oscuras (hero, CTA, footer) usan la clase local
   `.fmt-dark`. Sin `next-themes` provider para no invertir la página por
   `prefers-color-scheme`.
4. **Contacto sin backend Laravel** (no está en el stack): Route Handler de Next
   que verifica reCAPTCHA v3 y reenvía el lead a `CONTACT_WEBHOOK_URL` (n8n); si
   no hay webhook, lo registra en logs. Honeypot + consentimiento obligatorio.
5. **reCAPTCHA**: clave de sitio en `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`; **clave
   secreta solo en `.env.local` (gitignored)**, placeholder en `.env.example`.
6. **Precios**: página dedicada `/precios` con la estructura del layout de
   referencia "Software Marketing Pricing" (cards + plan destacado + FAQ). Añadida
   al nav principal, footer y sitemap. Se agregó JSON-LD `FAQPage`.
7. **Prueba social**: componente construido pero **sin clientes, cifras ni
   testimonios inventados** — estado vacío explicativo hasta tener datos reales.
8. **Veterinaria y FidelOS**: marcadas "En construcción". Veterinaria descrita como
   extensión de la base CRM+Inventario. FidelOS lista las capacidades de captura
   foto/voz + revisión IA según indicación del propietario del producto.
9. **WhatsApp**: número `573027029498` (el usado en los proyectos hermanos) como
   valor por defecto, configurable por `NEXT_PUBLIC_WHATSAPP_NUMBER`.
10. **Idioma** `es`, **dominio** `https://fidelmercadotech.com`.

## 10. Commits

Ver `git log` del repo `fidelmercadotech.com/` (creado en esta entrega).

## 11. Rama

`main`.

## 12. git push

Pendiente de remoto: ver nota en el informe de la conversación.
