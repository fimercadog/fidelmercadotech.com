# Backlog — historias de usuario del sitio fidelmercadotech.com

Historias de usuario (HU) que resuelve el sitio público, ordenadas por etapa del recorrido del cliente y con su estado real.
**Actualizado el 2026-10-25.** La verificación contra el código (commit `52deb37`) y contra producción es del **2026-10-24**: no se repitió hoy. Los arreglos de los pendientes 1 y 2 y el caso ilustrativo de `/casos` se desplegaron el 2026-10-24 por la API de Hostinger, pero todavía no tienen commit. Lo agregado el 2026-10-25 (HU-36, pendiente 15 y la meta descripción de `/casos`) está solo en el código local: sin desplegar, sin commit y sin validar en producción.

## Cómo leer este backlog

- Cada HU sigue el formato **Como / quiero / para**. Sus viñetas son los criterios de aceptación: *se cumple cuando…*
- Estado: ✅ hecho · 🟡 parcial · 🔴 falla hoy · ⏳ pendiente (falta construirla o decidirla).
- Prioridad de los pendientes: **P0** hoy se pierden interesados o demos · **P1** frena la conversión o la confianza · **P2** calidad.
- Las "historias de ejemplo" que se ven dentro de cada solución y servicio ("Tu ganancia, en un ejemplo") son contenido comercial sobre los clientes de tus clientes, no HU del sitio. Viven en `src/content/solutions.ts` y `src/content/services.ts`.

## Roles

| Rol | Quién es |
| --- | --- |
| **Visitante** | Dueño, gerente o jefe de área de una pyme, no técnico, con algo trabado en su operación. Rol principal. |
| **Visitante de campaña** | Llega desde un anuncio a `/landing`. |
| **Lector** | Llega desde Google a un artículo del blog. |
| **Dueño de clínica** | Quiere ver cómo agendarían sus pacientes en línea (`/agendar-cita`). |
| **Fidel** | Dueño del sitio: recibe los interesados, vende y mantiene el contenido. |

## Resumen

| Etapa | HU | ✅ | 🟡 | 🔴 | ⏳ |
| --- | --- | --- | --- | --- | --- |
| E1 · Llegar al sitio | HU-01 – HU-05 | 4 | 1 | – | – |
| E2 · Entender si es para mí | HU-06 – HU-10 | 3 | 2 | – | – |
| E3 · Evaluar qué me ofrece | HU-11 – HU-16, HU-36 | 5 | 1 | – | 1 |
| E4 · Confiar | HU-17 – HU-21 | 4 | 1 | – | – |
| E5 · Contactar | HU-22 – HU-27 | 4 | 1 | 1 | – |
| E6 · Atender al interesado (Fidel) | HU-28 – HU-31 | 1 | 1 | – | 2 |
| E7 · Operar el sitio (Fidel) | HU-32 – HU-35 | 2 | 1 | 1 | – |
| **Total** | **36** | **23** | **8** | **2** | **3** |

## Pendientes priorizados

| # | Prio | Qué pasa | Arreglo sugerido | HU |
| --- | --- | --- | --- | --- |
| 1 | P0 | `/agendar-cita` no funciona: los tres hosts de las APIs demo (`demo-*.api.fidelmercadotech.com`) no resuelven DNS. Al elegir el tipo de clínica sale "No se pudo conectar con el sistema demo". **Mitigado y desplegado el 2026-10-24:** se quitó de `/soluciones/fidelos` el segundo botón "Solicitar una demo", que era el que llevaba ahí y además mostraba la agenda de una clínica, no FidelOS. El botón principal ya llevaba a `/contacto?motivo=demo&interes=fidelos`. | Causa encontrada: en Hostinger la API se llama `demo-erp-web-veterinaria-api.fidelmercadotech.com` (con guion), responde 200 pero no acepta CORS desde `fidelmercadotech.com`, y no existen APIs de estética ni de IPS. Para reactivarla: corregir los hosts en `agendar-cita/page.tsx`, agregar el dominio a CORS en el backend de la demo, quitar o publicar las verticales que no tienen API y volver a poner `demoUrl` (ver `TODO(demo)` en `solutions.ts`). | HU-27, HU-13 |
| 2 | P0 | El formulario no envía desde `www.fidelmercadotech.com`: `www` responde 200 sin redirigir y `contact.php` solo acepta el origen sin `www`. El navegador bloquea el envío y el visitante ve "Problema de conexión". **✅ Resuelto el 2026-10-24:** `public/.htaccess` redirige `www` a sin `www` con 301, lo que además evita contenido duplicado en Google. Desplegado y verificado: `https://www.fidelmercadotech.com/contacto/` responde 301 hacia `https://fidelmercadotech.com/contacto/`. | — | HU-28, HU-33 |
| 3 | P0 | No se ha comprobado que `mail()` entregue en Hostinger (`pendientes.md`: habilitar SMTP). Si falla, `contact.php` responde 500 y el formulario muestra error + WhatsApp: no falla en silencio, pero el correo no llega. | Enviar una prueba real en producción con un correo propio. | HU-28 |
| 4 | P1 | Los formularios incrustados al final de cada solución, servicio y caso envían `interes` vacío, así que Fidel no sabe desde qué página escribió el interesado. | Pasar el slug de la página como prop a `ContactForm`. | HU-23 |
| 5 | P1 | `/casos` y `/nosotros` prometen demos "que puedes abrir y probar ahora mismo", pero ningún caso tiene `liveUrl` y por eso no aparece el botón "Abrir demo". | Añadir `liveUrl` a los casos con demo pública, o ajustar el texto. | HU-19 |
| 6 | P1 | Los precios de referencia (`PLANS`, `PRICING_FAQ`, `sections/pricing.tsx`) no se muestran en ninguna página desde que se quitó `/precios`. | Decisión de Fidel: publicarlos o borrar el código sin uso. | HU-16 |
| 7 | P1 | Sin analítica: no se mide de dónde vienen las visitas, qué páginas convierten ni cuánto rinde `/landing`. Es algo que el servicio de Desarrollo web les ofrece a los clientes. | Instalar analítica y medir el envío del formulario y los clics a WhatsApp. | HU-31, HU-04 |
| 8 | P1 | Los interesados solo quedan en el correo, no en una hoja ni en un CRM. | Acordado para después: Etapa 1 del área administrativa propia. | HU-30 |
| 9 | P2 | Fondos alternados rotos (regla global): dos secciones blancas seguidas en `/soluciones` (hero → catálogo), `/servicios` (hero → destacados), `/nosotros` (hero → misión), `/blog` (hero → destacado) y `/casos/[slug]` (hero → reto); dos grises seguidas en `/nosotros` ("Cómo trabajo" → "Casos"). | Ajustar el `bg-*` de la sección afectada. | HU-10 |
| 10 | P2 | `e2e/smoke.spec.ts` está desactualizado: busca `/precios`, textos viejos del hero y un botón "Enviar mensaje" en el paso 1 del asistente. Por lectura del código fallarían 4 de 6 pruebas (no se ejecutaron). | Reescribir las pruebas sobre los textos y flujos actuales. | HU-34 |
| 11 | P2 | El glosario (`TermBadge`) solo tiene definición para 4 de los términos que muestran las páginas de solución, porque las claves no coinciden ("DEMO DISPONIBLE" frente a "Demo disponible"; el stack ya está escrito en lenguaje simple). | Alinear las claves de `DEFINITIONS` con los textos reales. | HU-09 |
| 12 | P2 | Quedan 20 `TODO(imagen)` (12 en `solutions.ts`) con ilustraciones de marca en lugar de capturas reales, y los artículos no tienen `coverImage`. | Reemplazarlas por capturas reales cuando existan. | HU-35 |
| 13 | P2 | WhatsApp y Facebook siguen mostrando la vista previa vieja del enlace. | "Volver a extraer" en el depurador de Meta (`pendientes.md`). | HU-02 |
| 14 | P2 | La meta descripción de `/casos` habla de 2 proyectos y hay 8 (uno ilustrativo). **Texto cambiado en el código el 2026-10-25** (`description` en `src/app/casos/page.tsx`); falta revisarlo, desplegarlo y comprobarlo en producción. | Revisar el texto y desplegar. | HU-18 |
| 15 | P2 | El gemelo digital (`/gemelo-digital`, con card en `/servicios`) es una maqueta en CSS 3D con una bodega de ejemplo, estados fijos y sin conexión a datos. Está solo en el código local, sin desplegar ni commit. | Decisión de Fidel: dejarlo como ejemplo de referencia o hacer una versión con modelo 3D real; si el servicio necesita página de detalle propia; ícono propio para la card; prueba E2E. | HU-36 |

---

## E1 · Llegar al sitio

### HU-01 · Encontrar el sitio en Google ✅

**Como** visitante que busca una solución, **quiero** encontrar el sitio en Google con un título y una descripción claros por página, **para** llegar directo a lo que necesito.

- Cada ruta tiene `title`, `description` y `canonical` propios; las páginas de detalle los generan desde el contenido.
- `sitemap.xml` incluye las rutas fijas y todas las dinámicas (soluciones, servicios, casos y artículos), y `robots.txt` lo anuncia. En producción responde 200.
- Los artículos publican datos estructurados `BlogPosting`.
- Código: `src/app/sitemap.ts`, `src/app/robots.ts`, `generateMetadata` en cada `[slug]/page.tsx`

### HU-02 · Que el enlace compartido se vea bien 🟡

**Como** Fidel, **quiero** que al compartir un enlace por WhatsApp o redes salga una vista previa con logo, título y descripción, **para** que el enlace genere confianza y clics.

- Imagen de vista previa de 1200×630 y tarjeta grande para X/Twitter.
- 🟡 Falta limpiar la caché de WhatsApp y Facebook (pendiente 13).
- Código: `src/app/opengraph-image.tsx`, `src/app/layout.tsx`

### HU-03 · Leer algo útil antes de hablar con alguien ✅

**Como** lector que llega desde Google, **quiero** artículos prácticos sobre ERP, inventario, automatización e IA, **para** entender mi problema antes de pedir ayuda.

- 6 artículos con categoría, fecha y tiempo de lectura; uno aparece destacado en la portada del blog.
- Cada artículo cierra con un llamado a la acción, enlaces a anterior y siguiente y "Más artículos".
- Código: `src/content/blog.ts`, `src/app/blog/`

### HU-04 · Aterrizar desde un anuncio ✅

**Como** visitante de campaña, **quiero** una página enfocada con un solo mensaje y un botón de demo, **para** decidir rápido sin perderme en el menú.

- `/landing` tiene hero, capacidades, dos bloques de producto y un llamado final a `/contacto?motivo=demo`.
- Es `noindex, follow`: no compite con la portada en Google y queda fuera del menú a propósito.
- Nota: sin analítica no se puede medir cuánto rinde (pendiente 7).
- Código: `src/app/landing/page.tsx`

### HU-05 · No quedarme perdido en una página que no existe ✅

**Como** visitante, **quiero** que una dirección equivocada me ofrezca caminos de vuelta, **para** no abandonar el sitio.

- Página 404 propia con "Volver al inicio" y atajos a Soluciones, Servicios, Blog y Contacto; es `noindex`.
- En Hostinger, `.htaccess` sirve `/404.html`.
- Código: `src/app/not-found.tsx`, `public/.htaccess`

## E2 · Entender si es para mí

### HU-06 · Entender la propuesta en la primera pantalla ✅

**Como** visitante, **quiero** entender de un vistazo qué hace Fidel Mercado Tech, **para** decidir en segundos si sigo leyendo.

- H1: "Tú pones el negocio. Yo me encargo de lo que se complica."
- Botón principal "Ver cómo lo resuelvo" hacia `/soluciones` y atajo "Cuéntamelo por WhatsApp" con el mensaje ya escrito.
- En celular solo se ven el texto y los botones (el mockup 3D se oculta).
- Código: `src/components/sections/hero.tsx`

### HU-07 · Reconocer mi problema ✅

**Como** visitante, **quiero** ver los problemas que suelen traerle a Fidel, **para** sentir que entiende mi caso.

- Muestra tres problemas: datos dispersos, inventario que no cuadra y clientes sin respuesta.
- La portada explica que la web, el ERP y WhatsApp comparten la misma información, y que FidelOS reúne los módulos de toda la empresa.
- Código: `src/components/sections/problem-context.tsx`, `illustrated-row.tsx`, `quick-tour.tsx`

### HU-08 · Saber cómo trabaja antes de comprometerme ✅

**Como** visitante, **quiero** conocer los pasos del trabajo, **para** saber qué esperar y que veré la solución antes de decidir.

- Seis pasos: Me cuentas → Lo entiendo → Te lo muestro → Lo resuelvo → Lo dejo seguro → Sigo contigo.
- Código: `src/components/sections/process-funnel.tsx`

### HU-09 · Entender las palabras técnicas 🟡

**Como** visitante no técnico, **quiero** tocar un término y leer qué significa en palabras simples, **para** no quedarme con dudas.

- ✅ Los términos con definición se ven subrayados y abren la explicación con clic o Enter.
- 🟡 Solo 4 de los términos que muestran las páginas de solución tienen definición (pendiente 11).
- Código: `src/components/marketing/term-badge.tsx`

### HU-10 · Navegar cómodo en celular y computador 🟡

**Como** visitante, **quiero** un menú claro y páginas ordenadas en cualquier pantalla, **para** encontrar lo que busco sin esfuerzo.

- ✅ Encabezado fijo con menú desplegable de soluciones y botón "Solicitar demo" siempre visible; menú lateral en celular.
- ✅ Pie con 4 columnas de enlaces, datos de contacto y legales.
- 🟡 Los fondos alternan blanco ↔ gris en la portada, pero no en `/soluciones`, `/servicios`, `/nosotros`, `/blog` ni `/casos/[slug]` (pendiente 9).
- Código: `src/components/marketing/site-header.tsx`, `site-footer.tsx`, `src/content/site.ts`

## E3 · Evaluar qué me ofrece

### HU-11 · Encontrar la solución para mi tipo de negocio ✅

**Como** visitante, **quiero** un catálogo de soluciones por tipo de negocio, **para** encontrar rápido la que se parece a mi empresa.

- `/soluciones` muestra 11 soluciones. Cada tarjeta lleva el estado "Demo disponible", un resumen y 3 puntos clave. La portada destaca 3.
- El menú despliega 6 accesos directos y el pie tiene 5.
- Código: `src/content/solutions.ts`, `src/app/soluciones/page.tsx`, `solution-card.tsx`

### HU-12 · Evaluar una solución en detalle ✅

**Como** visitante, **quiero** ver el problema que resuelve, qué incluye y qué gano, **para** saber si me sirve antes de hablar con alguien.

- 14 páginas de detalle con: problema, solución, "Qué incluye", ejemplo de ganancia, beneficios, "Qué lo hace funcionar" y formulario.
- Botón "Ver demostración" (a `/contacto?motivo=demo&interes=<solución>`) y botón "Hablar por WhatsApp" con un mensaje que nombra la solución.
- 3 soluciones están fuera del catálogo pero tienen página: ERP Comercial y FidelOS se enlazan desde el menú, y HVAC solo es accesible por URL directa o sitemap.
- Código: `src/app/soluciones/[slug]/page.tsx`

### HU-13 · Entender qué es FidelOS ✅

**Como** dueño de empresa, **quiero** entender que FidelOS es un solo sistema con módulos para toda la empresa, **para** saber que puedo empezar con lo que necesito y crecer después.

- Módulos: comercial (CRM), inventario, compras, ventas, finanzas y contabilidad, reclutamiento, administración y reportes.
- La IA, el agente de WhatsApp y el modo contingencia se presentan como módulos premium, no como parte de la base.
- Su segundo botón "Solicitar una demo" llevaba a `/agendar-cita`, que hoy falla. Se quitó el 2026-10-24 (ya desplegado) y queda el botón que abre el formulario (pendiente 1).
- Código: `src/content/services.ts` (`automatizacion`), `src/content/solutions.ts` (`fidelos`)

### HU-14 · Conocer los servicios y evaluar uno ✅

**Como** visitante, **quiero** ver con qué capacidades se construye cada solución y el detalle de cada una, **para** pedir exactamente lo que necesito.

- `/servicios` muestra 2 servicios destacados (Consultoría de IA e IA en tus propios equipos) y 8 en el catálogo. Desde el 2026-10-25 (solo en el código local) el catálogo suma una card "Gemelo digital 3D" que lleva al ejemplo de HU-36, no a una página de servicio.
- Cada servicio muestra: problema, solución, alcance (o método paso a paso), ejemplo de ganancia, beneficios, soluciones relacionadas y formulario.
- Código: `src/content/services.ts`, `src/app/servicios/`

### HU-15 · Saber por dónde empezar con IA sin arriesgar mis datos ✅

**Como** gerente interesado en IA, **quiero** un camino claro (primero el diagnóstico, después la IA en mis equipos), **para** invertir sin gastar a ciegas ni exponer mi información.

- Consultoría de IA: cuatro preguntas en orden, el ejemplo de una distribuidora, un alcance que depende de los hallazgos y la entrega documentada.
- IA en tus propios equipos: privacidad, sin cobro por consulta y funcionamiento sin internet.
- Cada servicio enlaza al otro ("Siguiente paso" / "Primer paso recomendado") y la portada destaca ambos.
- Oportunidad: cada servicio cuenta su ejemplo con un negocio distinto (una distribuidora y una clínica). El caso de uso CU-01, en el anexo del final, los une en un solo recorrido, que ya está publicado como caso ilustrativo en `/casos/distribuidora-pedidos-ia`.
- Código: `src/content/services.ts` (`consultoria-ia`, `ia-local`), `src/components/sections/ai-use-cases.tsx`

### HU-16 · Ver precios de referencia antes de escribir ⏳

**Como** dueño de un negocio pequeño, **quiero** ver cuánto cuesta aproximadamente una web o un sistema, **para** saber si está en mi presupuesto antes de contactar.

- ⏳ El contenido ya existe: 4 planes (Web Express $590.000, Web Profesional $890.000, Web Premium $1.490.000 y Web + Sistema desde $2.490.000) y 7 preguntas frecuentes. Ninguna página lo muestra (pendiente 6).
- Código: `src/content/pricing.ts`, `src/content/faq.ts`, `src/components/sections/pricing.tsx`, `faq.tsx`

### HU-36 · Ver cómo se vería mi empresa en 3D 🟡

**Como** gerente de una empresa con bodega, **quiero** ver un ejemplo de una empresa replicada en 3D, **para** imaginar cómo vería la mía sin recorrerla.

- ✅ En el código local: `/gemelo-digital` muestra una bodega de ejemplo (Recepción, dos estanterías, Despacho y Oficina) que se gira con un control y cuyas zonas se tocan para ver su estado y una explicación. Va marcada "Ejemplo de referencia", sin cifras, con el problema, la solución, el resultado, el enlace a FidelOS y el formulario.
- ✅ En el código local: card "Gemelo digital 3D" al final del catálogo de `/servicios` que lleva a esa página.
- 🟡 Está solo en el código local: typecheck y lint en verde y vista revisada en el servidor local el 2026-10-25, pero sin desplegar, sin commit y sin validar en producción ni en celular real.
- Es una maqueta con estados fijos, no un modelo conectado a datos (pendiente 15).
- Código: `src/app/gemelo-digital/page.tsx`, `src/components/saas/digital-twin.tsx`, `src/app/servicios/page.tsx`

## E4 · Confiar

### HU-17 · Ver lo que ganaría un negocio como el mío ✅

**Como** visitante, **quiero** un ejemplo concreto de la ganancia, **para** imaginar el valor en mi empresa.

- Cada solución y servicio muestra "Tu ganancia, en un ejemplo": la historia (Como / quiero / para), los criterios "Se cumple cuando" y la ganancia.
- No usa cifras inventadas, y cada ejemplo aclara que es hipotético y no un resultado de cliente.
- Código: `src/components/marketing/story-block.tsx`, `src/content/story.ts`

### HU-18 · Ver casos reales ✅

**Como** visitante, **quiero** ver proyectos parecidos al mío con el reto, lo construido y el resultado, **para** confiar en que ya lo han resuelto antes.

- 8 casos, cada uno con: el reto, "Qué construí", "Lo que cambió", "Qué lo hace funcionar", la solución relacionada y un formulario.
- Uno es ilustrativo (`distribuidora-pedidos-ia`, el caso de uso CU-01). Lleva la etiqueta "Caso ilustrativo", títulos en presente ("Cómo lo resuelvo", "Lo que cambia") y la nota de que no es resultado de un cliente, y no aparece en "Lo que he resuelto" de `/nosotros`.
- Código: `src/content/cases.ts`, `src/app/casos/`

### HU-19 · Abrir la demo de un caso 🟡

**Como** visitante, **quiero** abrir la demo de un caso, **para** probar el sistema por mi cuenta.

- 🟡 El botón "Abrir demo" está programado, pero no aparece porque ningún caso tiene `liveUrl`, aunque el texto lo promete (pendiente 5).
- Código: `src/app/casos/[slug]/page.tsx`, `src/content/cases.ts`

### HU-20 · Saber quién está detrás ✅

**Como** visitante, **quiero** saber quién me va a atender y qué trayectoria tiene, **para** confiar en que hablo con quien construye.

- `/nosotros` incluye la misión, seis compromisos de trabajo, los casos, la biografía de Fidel (+6 años en sistemas empresariales, +10 sistemas, 16 años programando) y 2 certificados con enlace para verificarlos.
- Código: `src/app/nosotros/page.tsx`

### HU-21 · Saber qué pasa con mis datos ✅

**Como** visitante, **quiero** saber cómo se usan mis datos y dar mi autorización expresa, **para** escribir con tranquilidad.

- Casilla de autorización obligatoria (Ley 1581 de 2012) con enlaces a la política y a los términos; nunca "si sigues navegando aceptas".
- `/privacidad` (actualizada el 30 de agosto de 2026) y `/terminos` tienen texto redactado y están enlazados en el pie.
- Nota: `pendientes.md` todavía los marca como placeholder, pero el texto ya está escrito. Solo falta que Fidel decida si quiere una revisión legal.
- Código: `src/app/privacidad/page.tsx`, `src/app/terminos/page.tsx`

## E5 · Contactar

### HU-22 · Dejar mis datos sin un formulario largo ✅

**Como** visitante, **quiero** un formulario corto paso a paso, **para** escribir sin sentir que lleno un trámite.

- Asistente de 5 pasos (sobre ti → contacto → motivo → tu caso → autorización) con barra de progreso y el texto "Paso N de 5".
- Cada paso valida solo sus campos y el foco pasa al primer campo del paso siguiente.
- Está en `/contacto` y al final de cada solución, servicio y caso.
- Código: `src/components/marketing/contact-form.tsx`, `src/lib/contact-schema.ts`

### HU-23 · No repetir qué me interesa 🟡

**Como** visitante, **quiero** que el formulario sepa desde qué solución o servicio llegué, **para** no tener que explicarlo y recibir una respuesta sobre eso.

- ✅ Los botones que llevan a `/contacto` pasan `?motivo=` (y desde una solución también `&interes=<solución>`), y el motivo llega preseleccionado.
- ✅ En 5 de los 10 servicios el formulario incrustado preselecciona el motivo (IA, automatización o proyecto); en los demás queda "Solicitar una demostración".
- 🟡 Los formularios incrustados envían `interes` vacío (pendiente 4).

### HU-24 · Escribir por WhatsApp desde cualquier página ✅

**Como** visitante, **quiero** un botón de WhatsApp siempre a mano, **para** escribir por el canal que ya uso.

- Botón flotante en todas las páginas, más botones de WhatsApp con un mensaje ya escrito según la página (portada, solución, servicio, contacto y pie).
- El número sale de un solo lugar (`SITE.whatsappNumber`).
- Código: `src/components/marketing/floating-whatsapp.tsx`, `src/content/site.ts`

### HU-25 · Ver todos los canales y cuándo me responden ✅

**Como** visitante, **quiero** ver WhatsApp, teléfono, correo, horario y tiempo de respuesta, **para** elegir cómo contactar y saber cuándo esperar respuesta.

- `/contacto` muestra tres canales que se abren con un toque (WhatsApp, `tel:` y `mailto:`), el horario de lunes a viernes de 8:00 a 18:00 (hora de Colombia) y la promesa "respondo en menos de 24 horas hábiles".
- Nota: el número que se ve en producción (+57 302 702 9498, también en WhatsApp) viene de `.env.local`. El valor por defecto de `site.ts` es +57 305 814 8918. Confirmar cuál es el correcto antes del próximo despliegue.
- Código: `src/app/contacto/page.tsx`

### HU-26 · No perder mi mensaje si algo falla ✅

**Como** visitante, **quiero** otra salida si el envío falla, **para** no creer que escribí y quedarme sin respuesta.

- Nunca muestra "Mensaje enviado" si el servidor responde con error o no hay conexión: muestra el error con un enlace a WhatsApp.
- Si el sitio se publica sin dirección de envío, el último paso arma el mensaje y lo manda por WhatsApp.
- "Prefiero WhatsApp" está siempre disponible en el último paso.

### HU-27 · Probar en vivo cómo agendarían mis pacientes 🔴

**Como** dueño de una clínica (veterinaria, estética o IPS), **quiero** agendar una cita de prueba en el sistema demo, **para** ver cómo lo harían mis pacientes.

- Flujo de 5 pasos: tipo de clínica → servicio → fecha y hora disponibles → datos y autorización → confirmación, con enlace "Ver en el sistema demo".
- 🔴 Hoy falla: los hosts del código no existen (la API real de veterinaria es `demo-erp-web-veterinaria-api`, sin CORS para el sitio) y estética e IPS no tienen API (pendiente 1).
- Desde el 2026-10-24 ya no la enlaza ninguna página (desplegado): solo se llega por URL directa.
- Código: `src/app/agendar-cita/page.tsx`

## E6 · Atender al interesado (Fidel)

### HU-28 · Recibir cada interesado listo para responder 🟡

**Como** Fidel, **quiero** recibir cada formulario en mi correo con los datos, el motivo y el interés, **para** responder rápido y sin buscar nada.

- ✅ `contact.php` valida los datos y envía un correo HTML ("Nuevo contacto: nombre — motivo") a `contacto@fidelmercadotech.com` con copia a Gmail. "Responder" va directo al interesado y el correo trae un botón "Responder a {nombre}". En producción el endpoint está publicado (responde 405 a GET, como debe).
- ✅ Desde `www` el envío se bloqueaba; desde el 2026-10-24 `www` redirige al dominio principal (pendiente 2, resuelto).
- 🟡 Falta comprobar que el correo llega (pendiente 3).
- Código: `public/api/contact.php`

### HU-29 · No recibir spam de bots ✅

**Como** Fidel, **quiero** que los bots no llenen mi correo, **para** dedicar el tiempo a interesados reales.

- Campo trampa oculto (honeypot), descartado en el navegador y en el servidor.
- Validación de campos en el navegador (Zod) y en el servidor (PHP).

### HU-30 · Tener todos los interesados en un solo lugar ⏳

**Como** Fidel, **quiero** que cada interesado quede guardado en una hoja o en mi CRM con su estado, **para** darle seguimiento sin depender del buzón.

- ⏳ Hoy solo llegan por correo. El área administrativa propia quedó acordada para después (pendiente 8).

### HU-31 · Saber de dónde vienen y qué convierte ⏳

**Como** Fidel, **quiero** medir las visitas, su origen y qué páginas terminan en contacto, **para** invertir en lo que trae clientes (Google, anuncios, blog).

- ⏳ El sitio no tiene analítica (pendiente 7).

## E7 · Operar el sitio (Fidel)

### HU-32 · Cambiar textos y datos de contacto en un solo lugar ✅

**Como** Fidel, **quiero** editar soluciones, servicios, casos, artículos y datos de contacto sin tocar componentes, **para** actualizar rápido y sin errores.

- Todo el texto vive en `src/content/*.ts`; teléfono, correo y WhatsApp están en `SITE` y se pueden cambiar por variables de entorno.
- Una solución, servicio, caso o artículo nuevo genera su página y su entrada en el sitemap sin tocar código. El menú y el pie se editan aparte en `site.ts`.

### HU-33 · Publicar en Hostinger sin servidor ✅

**Como** Fidel, **quiero** publicar el sitio como archivos estáticos en mi hosting, **para** no pagar ni mantener un servidor de Node.

- `npm run build` genera `out/` y esa carpeta se sube a `public_html`. Producción respondió 200 el 2026-10-24.
- `.htaccess` fuerza HTTPS, pone cabeceras de seguridad, sirve rutas sin `.html` y usa la 404 propia.
- Desde el 2026-10-24 también redirige `www` a sin `www` (desplegado y verificado).
- El despliegue del 2026-10-24 se hizo por la API de Hostinger (zip + `deploy-static-site-archive`), porque la contraseña SSH de `.env.local` fue rechazada.
- Código: `next.config.ts` (`output: "export"`), `public/.htaccess`

### HU-34 · Saber antes de publicar si algo se rompió 🔴

**Como** Fidel, **quiero** pruebas automáticas de los recorridos clave, **para** publicar sin miedo.

- 🔴 Las pruebas E2E están desactualizadas (pendiente 10).
- Typecheck, lint y build estaban en verde el 2026-10-22 (`cierre-web-2026-10-22.md`).
- Código: `e2e/smoke.spec.ts`

### HU-35 · Mostrar capturas reales de los productos 🟡

**Como** visitante, **quiero** ver pantallas reales de los sistemas, **para** saber qué voy a recibir.

- ✅ Hay capturas reales del ERP Inmobiliario y del de RRHH, también en sus casos.
- 🟡 Las demás páginas usan ilustraciones de marca marcadas con `TODO(imagen)`, y el blog no tiene imágenes de portada (pendiente 12).

---

## Anexo · Caso de uso CU-01: de la consultoría de IA a la IA en tus propios equipos

Recorre los dos servicios destacados de `/servicios` en el orden en que se aplican: primero **Consultoría de IA** y después **Inteligencia Artificial en tus propios equipos**. Usa la misma distribuidora del método de la consultoría, para que se vea cómo el resultado del primero decide el segundo. Es un caso **ilustrativo**: sigue las reglas de las historias del sitio, sin cifras inventadas y con su nota. Está publicado como caso de estudio en `/casos/distribuidora-pedidos-ia`, con la etiqueta "Caso ilustrativo".

| Campo | Detalle |
| --- | --- |
| **Historia** | Como gerente de una distribuidora, quiero saber primero qué automatizar y en qué orden, y después tener esa IA funcionando en los equipos de mi empresa, para dejar de digitar cada pedido tres veces sin que los datos de mis clientes salgan de la empresa ni pagar por cada consulta. |
| **Actor principal** | Gerente de la distribuidora. |
| **Otros actores** | Fidel, que hace el diagnóstico y la instalación, y el equipo de pedidos y facturación de la distribuidora. |
| **Servicios** | 1. Consultoría de IA → 2. Inteligencia Artificial en tus propios equipos. |
| **Disparador** | Los pedidos se demoran o se pierden entre WhatsApp, Excel y facturación, y el gerente no sabe por dónde empezar a automatizar. |
| **Precondiciones** | La distribuidora recibe pedidos por WhatsApp, factura en su propio sistema y acepta mostrar cómo trabaja su equipo. |
| **Resultado si sale bien** | Cada pedido de WhatsApp queda registrado en facturación una sola vez, confirmado por una persona y procesado en el servidor de la empresa. |
| **Resultado mínimo** | Aunque no se implemente nada, la distribuidora se queda con el diagnóstico y la hoja de ruta documentados. |

### Flujo principal

Los pasos se numeran por parte: `1.4` es el paso 4 de la parte 1.

#### Parte 1 · Consultoría de IA: cuatro preguntas, en orden

1. El gerente cuenta qué se le complica, por WhatsApp o en una llamada.
2. **¿Cómo trabajan hoy?** Fidel mapea el recorrido de un pedido y encuentra que cada uno se digita tres veces: en WhatsApp, en Excel y en facturación.
3. **¿Qué se puede automatizar y con qué?** Aparece el candidato real: una IA que lee el mensaje de WhatsApp, arma el pedido y lo registra.
4. **¿Qué se rompe si lo hacemos?** Los pedidos traen datos de clientes. Antes de conectar nada se define quién accede, qué queda registrado y que esos datos no salgan de la empresa.
5. **¿En qué orden se hace?** Fidel entrega la hoja de ruta (fase 1: pedidos; fase 2: inventario; fase 3: reportes), cada fase con su criterio de terminado, documentada en un Notion compartido.
6. El gerente decide ejecutar la fase 1 con Fidel.

#### Parte 2 · IA en tus propios equipos: la fase 1 de la hoja de ruta

1. Por lo que se encontró en el paso 1.4, la IA va a correr en los equipos de la empresa. Fidel elige un modelo de IA de código abierto que entienda bien los pedidos escritos por WhatsApp y que funcione con esos equipos.
2. Fidel lo instala en el servidor de la empresa y lo ajusta a su capacidad, buscando el equilibrio entre velocidad, calidad y costo.
3. Fidel conecta la IA con facturación por una conexión que no sale de la red de la empresa, y con el catálogo y la lista de precios para que reconozca los productos sin tener que reentrenarla.
4. Llega un pedido por WhatsApp: la IA lo lee y arma un borrador.
5. Una persona del equipo revisa el borrador y lo confirma, y el pedido queda registrado en facturación.
6. Fidel deja configurados el acceso por usuario, el registro de lo que hace la IA, los respaldos y el plan de mantenimiento.
7. Se comprueba el criterio de terminado de la fase 1, y el gerente aprueba pasar a la fase 2 (inventario).

### Flujos alternos

- **1.4a · Datos poco sensibles y pocas consultas:** la hoja de ruta puede recomendar un proveedor de IA externo en lugar de equipos propios. En ese caso la parte 2 se hace con el servicio Inteligencia Artificial (módulo premium).
- **1.6a · El gerente sigue por su cuenta:** decide ejecutar la hoja de ruta solo o con su equipo, y el caso termina con el resultado mínimo.
- **2.1a · Los equipos no alcanzan:** antes de instalar se dimensiona un equipo propio o un servidor privado para el modelo.
- **2.4a · La IA no reconoce un producto o el pedido es ambiguo:** deja el borrador marcado para revisión y la persona lo completa a mano.
- **2.7a · La fase 1 no cumple su criterio de terminado:** se ajusta antes de pasar a la fase 2.

### Reglas

- Las cuatro preguntas van siempre en ese orden: cada una solo se responde si la anterior ya tiene respuesta.
- Ningún pedido se registra sin la confirmación de una persona.
- Los datos de los clientes no salen de la red de la empresa.
- Cada fase se aprueba antes de empezar la siguiente.

### Criterios de aceptación

- Existe un mapa de cómo trabaja hoy el equipo, con los puntos donde el trabajo se repite o se frena.
- La hoja de ruta por fases está documentada, cada fase con su criterio de terminado.
- Los pedidos que llegan por WhatsApp quedan en facturación sin que nadie los vuelva a digitar.
- Ningún proveedor externo recibe los datos de los clientes.
- No hay cobro por cada pedido que lee la IA: el costo es el equipo, la energía y el mantenimiento.

### Lo que ganas

- **Ganas certeza (parte 1):** antes de invertir sabes qué automatizar, en qué orden y dónde puede fallar.
- **Ganas tiempo (parte 2):** el pedido se registra una sola vez, en el momento en que llega.
- **Ganas privacidad y costos previsibles (parte 2):** los datos de tus clientes no salen de tu empresa y no pagas por cada consulta.

*Ejemplo hipotético para ilustrar la ganancia; no corresponde a resultados de un cliente. Lo que ganarías en tu caso lo medimos contigo antes de decidir.*

---

## Cómo se verificó (2026-10-24)

- **Código:** `src/content/*`, todas las rutas de `src/app`, `contact-form.tsx`, `public/api/contact.php`, `public/.htaccess` y `e2e/smoke.spec.ts`.
- **Producción:** `/`, `/sitemap.xml` y `/soluciones/fidelos/` → 200 · `/api/contact.php` → 405 a GET · `http://` → 301 a `https://` · `https://www…` → 200 sin redirección.
- **CORS:** el preflight a `contact.php` con origen `https://www.fidelmercadotech.com` responde `Access-Control-Allow-Origin: https://fidelmercadotech.com`.
- **APIs demo:** `demo-erp-web-veterinaria`, `demo-erp-web-clinica-estetica` y `demo-ips` (`.api.fidelmercadotech.com`) → sin resolución DNS.
- **Despliegue (2026-10-24):** typecheck, lint y build en verde (56 páginas). En producción, `https://www…` responde 301 hacia el dominio sin `www` (también con ruta), `/soluciones/fidelos/` ya no enlaza a `/agendar-cita`, `/casos/distribuidora-pedidos-ia/` responde 200 con su etiqueta y `/nosotros/` no lo muestra.
- **API demo de veterinaria:** `demo-erp-web-veterinaria-api.fidelmercadotech.com/api/public/appointments/services` → 200, sin `Access-Control-Allow-Origin` para el sitio.
- **Sin comprobar:** que `mail()` entregue el correo (hace falta un envío real) y la ejecución de las pruebas E2E.

## Comprobado el 2026-10-25 (solo local, no producción)

- Typecheck y lint en verde sobre los archivos del gemelo digital, `/servicios`, `/casos` y `sitemap.ts`.
- En el servidor de desarrollo local, `/servicios` y `/gemelo-digital` responden 200, y se vio el modelo 3D y la card.
- **No se comprobó:** compilación para producción (`npm run build`), producción, celular real, ni pruebas E2E.
