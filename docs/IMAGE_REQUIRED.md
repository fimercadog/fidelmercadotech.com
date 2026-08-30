# Imágenes pendientes

Cada slot de imagen del sitio se renderiza hoy como un **placeholder identificado**
(componente `ImagePlaceholder`). Para reemplazarlo por la imagen real:

1. Coloca el archivo en `public/media/<id>.<ext>` (webp o png; mp4/webm para video).
2. En el contenido correspondiente (`src/content/solutions.ts` o el propio slot),
   añade `src: "/media/<id>.webp"` al objeto del slot.

Clasificación: **A** captura real · **B** mockup con captura real · **C** ilustración
conceptual · **D** imagen/vídeo comercial · **E** iconografía (ya resuelta con lucide).

| id | Página / sección | Tipo | Aspect ratio | Qué necesitamos |
|----|------------------|:----:|:------------:|-----------------|
| `home-hero-product` | Home · hero | A | 16/10 | Captura real del panel de una solución (ideal: CRM + Inventario o RRHH) — dashboard con métricas, tablas y menú lateral, datos de demo, fondo claro. |
| `crm-inmobiliario-hero` | /soluciones/crm-inmobiliario · hero | A | 16/10 | Captura del CRM Inmobiliario: pipeline de oportunidades o listado de propiedades, con barra lateral. |
| `rrhh-hero` | /soluciones/rrhh · hero | A | 16/10 | Captura del panel de RRHH: dashboard con métricas de empleados / asistencia. |
| `crm-inventario-hero` | /soluciones/crm-inventario · hero | A | 16/10 | Captura del pipeline Kanban o de la vista de movimientos de inventario. |
| `veterinaria-hero` | /soluciones/veterinaria · hero | C | 16/10 | Ilustración o mockup de la ficha de paciente veterinario (propietario + mascota + historial). Sustituir por captura real cuando el módulo exista. |
| `fidelos-hero` | /soluciones/fidelos · hero | B | 16/10 (móvil 9/19) | Mockup de teléfono con la app FidelOS: pantalla de captura por foto/voz + tarjeta de revisión de IA con el producto detectado. |
| `agentes-whatsapp-hero` | /soluciones/agentes-whatsapp · hero | B | 16/10 (móvil 9/19) | Mockup de teléfono con una conversación real (o recreada) de WhatsApp: el agente responde, toma datos y anuncia transferencia a una persona. |
| `<slug>-shot-1` | /soluciones/`<slug>` · Demostración | A | 16/10 | Captura de una pantalla principal (lista / tabla con datos de demo). Un slot por cada una de las 6 soluciones. |
| `<slug>-shot-2` | /soluciones/`<slug>` · Demostración | A | 16/10 | Captura de una vista de detalle o formulario. Un slot por solución. |
| `<slug>-video` | /soluciones/`<slug>` · Demostración | D | 16/10 | Video corto (20–40 s, MP4/WebM) recorriendo el flujo principal. Un slot por solución. |
| `og-image` (opcional) | Open Graph global | D | 1200/630 | Se genera automáticamente en `src/app/opengraph-image.tsx`. Reemplazar solo si se quiere una versión diseñada a mano. |

## Iconografía (Tipo E) — resuelta

Todos los iconos usan **lucide-react** (`src/components/icon.tsx`), acorde a la guía
de marca. No se requieren assets.

## Logo / favicon — resueltos

- `src/app/icon.svg` — favicon (monograma FM con gradiente de marca).
- `src/components/marketing/logo.tsx` — logo horizontal (SVG inline).

Si más adelante hay archivos de marca definitivos, sustituir esos dos.
