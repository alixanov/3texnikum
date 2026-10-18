"use client";

import React, { useEffect } from "react";
import { X, Phone, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, language } = useLanguage();

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
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto transition-colors duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">
                {t.common.republic}
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white text-sm tracking-tight">
                {t.common.siteName.toUpperCase()}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t.common.close}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Language Switcher in Mobile Drawer */}
          <div className="py-4 border-b border-slate-100 dark:border-slate-800">
            <LanguageSwitcher variant="full" />
          </div>

          {/* Theme Switcher Row */}
          <div className="py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {language === "uz" ? "Rejim" : language === "ru" ? "Тема" : "Theme"}:
            </span>
            <ThemeToggle showText />
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/60 dark:hover:bg-slate-800 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="#qabul"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-sky-600/20 transition-all text-center"
            >
              <span>{t.common.admissionBtn}</span>
            </a>
          </div>
        </div>

        {/* Bottom Contact details */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
            <span>{siteConfig.contact.region}</span>
          </div>
          <div className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400">
            {siteConfig.contact.phones.map((item, idx) => (
              <div key={item.number} className="flex items-center gap-3">
                {idx === 0 ? (
                  <Phone className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                ) : (
                  <span className="w-4 shrink-0" />
                )}
                <a
                  href={`tel:${item.number}`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-slate-900 dark:text-slate-200"
                >
                  {item.display}
                </a>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
            <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-sky-600 dark:hover:text-sky-400">
              {siteConfig.contact.email}
            </a>
          </div>
          {siteConfig.contact.telegramUrl && (
            <a
              href={siteConfig.contact.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-2 px-3 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 rounded-lg text-xs font-semibold hover:bg-sky-100 dark:hover:bg-sky-900 transition-colors border border-sky-100 dark:border-sky-800"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.admission.telegramCta}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
