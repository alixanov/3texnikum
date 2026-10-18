"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "@/data/translations";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  variant?: "single" | "segmented" | "full";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "single",
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
                className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
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

  // Minimal, Professional Single Button with Floating Dropdown
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 h-9 sm:h-10 rounded-xl transition-all duration-200 border active:scale-95 bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 shadow-sm text-xs font-semibold cursor-pointer select-none"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Tilni tanlash / Choose language"
      >
        <Globe className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
        <span className="font-bold tracking-wide">{currentLang.shortLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-sky-600 dark:text-sky-400" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-44 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-950/10 dark:shadow-slate-950/50 z-50 flex flex-col gap-1 backdrop-blur-xl"
            role="listbox"
          >
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold shadow-2xs"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-medium"
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {isActive && (
                    <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
