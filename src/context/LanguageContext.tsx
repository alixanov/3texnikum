"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback } from "react";
import { Language, Translations, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const STORAGE_KEY = "3tex_lang";
const CHANGE_EVENT = "3tex_language_change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "uz" || saved === "ru" || saved === "en") {
      return saved;
    }
  } catch {}
  return "uz";
}

function getServerSnapshot(): Language {
  return "uz";
}

const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
  t: translations.uz,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch {}
  }, []);

  const t = translations[language] || translations.uz;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
