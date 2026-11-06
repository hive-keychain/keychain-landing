import { ChevronDown } from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import de from "../translations/de.json";
import en from "../translations/en.json";
import es from "../translations/es.json";
import fr from "../translations/fr.json";
import tw from "../translations/tw.json";
import zh from "../translations/zh.json";

// Localization scaffolding, following the current landing's pattern
// (hive-keychain/keychain-landing, src/context/LanguageContext.tsx):
// flat dot-namespaced keys in one JSON per language under
// src/translations/, a context provider, a t() lookup and a flag
// selector. Same six languages as the current landing: en, es, fr,
// de, zh (Simplified Chinese) and tw (Traditional Chinese).
//
// Differences from the current landing, both deliberate:
// - "tw" is part of the Language type (theirs omits it by mistake,
//   although tw.json and its flag exist there).
// - t() falls back to English before falling back to the raw key,
//   so a partially translated file never shows key names to users.

export type Language = "en" | "es" | "fr" | "de" | "zh" | "tw";

type Dictionary = Record<string, string>;

const translations: Record<Language, Dictionary> = {
  en: en as Dictionary,
  es: es as Dictionary,
  fr: fr as Dictionary,
  de: de as Dictionary,
  zh: zh as Dictionary,
  tw: tw as Dictionary,
};

export const LANGUAGES: { code: Language; flag: string; name: string }[] = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "zh", flag: "🇨🇳", name: "中文 (简体)" },
  { code: "tw", flag: "🇹🇼", name: "中文 (繁體)" },
];

function detectLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const raw = navigator.language.toLowerCase();
  if (raw.startsWith("zh")) {
    // zh-TW / zh-HK / zh-MO use Traditional Chinese in this project.
    return /-(tw|hk|mo)\b/.test(raw) || raw.includes("hant")
      ? "tw"
      : "zh";
  }
  const primary = raw.split("-")[0];
  return primary === "es" ||
    primary === "fr" ||
    primary === "de" ||
    primary === "en"
    ? (primary as Language)
    : "en";
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang =
      language === "tw" ? "zh-TW" : language === "zh" ? "zh-CN" : language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Language selector: flag dropdown, styled with this landing's own
// design tokens (.lang-* rules in src/index.css, so it follows the
// site theme, dark scheme included) rather than generic utilities.
export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];
  const availableLanguages = LANGUAGES.filter((l) => l.code !== language);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="lang" ref={rootRef}>
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="lang-btn"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="lang-flag">{current.flag}</span>
        <ChevronDown size={16} className="chev" />
      </button>

      {isOpen && (
        <div className="lang-menu" role="menu">
          {availableLanguages.map(({ code, flag, name }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className="lang-item"
              role="menuitem"
            >
              <span className="lang-flag">{flag}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
