# Pendientes — fidelmercadotech.com

_Actualizado 2026-10-25. Detalle, prioridad y contexto de cada punto: `docs/backlog.md` (tabla "Pendientes priorizados")._

## Inmediatos (Fidel)

- [ ] **Visto bueno visual + commit** — Producción ya tiene los cambios del 24-oct, pero git no. Revisar `https://fidelmercadotech.com/casos/distribuidora-pedidos-ia/` y `/soluciones/fidelos/`. Con el visto bueno, hacer commit de `public/.htaccess`, `src/app/casos/[slug]/page.tsx`, `src/app/casos/page.tsx`, `src/app/nosotros/page.tsx`, `src/content/cases.ts`, `src/content/solutions.ts` y `docs/backlog.md`. Los cambios del 25-oct (punto siguiente) son aparte y **no están en producción**: `src/app/gemelo-digital/page.tsx`, `src/components/saas/digital-twin.tsx`, `src/app/servicios/page.tsx` y `src/app/sitemap.ts`. Ojo: `src/app/casos/page.tsx` mezcla ambos (lo del 24-oct y la meta descripción del 25-oct).
- [ ] **Visto bueno visual del gemelo digital (25-oct, solo local)** — Revisar `/gemelo-digital` (bodega en 3D de ejemplo que se gira y se toca) y la card "Gemelo digital 3D" al final del catálogo de `/servicios`. Typecheck y lint pasaron y se vio en el servidor local, pero **no se ha compilado para producción ni desplegado**, y no hay commit.
- [ ] **Probar el formulario en producción (SMTP)** — Enviar un mensaje real desde `/contacto` y confirmar que llega a `contacto@fidelmercadotech.com` (con copia a Gmail). Si no llega, habilitar SMTP en el panel de Hostinger (Hosting → Correo) para que `contact.php` pueda usar `mail()`. Si falla, el formulario muestra error + WhatsApp, no falla en silencio. (backlog #3)
- [ ] **Confirmar el número de contacto** — Producción muestra +57 302 702 9498 (viene de `.env.local`); el valor por defecto de `site.ts` es +57 305 814 8918. Si cambia, actualizar `.env.local`, recompilar y desplegar.
- [ ] **Vista previa en WhatsApp/Facebook** — Abrir [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug), pegar `https://fidelmercadotech.com/` y clicar "Volver a extraer". (backlog #13)
- [ ] **Contraseña SSH** — La de `.env.local` (`SSH_PASS`) fue rechazada el 2026-10-24. Actualizarla solo si se quiere volver a desplegar por SSH; hoy se despliega por la API de Hostinger.

## Para desarrollar (por prioridad)

- [ ] **P0 · Reactivar `/agendar-cita`** — Corregir los hosts en `src/app/agendar-cita/page.tsx` (la API real es `demo-erp-web-veterinaria-api.fidelmercadotech.com`, con guion), agregar `https://fidelmercadotech.com` a CORS en el backend de la demo, decidir qué hacer con estética e IPS (no tienen API) y volver a poner `demoUrl` en FidelOS (`TODO(demo)` en `solutions.ts`). (backlog #1)
- [ ] **P1 · Interés vacío en los formularios incrustados** — Pasar el slug de la página a `ContactForm` en soluciones, servicios y casos. (backlog #4)
- [ ] **P1 · Demos prometidas sin enlace** — Ningún caso tiene `liveUrl`: añadirlo o ajustar el texto de `/casos` y `/nosotros`. (backlog #5)
- [ ] **P1 · Precios de referencia** — Decidir si se publican `PLANS` y `PRICING_FAQ` o se borra el código sin uso. (backlog #6)
- [ ] **P1 · Analítica** — Medir visitas, origen, envíos del formulario, clics a WhatsApp y el rendimiento de `/landing`. (backlog #7)
- [ ] **P1 · Interesados en una hoja o CRM** — Acordado para después: Etapa 1 del área administrativa propia. (backlog #8)
- [ ] **P2 · Fondos alternados** — Hay dos secciones seguidas con el mismo fondo en `/soluciones`, `/servicios`, `/nosotros` (dos veces), `/blog` y `/casos/[slug]`. (backlog #9)
- [ ] **P2 · Pruebas E2E desactualizadas** — `e2e/smoke.spec.ts` busca `/precios` y textos viejos. (backlog #10)
- [ ] **P2 · Glosario** — Alinear las claves de `TermBadge` con los textos reales. (backlog #11)
- [ ] **P2 · Imágenes** — Quedan 20 `TODO(imagen)` con ilustraciones en lugar de capturas reales, y los artículos no tienen `coverImage`. (backlog #12)
- [ ] **P2 · Meta descripción de `/casos`** — Dice 2 proyectos y hay 8. (backlog #14) _El 25-oct se cambió el texto en el código (lista los temas de los casos), pero falta revisarlo, desplegarlo y comprobarlo en producción._
- [ ] **P2 · Gemelo digital: decidir alcance** — Hoy es una maqueta en CSS 3D con una bodega de ejemplo y estados fijos, sin cifras ni conexión a datos. Decisiones tuyas, no requisitos: (a) si se queda como maqueta de referencia o se hace una versión con modelo 3D real conectado a datos; (b) si el servicio necesita su propia página de detalle en `/servicios/…` (hoy la card lleva directo al ejemplo); (c) un ícono propio para la card, que usa el de tablet; (d) si se agrega una prueba E2E. (backlog #15)

## Contenido legal

- [ ] **/privacidad y /terminos** — El texto ya está redactado (Ley 1581, actualizado el 30-ago-2026). Solo falta decidir si se quiere una revisión legal.

## Limpieza técnica

- [ ] Borrar `site-deploy.zip` **solo después** de aprobar el despliegue del 24-oct: es el respaldo para volver a la versión del 22-oct.
- [ ] Borrar `site.zip` y `site2.zip` si son backups de builds anteriores.

## Para cuando haya cliente / venta real

- [ ] Gate de calidad completo: verifier + tests MySQL + E2E Playwright (ver CLAUDE.md).
- [ ] Confirmar dominio de producción definitivo y actualizar `metadataBase` en `layout.tsx`.

## Hecho el 2026-10-25 (solo en el código local, sin desplegar ni commit)

- Página de ejemplo `/gemelo-digital` (bodega en 3D con zonas que se tocan y un control para girar) y card "Gemelo digital 3D" en `/servicios`. Typecheck y lint en verde; vista revisada en el servidor local. Falta tu visto bueno y el despliegue.
- Texto de la meta descripción de `/casos` actualizado en el código (falta desplegar).
- Fechas de `pendientes.md` y `docs/backlog.md` actualizadas al 25-oct.

## Hecho el 2026-10-24

- [x] `www` redirige al dominio principal (301), así que el formulario ya funciona para quien entra por `www`. Desplegado y verificado.
- [x] FidelOS ya no enlaza a `/agendar-cita`.
- [x] Caso ilustrativo publicado en `/casos/distribuidora-pedidos-ia` y caso de uso CU-01 en `docs/backlog.md`.
- [x] Backlog del sitio (35 HU) en `docs/backlog.md`, enviado por correo.
- [x] Sitio verificado en producción: las páginas cargan, la 404 propia funciona y `contact.php` está publicado. Del antiguo "Verificar sitio en producción", la alternancia de fondos pasó a P2 y la prueba del formulario a Inmediatos.
- [x] El proceso SCP en background ya no aplica: el deploy se hace por la API de Hostinger.
