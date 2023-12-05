import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import spanishLiterals from "./translations/es.json";
import englishLiterals from "./translations/en.json";
import App from "./App.tsx";
import "./App.css";

i18next.use(LanguageDetector).init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  fallbackLng: "en",
  debug: true,
  // Using simple hardcoded resources for simple example
  resources: {
    es: {
      translation: spanishLiterals,
    },
    en: {
      translation: englishLiterals,
    },
  },
});

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
