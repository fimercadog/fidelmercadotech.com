# Deploy — fidelmercadotech.com y demos en Hostinger

## Datos SSH (los mismos para todos los proyectos del servidor)

```bash
ssh -p 65002 -i ~/.ssh/hostinger_apirrhh u910322706@82.29.157.42
```

| Dato | Valor |
|------|-------|
| Usuario | `u910322706` |
| Host | `82.29.157.42` |
| Puerto | `65002` |
| Llave privada | `~/.ssh/hostinger_apirrhh` |
| PHP 8.4 CLI | `/opt/alt/php84/usr/bin/php` |
| Composer | `/usr/local/bin/composer` |
| Raíz de dominios | `~/domains/fidelmercadotech.com/` |

---

## A. Subir el sitio de marketing — fidelmercadotech.com

El sitio es un Next.js puro (sin backend Laravel). El frontend se despliega en **Vercel**, el dominio apunta a Vercel por DNS.

### Primera vez (solo una vez)

1. Ir a [vercel.com](https://vercel.com) → **Add New Project**
2. Importar repo GitHub: `fimercadog/fidelmercadotech.com`
3. **Root Directory**: `/` (o vacío — el `package.json` está en la raíz)
4. Framework: **Next.js**
5. Node.js: **22.x**
6. Variables de entorno (Settings → Environment Variables):
   ```
   NEXT_PUBLIC_SITE_URL=https://fidelmercadotech.com
   NEXT_PUBLIC_SITE_NAME=Fidel Mercado Tech
   NEXT_PUBLIC_WHATSAPP_NUMBER=573027029498
   NEXT_PUBLIC_CONTACT_PHONE=+57 302 702 9498
   NEXT_PUBLIC_CONTACT_EMAIL=contacto@fidelmercadotech.com
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=<clave pública reCAPTCHA>
   RECAPTCHA_SECRET_KEY=<clave secreta — solo servidor, no pública>
   CONTACT_WEBHOOK_URL=<URL de n8n o vacío>
   ```
7. En **Domains** → agregar `fidelmercadotech.com` y `www.fidelmercadotech.com`
8. Apuntar DNS del dominio a Vercel (lo indica Vercel con un CNAME o A record)
9. **Deploy** → Vercel construye y publica

### Actualizaciones (cada push a `main`)

Vercel despliega automáticamente al hacer `git push origin main`. No hay pasos manuales.

Si las variables de entorno cambian: **Settings → Environment Variables → editar → Redeploy**.

---

## B. Subir demos de ERP (backend Laravel en Hostinger)

Cada demo tiene:
- **Frontend**: Vercel (repo propio, Root Directory = `frontend/`)
- **Backend**: Hostinger SSH, carpeta en `~/domains/fidelmercadotech.com/<nombre-proyecto>/`

### Checklist de actualización de backend (deploy incremental)

```bash
# 1. Conectar
ssh -p 65002 -i ~/.ssh/hostinger_apirrhh u910322706@82.29.157.42

# 2. Ir al proyecto
PHP=/opt/alt/php84/usr/bin/php
cd ~/domains/fidelmercadotech.com/<nombre-proyecto>/backend

# 3. Bajar cambios
git pull origin main   # o la rama que corresponda

# 4. Dependencias (solo si cambió composer.lock)
$PHP /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction

# 5. Migraciones (solo si hay nuevas)
$PHP artisan migrate --force

# 6. Refrescar cachés (siempre)
$PHP artisan config:cache
$PHP artisan route:cache
$PHP artisan view:cache
```

### Checklist de primera instalación de backend

```bash
PHP=/opt/alt/php84/usr/bin/php
cd ~/domains/fidelmercadotech.com

# Clonar
git clone --depth 1 https://github.com/fimercadog/<repo>.git <nombre-proyecto>
git -C <nombre-proyecto> config core.fileMode false

# Symlink doc root
cd public_html
rm -rf <subdominio-api>
ln -s ../<nombre-proyecto>/backend/public <subdominio-api>

# Dependencias
cd ~/domains/fidelmercadotech.com/<nombre-proyecto>/backend
$PHP /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction

# .env (crear manualmente con la plantilla del proyecto)
touch database/database.sqlite
$PHP artisan key:generate --force
$PHP artisan migrate --force
$PHP artisan db:seed --force    # SOLO primera vez
$PHP artisan storage:link
$PHP artisan config:cache
$PHP artisan route:cache
chmod -R 775 storage bootstrap/cache
```

### Variables .env comunes de producción

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://<subdominio-api>.fidelmercadotech.com
FRONTEND_URL=https://<subdominio-frontend>.fidelmercadotech.com
DB_CONNECTION=sqlite
SESSION_DRIVER=database
SESSION_DOMAIN=.fidelmercadotech.com
SESSION_SECURE_COOKIE=true
SESSION_SAME_SITE=lax
SANCTUM_STATEFUL_DOMAINS=<subdominio-frontend>.fidelmercadotech.com
CACHE_STORE=database
QUEUE_CONNECTION=sync
```

### Nota importante — PHP

El servidor tiene PHP 8.2 como default. **Siempre usar el binario 8.4**:
```bash
PHP=/opt/alt/php84/usr/bin/php
$PHP artisan ...
$PHP /usr/local/bin/composer ...
```
Y en hPanel → el subdominio de API → Configuración PHP → **8.4**.

---

## Demos desplegados

| Demo | Frontend | Backend API | Repo GitHub |
|------|----------|-------------|-------------|
| `fidelmercadotech.com` | Vercel | — | `fimercadog/fidelmercadotech.com` |
| `demorrhh.fidelmercadotech.com` | Vercel | `demo-erp-web-rrhh.api.fidelmercadotech.com` | — |
| `crminmobiliaria.fidelmercadotech.com` | Vercel | `demo-inventario-crm-api.fidelmercadotech.com` | — |

---

## Smoke test rápido post-deploy

```bash
# Sitio de marketing
curl -s -o /dev/null -w "%{http_code}" https://fidelmercadotech.com   # 200

# Backend de cualquier demo
API=https://<subdominio-api>.fidelmercadotech.com
curl -s -o /dev/null -w "%{http_code}" $API/up                         # 200
curl -s -o /dev/null -w "%{http_code}" $API/api/products \
  -H "Accept: application/json"                                         # 401
```
