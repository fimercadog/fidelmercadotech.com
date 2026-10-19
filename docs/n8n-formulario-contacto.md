# Formulario de contacto → n8n (correo + hoja de Google)

Cada contacto que llena el formulario del sitio llega a n8n, que:
1. lo **valida** (nombre, correo, mensaje de al menos 10 letras y la casilla de autorización de datos),
2. lo **guarda como una fila** en una hoja de Google (el registro),
3. te **avisa por correo** al buzón `contacto@fidelmercadotech.com` (con el correo del interesado en *Responder a*),
4. le responde al sitio que todo salió bien.

Si el correo falla, el flujo termina con error y el formulario le pide al visitante escribirte por WhatsApp: **ningún contacto se pierde en silencio**. Si solo falla la hoja, el correo igual te avisa.

Archivo del flujo: [`n8n-formulario-contacto.json`](./n8n-formulario-contacto.json)

## Puesta en marcha

1. **Crea la hoja de Google** con una pestaña llamada `Contactos` y estos encabezados, en la fila 1 y con estos nombres exactos:
   `Fecha · Nombre · Empresa · Correo · Teléfono · Motivo · Interés · Mensaje · Origen · Estado`
2. **Importa el flujo** en n8n: *Workflows → Import from file* y elige el `.json`.
3. **Conecta las dos credenciales:**
   - Nodo **Guardar en hoja**: tu cuenta de Google y pega el **ID de la hoja** (la parte larga de su dirección, entre `/d/` y `/edit`).
   - Nodo **Avisar por correo**: el SMTP del buzón `contacto@fidelmercadotech.com` (en Hostinger, los datos del servidor de salida están en el panel del correo; normalmente `smtp.hostinger.com`, puerto 465 con SSL).
4. **Activa el flujo.** En el nodo *Webhook contacto* copia la **Production URL** (termina en `/webhook/fmt-contacto`). No uses la *Test URL*.
5. **En el sitio**, define la variable con esa dirección y vuelve a compilar (se incrusta al compilar):
   `NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://TU-N8N/webhook/fmt-contacto`
6. **Reenvío a Gmail (opcional):** en Hostinger activa el reenvío del buzón `contacto@` a tu Gmail para leerlo ahí.

## Probarlo

Desde cualquier terminal, con datos de mentira:

```bash
curl -X POST "https://TU-N8N/webhook/fmt-contacto" \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Prueba","email":"prueba@ejemplo.com","motivo":"demo","mensaje":"Mensaje de prueba del flujo","consentimiento":true}'
```

Debe responder `{"ok":true}`, aparecer una fila en la hoja y llegarte el correo. Si quitas `"consentimiento":true`, responde `400`.

## Notas

- **CORS:** el flujo solo acepta llamadas desde `https://fidelmercadotech.com`. Para probar desde tu computador, agrega temporalmente `,http://localhost:3000` al campo *Allowed Origins* del nodo Webhook.
- **reCAPTCHA:** el sitio es estático y no puede verificarlo en servidor. Si empiezas a recibir spam, la defensa se agrega en n8n (por ejemplo limitando envíos por IP).
- **Más adelante:** cuando tengas tu CRM propio, este mismo webhook puede enviar el contacto allá como *Lead*; la hoja de Google se reemplaza.
