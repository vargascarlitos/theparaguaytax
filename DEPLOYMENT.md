# Guía de Despliegue - TheParaguayTax.com

## 🚀 Opciones de Despliegue

### Opción 1: Vercel (Recomendado - Más Fácil)

Vercel es la opción más sencilla y ofrece despliegue automático:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub/GitLab/Bitbucket

2. **Subir código a Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TheParaguayTax landing page"
   git remote add origin <tu-repositorio-url>
   git push -u origin main
   ```

3. **Importar en Vercel**
   - Click en "New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente que es Astro
   - Click "Deploy"
   - ¡Listo! Tu sitio estará en línea en ~2 minutos

4. **Dominio personalizado**
   - Ve a Settings > Domains
   - Agrega `theparaguaytax.com`
   - Configura los DNS según las instrucciones de Vercel

**Ventajas:**
- ✅ Deploy automático en cada push
- ✅ Preview deployments para PRs
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Sin configuración necesaria

---

### Opción 2: Netlify

Similar a Vercel, muy fácil de usar:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate

2. **Deploy desde Git**
   - Click "New site from Git"
   - Conecta tu repositorio
   - Configuración:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

3. **Dominio personalizado**
   - Ve a Domain settings
   - Add custom domain: `theparaguaytax.com`
   - Sigue las instrucciones DNS

---

### Opción 3: Servidor VPS (Para mayor control)

Si prefieres usar tu propio servidor (DigitalOcean, Linode, AWS EC2, etc.):

#### 3.1 Configuración del Servidor

```bash
# 1. Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Instalar Nginx
sudo apt-get install nginx

# 3. Clonar proyecto
cd /var/www
sudo git clone <tu-repositorio> theparaguaytax
cd theparaguaytax

# 4. Instalar dependencias y construir
npm install
npm run build

# 5. Los archivos están en ./dist
```

#### 3.2 Configurar Nginx

```nginx
# /etc/nginx/sites-available/theparaguaytax.com

server {
    listen 80;
    server_name theparaguaytax.com www.theparaguaytax.com;
    
    root /var/www/theparaguaytax/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Caché para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

```bash
# Activar sitio
sudo ln -s /etc/nginx/sites-available/theparaguaytax.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 3.3 SSL con Let's Encrypt

```bash
# Instalar Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d theparaguaytax.com -d www.theparaguaytax.com

# Renovación automática (ya viene configurada)
sudo certbot renew --dry-run
```

---

### Opción 4: GitHub Pages (Gratis pero limitado)

```bash
# 1. Instalar gh-pages
npm install -D gh-pages

# 2. Agregar script en package.json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# 3. Deploy
npm run deploy
```

**Nota:** Necesitarás configurar el repositorio como público y activar GitHub Pages en la configuración.

---

## 🔧 Configuraciones Post-Despliegue

### 1. Configurar Formspree (Formulario de Contacto)

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta y un nuevo formulario
3. Copia el Form ID
4. Edita `src/components/ContactForm.tsx` línea 22:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### 2. Analytics (Opcional)

**Google Analytics:**
Agrega en `src/layouts/Layout.astro` antes del `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible Analytics (Alternativa privada):**
```html
<script defer data-domain="theparaguaytax.com" src="https://plausible.io/js/script.js"></script>
```

### 3. Configurar DNS

Independientemente del hosting, necesitas configurar tu DNS:

```
Tipo: A
Nombre: @
Valor: [IP de tu servidor o del hosting]

Tipo: CNAME
Nombre: www
Valor: theparaguaytax.com
```

---

## 📊 Checklist de Pre-Lanzamiento

Antes de publicar, verifica:

- [ ] Formulario de contacto funcional (con Formspree configurado)
- [ ] WhatsApp button funcional (número correcto)
- [ ] Todas las traducciones EN/ES completas
- [ ] Imágenes optimizadas (WebP con fallback)
- [ ] Favicon visible en todas las páginas
- [ ] Responsive en móvil, tablet y desktop
- [ ] SEO meta tags completos
- [ ] robots.txt y sitemap.xml configurados
- [ ] SSL/HTTPS activo
- [ ] Velocidad de carga < 3 segundos (usar PageSpeed Insights)
- [ ] Links de redes sociales correctos
- [ ] Analytics configurado
- [ ] Formulario de contacto envía emails correctamente

---

## 🔄 Actualización del Sitio

### Para Vercel/Netlify:
```bash
# Simplemente hacer push
git add .
git commit -m "Actualización de contenido"
git push
# El despliegue es automático
```

### Para VPS:
```bash
# SSH al servidor
ssh user@tu-servidor

# Actualizar código
cd /var/www/theparaguaytax
sudo git pull
sudo npm install
sudo npm run build

# Nginx ya estará sirviendo los nuevos archivos
```

---

## 🆘 Soporte y Troubleshooting

### El sitio no carga
1. Verifica que el DNS esté propagado (usar dnschecker.org)
2. Revisa que SSL esté configurado
3. Verifica logs del servidor: `sudo tail -f /var/log/nginx/error.log`

### Formulario no envía
1. Verifica que el Form ID de Formspree sea correcto
2. Revisa la consola del navegador (F12) para errores
3. Verifica que no haya CORS errors

### WhatsApp no abre
1. Verifica el formato del número: 595985777252 (sin + ni espacios)
2. Prueba el link directamente: `https://wa.me/595985777252`

---

## 📞 Contacto para Soporte Técnico

Si necesitas ayuda con el despliegue:
- Email: dasegrouppyy@gmail.com
- WhatsApp: +595 985 777252

---

**¡Éxito con el lanzamiento de TheParaguayTax.com!** 🚀

