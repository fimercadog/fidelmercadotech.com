# Deploy — fidelmercadotech.com (Hostinger, sitio estático)

El sitio es Next.js con `output: "export"`: se compila a archivos estáticos y se sube a Hostinger. **No usa Vercel.**
Los datos de acceso al servidor (usuario, IP, puerto, llave) **no se guardan en el repo ni en `.env*`**; viven en tu gestor de contraseñas y en `~/.ssh/config`. Acceso solo por llave SSH.

## 1. Antes de compilar

- [ ] `.env.local` (o variables del entorno de build) con:

  ```bash
  NEXT_PUBLIC_SITE_URL=https://fidelmercadotech.com
  NEXT_PUBLIC_SITE_NAME=Fidel Mercado Tech
  NEXT_PUBLIC_WHATSAPP_NUMBER=573027029498
  NEXT_PUBLIC_CONTACT_PHONE=+57 302 702 9498
  NEXT_PUBLIC_CONTACT_EMAIL=contacto@fidelmercadotech.com
  NEXT_PUBLIC_CONTACT_WEBHOOK_URL=<Production URL del webhook de n8n — ver docs/n8n-formulario-contacto.md>
  ```

  `NEXT_PUBLIC_*` se incrusta al compilar: si el webhook queda vacío en producción, el formulario termina en WhatsApp con el mensaje ya redactado y **no guarda contactos** en hoja ni correo.
- [ ] n8n: flujo importado, activo (Production URL, no Test URL), hoja «Contactos» y SMTP de `contacto@` probados con un envío real.
- [ ] Buzón `contacto@fidelmercadotech.com` creado en Hostinger.

## 2. Compilar y verificar

```bash
npm ci
npm run build        # genera out/
```

- [ ] Build sin errores.
- [ ] Revisar `out/` en local (escritorio y móvil): formulario completo, `/agendar-cita`, blog, soluciones, servicios.

## 3. Subir

- [ ] Subir el contenido de `out/` a la carpeta pública del dominio (por SCP/SFTP con llave).
- [ ] Confirmar que `.htaccess` (viene de `public/`) quedó en la raíz: trae las reescrituras, la redirección a HTTPS y las cabeceras de seguridad.
- [ ] Si algo falla por la CSP, ajustar `connect-src` al host exacto del webhook en `public/.htaccess`.

## 4. Después de subir

- [ ] `https://fidelmercadotech.com` abre con candado y `http://` redirige a `https://`.
- [ ] Cabeceras: `curl -sI https://fidelmercadotech.com` muestra `Strict-Transport-Security`, `Content-Security-Policy` y `X-Frame-Options`.
- [ ] Enviar un contacto de prueba: llega a la hoja y al correo.
- [ ] `robots.txt` y `sitemap.xml` responden; `/landing` queda con `noindex`.
- [ ] DNS del dominio: registros **SPF, DKIM y DMARC** publicados (evita que suplanten tu correo).

## 5. Seguridad del servidor (una vez)

- [ ] Autenticación SSH solo por llave; contraseña desactivada.
- [ ] Si una contraseña de acceso apareció alguna vez en un archivo del proyecto o en una conversación, **rotarla**.
- [ ] La hoja de Google de contactos en «Restringido».
