"use client";

import React, { useEffect } from "react";
import {
  X,
  Phone,
  Send,
  GraduationCap,
  ChevronRight,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#haqimizda" },
    { label: t.nav.directions, href: "#yonalishlar" },
    { label: t.nav.features, href: "#imkoniyatlar" },
    { label: t.nav.gallery, href: "#galereya" },
    { label: t.nav.contact, href: "#aloqa" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto transition-colors duration-300">
        {/* Top & Main Section */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Header Bar: Logo, Site Name, Theme Toggle, Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5 min-w-0 pr-2">
              <div className="w-8 h-8 rounded-xl bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 flex items-center justify-center shrink-0 shadow-sm shadow-sky-600/25">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 truncate">
                  {t.common.republic}
                </span>
                <span className="font-black text-slate-900 dark:text-white text-xs tracking-tight truncate">
                  {t.common.siteShortName || t.common.siteName}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={t.common.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/70 dark:hover:bg-slate-800/70 rounded-xl transition-all group"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </nav>

          {/* Admission CTA Button */}
          <div className="mt-5 pt-3">
            <a
              href="#qabul"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-600 hover:bg-sky-500 active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md shadow-sky-600/25 transition-all text-center"
            >
              <span>{t.common.admissionBtn}</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Bottom Drawer Footer: Language Segmented Control & Contacts */}
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 space-y-3.5">
          {/* Sleek Segmented Language Switcher */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>Til / Язык / Language</span>
            </div>
            <LanguageSwitcher variant="segmented" />
          </div>

          {/* Direct Phone & Telegram */}
          <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs">
            <a
              href={`tel:${siteConfig.contact.phones[0].number}`}
              className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 py-1"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
              <span>{siteConfig.contact.phones[0].display}</span>
            </a>

            {siteConfig.contact.telegramUrl && (
              <a
                href={siteConfig.contact.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1.5 px-2.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-700 dark:text-sky-300 rounded-lg text-xs font-bold transition-colors border border-sky-500/20"
              >
                <Send className="w-3 h-3 text-sky-500" />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
