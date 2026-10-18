"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages, Language } from "@/data/translations";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "segmented" | "full";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "segmented",
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "full") {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          <Globe className="w-3.5 h-3.5 text-sky-500" />
          <span>Tilni tanlang / Выберите язык</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 border-sky-600 dark:border-sky-500 shadow-sm shadow-sky-600/30"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-500"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Segmented control for Header
  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-1.5 pr-0.5 text-slate-400 dark:text-slate-500 hidden sm:flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`relative px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white dark:bg-sky-500 text-sky-600 dark:text-slate-950 shadow-sm font-black scale-[1.02]"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>{lang.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
