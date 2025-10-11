# TheParaguayTax.com

Landing page profesional para servicios de residencia fiscal y contabilidad en Paraguay.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🌍 Multi-idioma (Español/Inglés)
- 📱 Integración con WhatsApp
- 💌 Formulario de contacto
- 🎨 Diseño con Tailwind CSS
- ⚡ Construido con Astro
- 🔧 Componentes React para interactividad

## 📋 Requisitos

- Node.js 18 o superior
- npm o pnpm

## 🛠️ Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## 🏃‍♂️ Comandos

| Comando           | Acción                                         |
|-------------------|------------------------------------------------|
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa local del sitio construido        |

## 📁 Estructura del Proyecto

```
/
├── public/              # Archivos estáticos
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── ContactForm.tsx
│   │   ├── LanguageSelector.tsx
│   │   └── WhatsAppButton.astro
│   ├── i18n/           # Sistema de traducciones
│   │   ├── es.json
│   │   ├── en.json
│   │   └── utils.ts
│   ├── layouts/        # Layouts de página
│   │   └── Layout.astro
│   ├── pages/          # Páginas del sitio
│   │   └── index.astro
│   ├── sections/       # Secciones de la landing
│   │   ├── Hero.astro
│   │   ├── Pricing.astro
│   │   ├── Team.astro
│   │   ├── Process.astro
│   │   └── Contact.astro
│   └── styles/         # Estilos globales
│       └── global.css  # Incluye tema de Tailwind v4
└── astro.config.mjs    # Configuración de Astro
```

## 🎨 Paleta de Colores

La paleta de colores está definida en `src/styles/global.css` usando el sistema `@theme` de Tailwind CSS v4:

- **Primary (Naranja/Coral):** `#FF6B4A` - CTAs y acentos
- **Secondary (Azul Paraguay):** `#0052B4` - Header, enlaces
- **Accent (Rojo Paraguay):** `#D52B1E` - Detalles complementarios
- **Dark:** `#1A1A1A` - Textos principales
- **Gray:** `#6B7280` - Textos secundarios

Para modificar los colores, edita las variables en la sección `@theme` del archivo `src/styles/global.css`.

## 🌐 Cambiar Idioma

El idioma se puede cambiar usando el selector en el navbar. El idioma seleccionado se guarda en localStorage y se aplica mediante query params (?lang=es o ?lang=en).

## 📞 Configuración de WhatsApp

El botón de WhatsApp está configurado para el número: +595 985 777252

Para cambiar el número, edita el archivo `src/components/WhatsAppButton.astro`:

```astro
const whatsappNumber = "595985777252"; // Cambiar aquí
```

## 📧 Configuración del Formulario de Contacto

El formulario utiliza Formspree. Para configurarlo:

1. Crea una cuenta en [Formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Reemplaza `YOUR_FORM_ID` en `src/components/ContactForm.tsx` con tu ID de Formspree

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Astro
3. Deploy automático

### Netlify

1. Conecta tu repositorio a Netlify
2. Comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Otros servicios

El sitio se construye en la carpeta `./dist/` y puede desplegarse en cualquier servidor de archivos estáticos.

## 📝 Personalización

### Agregar nuevas traducciones

Edita los archivos `src/i18n/es.json` y `src/i18n/en.json` para agregar o modificar textos.

### Modificar colores

Edita la sección `@theme` en `src/styles/global.css` para cambiar la paleta de colores. Tailwind CSS v4 usa este nuevo sistema de configuración basado en CSS.

### Agregar imágenes

Coloca tus imágenes en la carpeta `src/assets/images/` y actualiza las referencias en los componentes.

## 🤝 Contacto

- **Empresa:** DASE GROUP E.A.S.
- **RUC:** 80124544-3
- **Dirección:** Avda. Moises 1986 - Capiatá
- **Teléfono:** +595 985 777252
- **Email:** dasegrouppyy@gmail.com
- **Instagram:** @ParaguayTaxes

## 📄 Licencia

© 2025 TheParaguayTax.com - DASE GROUP E.A.S. Todos los derechos reservados.
