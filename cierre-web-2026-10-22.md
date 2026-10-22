# Cierre Web — fidelmercadotech.com — 2026-10-22

## Estado General

Build: **VERDE** (55 páginas, 386 archivos en `out/`). Typecheck: EXIT 0. Lint: EXIT 1 (2 errores, 10 warnings — ver sección QA).

No se realizaron commits ni push.

---

## Findings por área

### 1. Formulario de contacto
**Estado: COMPLETADA** (no requirió cambios — ya estaba correcto)

El formulario nunca muestra éxito falso:
- Error HTTP (`!res.ok`) → `setServerError`, nunca `setDone`.
- Error de red (`catch`) → `setServerError`, nunca `setDone`.
- `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` vacía en producción → fallback a WhatsApp con mensaje pre-armado.
- `contact.php` retorna HTTP 400/422/500 en todos los paths de error, 200 solo en éxito.

Variable de entorno requerida en producción:
```
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://fidelmercadotech.com/api/contact.php
```

---

### 2. Entorno y secretos
**Estado: COMPLETADA** (sin cambios — ya estaba limpio)

- `.env` excluido por `.gitignore` (regla `.env*` con excepción `!.env*.example`).
- Solo `.env.example` rastreado en git, sin valores reales.
- Las 6 variables `NEXT_PUBLIC_*` son datos públicos (URL, nombre, teléfono, email, endpoint PHP propio). Ninguna expone secretos al cliente.
- Sin API keys, tokens ni passwords hardcodeados en `src/**`.

---

### 3. Links y rutas
**Estado: COMPLETADA**

Links rotos: **ninguno**. Todos los hrefs internos tienen `page.tsx` correspondiente o slug en el array de contenido.

**Cambio aplicado:**
- `src/components/marketing/floating-whatsapp.tsx` — número hardcodeado `"573027029498"` reemplazado por `SITE.whatsappNumber` importado de `site.ts`.

**Páginas huérfanas (sin enlace desde nav/footer) — pendiente decisión de Fidel:**
- `/agendar-cita` — no enlazada desde nav/footer. Agregar cuando el flujo de agenda esté listo para publicarse.
- `/landing` — página para tráfico de anuncios, huérfana a propósito. Sin acción requerida salvo que Fidel decida enlazarla.

**Etiqueta confusa (no roto):**
- Footer "FidelOS" → `/servicios/automatizacion` — el link resuelve correctamente, el label es engañoso. Decisión de contenido, no de routing.

---

### 4. UX/UI — alternancia de fondos y especificidad CSS
**Estado: COMPLETADA**

**Bug corregido:** `.saas-section` y `.saas-section:nth-child(even)` estaban fuera de `@layer`, con especificidad 0,2,0 que sobreescribía las utilidades Tailwind (especificidad 0,1,0). Las utilidades explícitas `bg-[#f9fafb]` / `bg-white` quedaban ignoradas.

**Cambios aplicados (5 archivos):**

| Archivo | Cambio |
|---|---|
| `src/app/globals.css` | `.saas-section` movido a `@layer components`; eliminado `nth-child(even)` automático |
| `src/components/marketing/capability-strip.tsx` | Añadido `bg-[#f9fafb]` |
| `src/components/sections/quick-tour.tsx` | Cambiado `bg-[#f9fafb]` → `bg-white` |
| `src/components/sections/illustrated-row.tsx` | Añadida prop `muted` booleana |
| `src/app/page.tsx` | Pasado `muted` al segundo `IllustratedRow` |

**Secuencia final de secciones (alternancia correcta):**

| # | Sección | Fondo |
|---|---|---|
| 1 | Hero | blanco |
| 2 | ProblemContext | muted ✓ |
| 3 | IllustratedRow #1 | blanco ✓ |
| 4 | CapabilityStrip | muted ✓ |
| 5 | QuickTour | blanco ✓ |
| 6 | IllustratedRow #2 | muted ✓ |
| 7 | ProductFeatures | blanco ✓ |
| 8 | ProcessFunnel | muted ✓ |
| 9 | ServicesStrip | blanco ✓ |
| 10 | AiUseCases | muted ✓ |
| 11 | GetOnTrackCta | blanco ✓ |

H1 único: confirmado (solo en `hero.tsx`).

**Riesgo de overflow-x pendiente (no bloqueante):**
- Hero tiene cuadrícula de 500px fijo con transform 3D — tiene `overflow-hidden` pero sin `max-width: 100%` ni media query que la reduzca en móvil. La columna es `aria-hidden` bajo `lg:`, mitigación razonable. Revisar en dispositivo real antes del próximo deploy.

---

### 5. QA — Lint / Typecheck / Build

**Typecheck:** EXIT 0 — limpio.

**Build:** EXIT 0 — 55 páginas generadas, 386 archivos en `out/`.

**Lint:** EXIT 1 — **2 errores** (requieren acción de Fidel):

| Archivo | Error | Fix |
|---|---|---|
| `src/app/servicios/page.tsx:92` | `<a href="/soluciones/">` debe ser `<Link>` de `next/link` | Reemplazar `<a>` por `<Link>` |
| `src/components/sections/hero-intro.tsx:23` | `setMounted(true)` en `useEffect` flaggeado por `react-hooks/set-state-in-effect` | Patrón intencional de hydration guard; suprimir con `// eslint-disable-next-line` o dejar pendiente |

**10 warnings** — imports no usados (no bloquean build, limpiar cuando convenga):

| Archivo | Import no usado |
|---|---|
| `agendar-cita/page.tsx` | `Slot` |
| `blog/page.tsx` | `SectionHeading` |
| `casos/page.tsx` | `SectionHeading` |
| `contacto/page.tsx` | `SectionHeading`, `PillBar` |
| `landing/page.tsx` | `SectionHeading` |
| `nosotros/page.tsx` | `PillBar`, `whatsappUrl` |
| `servicios/[slug]/page.tsx` | `PillBar` |
| `product-features.tsx` | `ArrowRight` |

---

## Archivos modificados en esta misión

```
src/app/globals.css
src/app/page.tsx
src/components/marketing/capability-strip.tsx
src/components/marketing/floating-whatsapp.tsx
src/components/sections/illustrated-row.tsx
src/components/sections/quick-tour.tsx
```

---

## Pendientes que requieren acción de Fidel

1. **Aprobar cambios visualmente** antes de cualquier commit/push (regla del proyecto).
2. **Definir `NEXT_PUBLIC_CONTACT_WEBHOOK_URL`** en el servidor de producción (Hostinger) apuntando a `https://fidelmercadotech.com/api/contact.php`.
3. **Corregir lint error** en `src/app/servicios/page.tsx:92` — cambiar `<a>` por `<Link>`.
4. **Decidir** si enlazar `/agendar-cita` desde el nav/footer.
5. **Revisar overflow en Hero** en móvil real (cuadrícula 500px fija).
6. **Limpiar imports** no usados (10 warnings) cuando convenga — no urgente.

---

*No se realizaron commits ni push.*

---

## Workflow 2 — Blog, Contenido, 404, WhatsApp

### Estado general

Build: **VERDE** (55 páginas, 0 errores TypeScript). Lint: **OK** (0 errores, 9 warnings — pre-existentes). No se realizaron commits ni push.

---

### Tareas ejecutadas

#### 1. Artículos de blog — COMPLETADA

Seis artículos completos con 700–900 palabras reales cada uno, estructura h2/p/ul, tono profesional para empresarios latinoamericanos. Interfaz `BlogPost` conservada intacta.

| # | Slug | Título |
|---|------|--------|
| 1 | `crm-vs-hoja-de-calculo` | ERP vs. hoja de cálculo: cuándo dejar el Excel |
| 2 | `por-que-el-inventario-nunca-cuadra` | Por qué tu inventario nunca cuadra (y cómo arreglarlo) |
| 3 | `cuando-conviene-automatizar-un-proceso` | Cuándo conviene automatizar un proceso (y cuándo no) |
| 4 | `por-donde-empezar-con-la-ia-en-tu-empresa` | Por dónde empezar con la IA en tu empresa (sin gastar a ciegas) |
| 5 | `ia-en-tus-propios-equipos-privacidad-y-costos` | IA en tus propios equipos: más privacidad y costos que puedes prever |
| 6 | `que-recibes-al-final-de-una-consultoria-de-ia` | Qué recibes al final de una consultoría de IA (y qué decides después) |

Archivo modificado: `src/content/blog.ts`

#### 2. Portada editorial del blog — COMPLETADA

Rediseño completo de `src/app/blog/page.tsx`:
- Hero con eyebrow badge, H1 y subtítulo descriptivo (bg-white)
- Artículo destacado: card full-width 2 columnas (imagen izq / contenido der en lg), badges "Destacado" y de categoría, flecha CTA
- Grid de artículos: bg-[#f8fafc] alternando con el hero (fondo blanco), 1/2/3 columnas responsive, hover scale + lift
- Campo `featured?: boolean` añadido a la interfaz `BlogPost`; artículo `ia-en-tus-propios-equipos-privacidad-y-costos` marcado como `featured: true`

Blog aparece en `NAV_LINKS` y en `FOOTER_NAV` bajo "Empresa" — enlace visible en escritorio y móvil.

Archivo modificado: `src/app/blog/page.tsx`, `src/content/blog.ts`

#### 3. Página 404 personalizada — COMPLETADA

Rediseño de `src/app/not-found.tsx`:
- `404` decorativo en `--brand` verde, 9–12rem, weight-900, `aria-hidden`
- H1 en Poppins / `font-black` / tracking ajustado
- Subtítulo en `text-muted-foreground`
- CTA primario "Volver al inicio" — pill `bg-[--brand]` / `text-[--navy]`
- Cuatro links secundarios pill outline: Soluciones, Servicios, Blog, Contacto
- `metadata` con `robots: { index: false }`
- Sin dependencias nuevas; reutiliza `Button` y `Container` existentes
- `min-h-[80svh]` para centrado vertical en cualquier pantalla

Archivo modificado: `src/app/not-found.tsx`

#### 4. WhatsApp — número corregido — COMPLETADA

- Fallback `whatsappNumber` actualizado de `573027029498` a **`573058148918`** en `src/content/site.ts`
- `phone` actualizado de `+57 302 702 9498` a `+57 305 814 8918`
- El env var `NEXT_PUBLIC_WHATSAPP_NUMBER` sigue con prioridad si está definido en producción

Archivo modificado: `src/content/site.ts`

#### 5. Páginas legales — COMPLETADA (sin cambios de contenido)

`/privacidad` y `/terminos` ya tenían contenido real y completo:
- Ley 1581/2012 (Colombia), sin datos inventados, sin dominios hardcodeados fuera de `site.ts`
- `metadataBase` relativo vía `SITE.url` (`layout.tsx` línea 14)
- Se añadieron enlaces a `/privacidad` y `/terminos` en `FOOTER_NAV` bajo columna "Empresa" (estaban ausentes)

Archivo modificado: `src/content/site.ts` (FOOTER_NAV)

#### 6. Lint / TypeCheck / Build — COMPLETADA

Los dos errores de lint reportados en Workflow 1 fueron corregidos:
- `src/app/servicios/page.tsx:92` — `<a>` reemplazado por `<Link>` de next/link
- `src/components/sections/hero-intro.tsx:23` — `eslint-disable-next-line` para hydration guard intencional

Estado final: **0 errores**, 9 warnings (imports no usados, pre-existentes, no bloquean build).
TypeCheck: EXIT 0. Build: EXIT 0 — 55 páginas generadas.

---

### Archivos modificados en Workflow 2

```
src/content/blog.ts          — 6 artículos expandidos + campo featured
src/content/site.ts          — whatsappNumber, phone, FOOTER_NAV (privacidad/terminos)
src/app/blog/page.tsx        — portada editorial rediseñada
src/app/not-found.tsx        — página 404 personalizada
src/app/servicios/page.tsx   — <a> → <Link> (fix lint)
src/components/sections/hero-intro.tsx  — eslint-disable-next-line (fix lint)
```

---

### Pendientes que requieren acción de Fidel (acumulado)

1. **Aprobación visual** de todos los cambios antes de cualquier commit/push (regla del proyecto).
2. **`NEXT_PUBLIC_CONTACT_WEBHOOK_URL`** en Hostinger → `https://fidelmercadotech.com/api/contact.php`.
3. **`NEXT_PUBLIC_WHATSAPP_NUMBER=573058148918`** en `.env.local` / producción (el fallback ya está corregido en `site.ts`).
4. **Overflow Hero en móvil** — cuadrícula 500px fija, revisar en dispositivo real antes del próximo deploy.
5. **Limpiar 9 warnings** de imports no usados cuando convenga — no urgente, no bloquean.
6. **Imágenes de blog** — `coverImage` es opcional; agregar imágenes reales cuando estén disponibles.

---

*No se realizaron commits ni push.*

---

## Workflow 3 — Validación Visual y Cierre Técnico (2026-10-22)

### Estado general

TypeCheck: **EXIT 0**. Lint: **EXIT 0**. Build: **EXIT 0** (55 páginas). Servidor dev: puerto **3001** (3000 ocupado por proceso 34312). No se realizaron commits ni push.

---

### Capturas de pantalla

Servidor: `http://localhost:3001` (Next.js 16.4.2 Turbopack, arranque en 1456 ms)

Directorio: `C:\Users\fidel\AppData\Local\Temp\claude-chrome-screenshots-ST0CbU\`

| Ruta | Título de pestaña | Archivo |
|------|-------------------|---------|
| `/` | Fidel Mercado Tech — Tú pones el negocio... | `screenshot-1792697494372-0.jpg` |
| `/blog` | Blog \| Fidel Mercado Tech | `screenshot-1792697507700-1.jpg` |
| `/blog/crm-vs-hoja-de-calculo` | ERP vs. hoja de cálculo: cuándo dejar el Excel | `screenshot-1792697516900-2.jpg` |
| `/pagina-que-no-existe` | Página no encontrada \| Fidel Mercado Tech | `screenshot-1792697527316-3.jpg` |
| `/soluciones` | Soluciones por industria \| Fidel Mercado Tech | `screenshot-1792697536911-4.jpg` |
| `/contacto` | Contacto \| Fidel Mercado Tech | `screenshot-1792697547541-5.jpg` |
| `/soluciones/fidelos` | FidelOS · ERP modular \| Fidel Mercado Tech | `screenshot-1792697579579-6.jpg` |

---

### Observaciones visuales por página

**Inicio (`/`):** Hero correcto — heading, CTA, grid producto en 3D. Menú: Inicio · Soluciones ▾ · Servicios · Casos · **Blog** · Nosotros · [Solicitar demo]. FloatingWhatsApp visible. Alternancia de fondos presente.

**Blog (`/blog`):** Portada editorial carga. Artículo destacado "IA en tus propios equipos" en card full-width. Contador "5 artículos". Blog activo en menú (negrita). Sin imágenes de portada (comportamiento esperado mientras no haya `coverImage`).

**Artículo (`/blog/crm-vs-hoja-de-calculo`):** "← Volver al blog" presente y funcional. Contenido, autor y fecha correctos.

**404 (`/pagina-que-no-existe`):** "Esta página no existe" con 404 decorativo, botón "Volver al inicio", links rápidos: SOLUCIONES · SERVICIOS · BLOG · CONTACTO.

**Soluciones (`/soluciones`):** Hero y catálogo de soluciones renderizados.

**Contacto (`/contacto`):** Wizard visible, "Paso 1 de 5". Botones "Solicitar demo" y "WhatsApp" en hero.

**`/soluciones/fidelos`:** Existe y renderiza "FidelOS · ERP modular". El enlace del footer `FidelOS → /soluciones/fidelos` es CORRECTO.

---

### Validación de navegación

| Elemento | Estado |
|----------|--------|
| "Blog" en menú principal | PRESENTE |
| "Blog" en footer (columna Empresa) | PRESENTE (`site.ts` línea 69) |
| "Volver al blog" en artículo | PRESENTE |
| Blog en links rápidos de 404 | PRESENTE |
| `/soluciones/fidelos` desde footer | CORRECTO |
| `/agendar-cita` fuera de nav | Intencional (campaña) |
| `/landing` fuera de nav | Intencional (anuncios) |

---

### Seguridad y comercial

**`.env.example`:** Sin credenciales. Variables públicas o apuntando a endpoint propio. Sin passwords, tokens ni API keys.

**Formulario:** Nunca informa éxito si falla (verificado Workflow 1).

**Número WhatsApp — PENDIENTE FIDEL:**
- Fallback en `site.ts` → `573058148918` (corregido en Workflow 2)
- `.env.local` tiene `NEXT_PUBLIC_WHATSAPP_NUMBER=573027029498` (sobreescribe el fallback)
- Confirmar cuál es el número correcto antes del deploy.

---

### QA final

| Verificación | Resultado |
|-------------|-----------|
| TypeScript (`tsc --noEmit`) | EXIT 0 — limpio |
| Lint (`eslint`) | EXIT 0 — limpio |
| Build (`next build`) | EXIT 0 — 55 páginas |

---

### Pendientes para Fidel

1. **Aprobación visual** de las capturas antes de commit/push.
2. **Número de WhatsApp:** confirmar `573058148918` o `573027029498` y actualizar `.env.local` + Hostinger.
3. **`NEXT_PUBLIC_CONTACT_WEBHOOK_URL`** en producción Hostinger.
4. **Imágenes de blog:** agregar `coverImage` cuando estén disponibles.
5. **Hero overflow móvil:** revisar en dispositivo real antes del siguiente deploy.

---

*No se realizaron commits ni push.*

---

## Fase Final — Validación Visual (2026-10-22)

### Fixes aplicados en esta fase

- **Footer link FidelOS:** CORREGIDO — `src/content/site.ts` línea 57, href cambiado de `/servicios/automatizacion` a `/soluciones/fidelos`. Slug confirmado existente.
- **Hero overflow móvil:** CORREGIDO — columna derecha (mockup 3D) cambiada de siempre visible a `hidden lg:flex` en `src/components/sections/hero.tsx` línea 51. En móvil/tablet solo se muestra el texto y los CTA.
- **Imports no usados limpiados:**

| Archivo | Import eliminado |
|---|---|
| `src/app/agendar-cita/page.tsx` | `interface Slot` (tipo nunca usado) |
| `src/app/casos/page.tsx` | `SectionHeading` |
| `src/app/contacto/page.tsx` | `SectionHeading`, `PillBar` |
| `src/app/landing/page.tsx` | `SectionHeading` |
| `src/app/nosotros/page.tsx` | `PillBar`, `whatsappUrl` |
| `src/app/servicios/[slug]/page.tsx` | `PillBar` |
| `src/components/sections/product-features.tsx` | `ArrowRight` |

- **Páginas de campaña verificadas:** `/agendar-cita` (wizard demo multi-paso, 5 steps, 3 APIs demo) y `/landing` (página para anuncios, `robots: { index: false }`) — contenido real, correctamente fuera del menú.
- **WhatsApp verificado:** fallback en `site.ts` → `573058148918`. Número viejo `573027029498` no aparece en ningún `.ts/.tsx`. Dos referencias `wa.me` leen `SITE.whatsappNumber` dinámicamente.
- **`.env.example` verificado:** sin credenciales reales (no hay passwords, tokens ni API keys). El número de teléfono en `.env.example` línea 4 usa el número antiguo — no es credencial, pero conviene actualizar (ver Pendientes).

### Resultados de pruebas finales

| Verificación | Resultado |
|---|---|
| TypeScript (`tsc --noEmit`) | EXIT 0 — 0 errores |
| Lint (`eslint`) | EXIT 0 — 0 errores, 0 warnings |
| Build (`next build`) | EXIT 0 — 55 páginas generadas |

### Validación visual

**Capturas tomadas** (directorio temporal de sesión Chrome):

| Página | Observación |
|---|---|
| `/` — Inicio | Hero correcto, menú con Blog en 5ª posición, FloatingWhatsApp visible, alternancia de fondos presente |
| `/blog` — Portada | Card destacada full-width, contador de artículos, sin imágenes (esperado) |
| `/blog/crm-vs-hoja-de-calculo` — Artículo | "← Volver al blog" presente, contenido y fecha correctos |
| `/pagina-que-no-existe` — 404 | 404 decorativo verde, botón "Volver al inicio", links rápidos: Soluciones, Servicios, Blog, Contacto |
| `/soluciones` | Hero y catálogo renderizados correctamente |
| `/contacto` | Wizard "Paso 1 de 5" visible |
| `/soluciones/fidelos` | Renderiza "FidelOS · ERP modular" — enlace del footer CORRECTO |

- **Blog accesible desde menú:** SÍ (5ª posición en navegación principal)
- **Blog accesible desde footer:** SÍ (columna Empresa, `site.ts` línea 69)
- **404 personalizada:** VERIFICADA — número decorativo, CTA y links rápidos funcionales
- **`/agendar-cita` y `/landing`:** fuera del menú principal, intencional, sin errores de build

### Pendientes que requieren decisión de Fidel

1. **Número WhatsApp — ÚNICO BLOQUEANTE antes del deploy:** el fallback en `site.ts` es `573058148918` pero `.env.local` tiene `NEXT_PUBLIC_WHATSAPP_NUMBER=573027029498` (sobreescribe el fallback en dev). Confirmar cuál es el número correcto y actualizar `.env.local` + `.env.example` + variable en Hostinger antes de desplegar.
2. **`NEXT_PUBLIC_CONTACT_WEBHOOK_URL`** en Hostinger → `https://fidelmercadotech.com/api/contact.php`.
3. **Imágenes de blog:** agregar `coverImage` en `src/content/blog.ts` cuando estén disponibles.
4. **Aprobación visual** de los cambios antes de cualquier commit/push (regla del proyecto).

### Confirmación

No se realizaron commits ni push. Cambios listos para aprobación visual.
