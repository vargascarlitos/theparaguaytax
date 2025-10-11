# 📸 IMÁGENES REQUERIDAS - TheParaguayTax

## 🎯 SECCIÓN HERO (MODIFICADA - LISTO PARA USAR)

### Ubicación de las imágenes:
```
📁 /src/assets/images/
```

### Imágenes necesarias:

| # | Nombre del Archivo | Descripción | Dimensiones | Formato |
|---|-------------------|-------------|-------------|---------|
| 1 | **hero-terere.png** | Tereré tradicional paraguayo | 800×600px | PNG |
| 2 | **hero-asuncion.png** | Vista de la ciudad de Asunción | 800×600px | PNG |
| 3 | **hero-asado.png** | Asado o comida paraguaya | 800×600px | PNG |

---

## 📝 INSTRUCCIONES DE USO

### Paso 1: Preparar tus imágenes
1. Renombra tus fotos con los nombres EXACTOS de arriba
2. Asegúrate que sean formato PNG
3. Optimiza el peso (máximo 300KB por imagen)
   - Puedes usar: https://tinypng.com/
   - O: https://squoosh.app/

### Paso 2: Copiar las imágenes
```bash
# Copia tus 3 imágenes a esta carpeta:
/src/assets/images/

# Debe quedar así:
/src/assets/images/
  ├── hero-terere.png
  ├── hero-asuncion.png
  └── hero-asado.png
```

### Paso 3: Verificar
Una vez copiadas las imágenes, el sitio las cargará automáticamente.

```bash
# Ejecuta el servidor para ver los cambios:
npm run dev
```

Abre http://localhost:4321 y verás tus imágenes en la sección Hero.

---

## ✅ ESTADO ACTUAL

- ✅ **Hero.astro** - MODIFICADO (usando imágenes locales)
- ⏳ **Team.astro** - Pendiente (fotos del equipo)
- ⏳ **Process.astro** - Pendiente (2 imágenes)
- ⏳ **Contact.astro** - Pendiente (3 imágenes)

---

## 🔄 PRÓXIMAS SECCIONES

¿Quieres que modifique las otras secciones también? Dime y las actualizo con nombres de archivos específicos.

### Nombres sugeridos para las otras secciones:

**Team (Equipo):**
- `team-carlos.png`
- `team-brenda.png`
- `team-luna.png`

**Process (Proceso):**
- `process-highway.png` (carretera/infraestructura)
- `process-development.png` (desarrollo/paisaje)

**Contact (Contacto):**
- `contact-sunset.png` (atardecer/naturaleza)
- `contact-food.png` (comida tradicional)
- `contact-culture.png` (cultura/arquitectura)

---

## 💡 TIPS

### Formatos aceptados:
- ✅ `.png` (ACTIVO - mejor calidad, soporta transparencia)
- ✅ `.jpg` / `.jpeg` (alternativa, menor peso)
- ✅ `.webp` (mejor compresión, pero cambia el import)

### Si cambias a otro formato:
**Para JPG:**
```astro
import heroTerere from '../assets/images/hero-terere.jpg';
```

**Para WebP:**
```astro
import heroTerere from '../assets/images/hero-terere.webp';
```

### Dimensiones recomendadas:
- **Mínimo:** 800×600px
- **Óptimo:** 1200×900px
- **Máximo:** 1600×1200px

### Peso recomendado:
- **Por imagen PNG:** 200-300KB
- **Si conviertes a JPG:** 150-200KB (calidad 80-85%)

---

## 🆘 ¿Problemas?

### Error: "Cannot find module"
- Verifica que los nombres sean EXACTOS (hero-terere.png, no hero_terere.png)
- Verifica que estén en `/src/assets/images/`
- Verifica la extensión (.png, no .PNG)

### Imágenes no se ven
- Ejecuta `npm run dev` de nuevo
- Limpia caché del navegador (Ctrl+F5 o Cmd+Shift+R)

### Imágenes muy pesadas
- Usa TinyPNG o Squoosh para optimizar
- Reduce dimensiones si son muy grandes

---

**¡Listo! Una vez tengas las 3 imágenes, solo cópialas y funcionará automáticamente.** 🚀

