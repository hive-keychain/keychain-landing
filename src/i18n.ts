// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import es from './translations/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: 'en', // Idioma por defecto
  fallbackLng: 'en', // Idioma de respaldo si no se encuentra una traducción
  interpolation: {
    escapeValue: false, // React ya se encarga de escapar los valores
  },
});

export default i18n;