# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture Overview

This is an **Astro 5** static site with **React 19** for interactive components and **Tailwind CSS 4** for styling. It's a bilingual (English/Spanish) landing page for tax and residency services in Paraguay.

### Key Directories

- `src/pages/` - Route-based pages; language routing via `/en/` and `/es/` prefixes
- `src/sections/` - Full-width page sections composing the homepage (HeroSlider, Pricing, Testimonials, etc.)
- `src/components/` - Reusable components; React components use `.tsx`, Astro uses `.astro`
- `src/i18n/` - Translation system with `en.json`, `es.json`, and `utils.ts`
- `src/layouts/Layout.astro` - Master layout with sticky nav, mobile menu, footer, and WhatsApp button

### I18n System

Translations are managed via JSON files in `/src/i18n/`:

```typescript
import { getTranslations } from '../i18n/utils';
const t = getTranslations('en'); // or 'es'
// Access: t.nav.home, t.pricing.title, t.hero.subtitle, etc.
```

Keys are organized by section. When adding new text, add keys to **both** `en.json` and `es.json`.

### React Components

Three interactive React components use client directives:
- `LanguageSelector.tsx` - Language switcher (`client:idle`)
- `ResidencyAccordion.tsx` - Expandable pricing plans (`client:load`)
- `ContactForm.tsx` - Formspree integration form

### Page Pattern

```astro
---
import Layout from '../layouts/Layout.astro';
import { getTranslations } from '../i18n/utils';

const lang = 'en'; // or determine from URL
const t = getTranslations(lang);
---

<Layout title={t.meta.title} lang={lang}>
  <!-- sections here -->
</Layout>
```

### Section Pattern

Sections accept `lang` prop, fetch translations internally, use `id` for anchor navigation, and follow a gradient background + white card visual pattern.

### Color Palette (Tailwind CSS 4 theme)

Defined in `src/styles/global.css` via `@theme`:
- `primary`: #E64A2E (orange-red) - CTAs
- `secondary`: #0052B4 (blue) - Header, links
- `accent`: #D52B1E (red) - Accents

### WhatsApp Integration

All CTAs link to WhatsApp with pre-filled messages. The number is configured in `WhatsAppButton.astro` and messages use translations.

### Creating Content

**New blog article**: Create file in `/src/pages/blog/` (English) or `/src/pages/es/blog/` (Spanish), import Layout, use prose styling.

**New section**: Create in `/src/sections/`, accept `lang` prop, add to homepage index files.

**New service page**: Create in `/src/pages/`, follow existing service page patterns.
