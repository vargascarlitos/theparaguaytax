import es from './es.json';
import en from './en.json';

export type Language = 'es' | 'en';

const translations = {
  es,
  en,
};

export function getTranslations(lang: Language = 'en') {
  return translations[lang] || translations.en;
}

export function getLangFromUrl(url: URL): Language {
  // Primero intenta desde URL
  const params = new URLSearchParams(url.search);
  const urlLang = params.get('lang');
  
  if (urlLang === 'es' || urlLang === 'en') {
    return urlLang;
  }
  
  // Si no hay en URL, intenta desde localStorage (solo en cliente)
  if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'es' || storedLang === 'en') {
      return storedLang;
    }
  }
  
  // Por defecto: inglés
  return 'en';
}

