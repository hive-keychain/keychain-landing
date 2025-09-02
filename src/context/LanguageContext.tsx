import { ChevronDown } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import de from "../translations/de.json";
import en from "../translations/en.json";
import es from "../translations/es.json";
import fr from "../translations/fr.json";
import tw from "../translations/tw.json";
import zh from "../translations/zh.json";

// Definición de tipos
type Language = "es" | "en" | "fr" | "zh" | "de";
const translations = { en, es, fr, tw, zh, de };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Creación del contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Proveedor del contexto de idioma
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.toLowerCase().split("-")[0];
      return browserLang === "es" ||
        browserLang === "en" ||
        browserLang === "fr" ||
        browserLang === "tw" ||
        browserLang === "de" ||
        browserLang === "zh"
        ? (browserLang as Language)
        : "en";
    }
    return "en";
  });

  const t = (key: string): string => {
    const translation = translations[language][key];
    return translation || key;
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
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};

interface LanguageSelectorProps {
  isOpen?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
}

// Componente selector de idioma
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  isOpen = false,
  onToggle,
}) => {
  const { language, setLanguage } = useLanguage();

  const flags = {
    en: "🇺🇸",
    es: "🇪🇸",
    fr: "🇫🇷",
    tw: "🇹🇼",
    zh: "🇨🇳",
    de: "🇩🇪",
  };

  const availableLanguages = Object.entries(flags).filter(
    ([lang]) => lang !== language
  );

  const handleLanguageChange = (lang: Language, e: React.MouseEvent) => {
    e.stopPropagation();
    setLanguage(lang);
    if (onToggle) onToggle(e);
  };

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
      >
        <span className="text-2xl">{flags[language]}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-white rounded-lg shadow-xl border border-gray-100">
          {/* Mobile: Horizontal layout */}
          <div className="flex flex-row gap-1 px-2 xl:hidden">
            {availableLanguages.map(([lang, flag]) => (
              <button
                key={lang}
                onClick={(e) => handleLanguageChange(lang as Language, e)}
                className="flex justify-center p-2 hover:bg-gray-50 text-2xl rounded transition-colors"
              >
                {flag}
              </button>
            ))}
          </div>

          {/* Desktop: Vertical layout */}
          <div className="hidden xl:flex flex-col gap-1 px-2">
            {availableLanguages.map(([lang, flag]) => (
              <button
                key={lang}
                onClick={(e) => handleLanguageChange(lang as Language, e)}
                className="flex justify-center p-2 hover:bg-gray-50 text-2xl rounded transition-colors"
              >
                {flag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
