"use client";

import React, { useState, useEffect } from "react";
import { Menu, GraduationCap, ArrowUpRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md dark:shadow-2xl dark:shadow-sky-950/50 border-b border-slate-200 dark:border-sky-500/30 py-2.5 sm:py-3"
            : "bg-white/85 dark:bg-slate-950/90 backdrop-blur-md shadow-sm dark:shadow-lg dark:shadow-black/40 border-b border-slate-200/80 dark:border-sky-500/20 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 sm:gap-3 transition-transform focus:outline-none min-w-0 max-w-[55%] sm:max-w-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-600 dark:bg-sky-500 text-white dark:text-slate-950 flex items-center justify-center shrink-0 shadow-md shadow-sky-600/25 dark:shadow-sky-500/30 transition-all group-hover:scale-105">
                <GraduationCap className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 truncate">
                  {t.common.republic}
                </span>
                <span className="font-black tracking-tight text-xs sm:text-base leading-tight text-slate-900 dark:text-white truncate">
                  {t.common.siteName.toUpperCase()}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-800/80 transition-all whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA, Language Switcher, Theme Toggle & Mobile Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Theme Toggle Button */}
              <ThemeToggle />

              <a
                href="#qabul"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs xl:text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400 text-white dark:text-slate-950 shadow-sky-600/20 dark:shadow-sky-500/30 whitespace-nowrap"
              >
                <span>{t.common.admissionBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl transition-all active:scale-95 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                aria-label="Menyuni ochish"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
