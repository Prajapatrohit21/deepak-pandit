import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('mak_lang') || 'hi';
  });

  useEffect(() => {
    localStorage.setItem('mak_lang', lang);
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = 'Mangal Dosh Puja Ujjain | Mangal Dosh Nivaran Pooja | Pandit Deepak Pandya';
    } else {
      document.title = 'मंगल दोष पूजा उज्जैन | मंगल दोष निवारण पूजा | पंडित दीपक पंड्या';
    }
  }, [lang]);

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
