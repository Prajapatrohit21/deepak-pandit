// ============================================================
// LanguageContext.jsx — Global language state (hi/en)
// ============================================================
import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Restore from localStorage, default to 'hi'
    return localStorage.getItem('mak_lang') || 'hi';
  });

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem('mak_lang', lang);
    // Update <html lang> attribute for SEO
    document.documentElement.lang = lang;
    // Update <title> based on language
    if (lang === 'en') {
      document.title = 'Mahadev Anushthan Kendra | Mangal Dosh Puja Ujjain | Pandit Deepak Pandya';
    } else {
      document.title = 'मंगल दोष पूजन केंद्र | उज्जैन | वैदिक पंडित दीपक पंड्या';
    }
  }, [lang]);

  /** Helper: get localized string from a { hi, en } object */
  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] ?? obj['hi'] ?? '';
  };

  const toggleLang = () => setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export default LanguageContext;
