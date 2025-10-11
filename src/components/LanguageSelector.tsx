import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<'en' | 'es'>('en');

  useEffect(() => {
    // Get language from current path
    const pathLang = window.location.pathname.split('/')[1]; // Get first path segment

    if (pathLang === 'es' || pathLang === 'en') {
      setCurrentLang(pathLang);
      localStorage.setItem('lang', pathLang);
    } else {
      // Default to English for root path
      setCurrentLang('en');
      localStorage.setItem('lang', 'en');
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'es') => {
    // Redirect to the appropriate language route
    window.location.href = `/${lang}`;
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <Globe className="w-4 h-4 text-gray-600" />
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'en'
            ? 'bg-secondary text-white font-semibold'
            : 'text-gray-600 hover:text-secondary'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400">/</span>
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'es'
            ? 'bg-secondary text-white font-semibold'
            : 'text-gray-600 hover:text-secondary'
        }`}
      >
        ES
      </button>
    </div>
  );
}

