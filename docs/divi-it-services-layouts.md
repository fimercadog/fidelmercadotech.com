# Pack Divi "IT Services Home Page" — mapeo de layouts

Pack de Elegant Themes (Divi "Themes & Plugins" Lifetime — licencia activa) con
7 plantillas. Referencia: <https://www.elegantthemes.com/layouts/services/it-services-home-page>

Decisión de estilo (confirmada con Fidel): se reutiliza la **estructura y
composición** de cada plantilla, recoloreada por completo a la paleta violeta
"Software Marketing" ya en producción (`#7C3AED` / `#C026D3` / `#EC4899`,
Poppins + Inter — ver `src/app/globals.css`). No se adopta la paleta azul
nativa del pack ni la guía `fidel-mercado-tech-brand-guide.md` (sin usar).

Tampoco se copian los datos de ejemplo del pack que son inventados
(testimonios con nombres falsos, cifras como "28 años / 2000 clientes"): el
sitio tiene política explícita de no inventar prueba social
(`src/components/marketing/social-proof.tsx`). Donde el layout original usa
ese tipo de contenido, se omite o se reemplaza por contenido real/estructura
vacía en vez de fabricar datos.

## Componentes nuevos construidos a partir del pack

| Componente | Origen visual en el pack | Uso |
|---|---|---|
| `marketing/pill-bar.tsx` | Barra degradada edge-to-edge con botones píldora bajo cada hero | Home, Servicios |
| `marketing/service-grid.tsx` | Grid de servicios con tarjetas de color alternado (naranja/gris/blanco/blanco/navy/naranja → violeta/muted/outline/outline/navy-deep/violeta) | Home, Servicios |
| `marketing/ellipse-banner.tsx` | Banner-blob con degradado y anillo de iconos orbitando ("We Create Fully Connected Systems") | Home, Servicios |

## Mapeo página por página

| Layout del pack | Página del sitio | Estado |
|---|---|---|
| **Home** | `/` (`src/app/page.tsx`) | ✅ Hecho — PillBar bajo hero, ServiceGrid alternado, EllipseBanner |
| **Services** | `/servicios` | ✅ Hecho — PillBar, ServiceGrid, EllipseBanner ("Nuestro enfoque") |
| **Contact** | `/contacto` | ⏳ Pendiente |
| **About** | `/nosotros` | ⏳ Pendiente |
| **IT Services Service Page** | `/servicios/[slug]` | ⏳ Pendiente |
| **IT Services Resources Page** | `/blog` | ⏳ Pendiente |
| **Landing** | Nueva página de conversión (a definir ruta) | ⏳ Pendiente |

Capturas del live demo original (referencia, no se commitean): generadas en
sesión vía agente de navegador contra las 7 URLs `.../live-demo` del pack.
