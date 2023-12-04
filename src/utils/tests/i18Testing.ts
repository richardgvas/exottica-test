import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import spanishLiterals from "../../translations/es.json";
import englishLiterals from "../../translations/en.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  // have a common namespace used around the full app
  ns: ["translationsNS"],
  defaultNS: "translationsNS",

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    es: {
      translation: spanishLiterals,
    },
    en: {
      translation: englishLiterals,
    },
  },
});

export default i18n;
