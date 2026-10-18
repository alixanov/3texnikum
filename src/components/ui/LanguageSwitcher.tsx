"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/data/translations";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className={`flex flex-col gap-2 ${className}`}>
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          <Globe className="w-3.5 h-3.5 text-sky-500" />
          <span>Til / Язык / Language</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 border-sky-300 dark:border-sky-800 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
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

  // Refined Segmented Control for Header
  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`relative min-w-[32px] sm:min-w-[36px] h-7 sm:h-7.5 px-2 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors duration-200 cursor-pointer select-none ${
              isActive
                ? "text-sky-600 dark:text-sky-300"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="activeLangPill"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                className="absolute inset-0 rounded-lg bg-white dark:bg-slate-700/90 shadow-xs border border-slate-200/60 dark:border-slate-600/50"
              />
            )}
            <span className="relative z-10">{lang.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
