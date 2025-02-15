// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import en from '../translations/en.json';
import es from '../translations/es.json';
import fr from '../translations/fr.json';
import zh from '../translations/zh.json';

// Definición de tipos
type Language = 'es' | 'en' | 'fr' | 'zh';
const translations = { en, es, fr, zh };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Creación del contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Proveedor del contexto de idioma
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Asegurarnos de que estamos en el navegador
    if (typeof window !== 'undefined') {
      // Obtener el idioma del navegador y limpiarlo
      const browserLang = navigator.language.toLowerCase().split('-')[0];
      // Verificar si el idioma está entre los soportados
      return (browserLang === 'es' || browserLang === 'en' || browserLang === 'fr' || browserLang === 'zh') ? browserLang as Language : 'en';
    }
    return 'en'; // Valor por defecto si no estamos en el navegador
  });

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation || key; // Devuelve la traducción o la clave si no existe
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};

// Componente selector de idioma
export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const flags = {
    en: '🇺🇸',
    es: '🇪🇸',
    fr: '🇫🇷',
    zh: '🇨🇳'
  };

  // Filtrar los idiomas disponibles excluyendo el idioma actual
  const availableLanguages = Object.entries(flags).filter(([lang]) => lang !== language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
      >
        <span className="text-2xl">{flags[language]}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-12 bg-white rounded-lg shadow-xl border border-gray-100">
          {availableLanguages.map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang as Language);
                setIsOpen(false);
              }}
              className={`flex justify-center w-full px-2 py-2 hover:bg-gray-50 text-2xl`}
            >
              {flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};