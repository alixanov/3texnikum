"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, GraduationCap, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-100 dark:border-slate-800 py-3 sm:py-3.5"
            : "bg-slate-950/60 backdrop-blur-md py-4 sm:py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#hero"
              className="group flex items-center gap-2.5 sm:gap-3 transition-transform focus:outline-none min-w-0 max-w-[65%] sm:max-w-none"
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  isScrolled
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "bg-white text-slate-900 shadow-md"
                }`}
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`text-[10px] sm:text-xs uppercase tracking-wider font-semibold truncate ${
                    isScrolled ? "text-sky-600 dark:text-sky-400" : "text-sky-300"
                  }`}
                >
                  O‘zbekiston Respublikasi
                </span>
                <span
                  className={`font-black tracking-tight text-xs sm:text-base leading-tight truncate ${
                    isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                  }`}
                >
                  NAMANGAN 3-SONLI TEXNIKUM
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors ${
                    isScrolled
                      ? "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA, Theme Toggle & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Theme Toggle Button (With proper hero transparency handling) */}
              <ThemeToggle isTransparent={!isScrolled} />

              <a
                href="#qabul"
                className={`hidden md:inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 xl:py-2.5 text-xs xl:text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 ${
                  isScrolled
                    ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20"
                    : "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25"
                }`}
              >
                <span>Qabul haqida ma’lumot</span>
                <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 opacity-80" />
              </a>

              {/* Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-2 sm:p-2.5 rounded-xl transition-all active:scale-95 ${
                  isScrolled
                    ? "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/15 bg-white/5"
                }`}
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
