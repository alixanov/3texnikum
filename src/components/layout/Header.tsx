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
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 py-3.5"
            : "bg-slate-950/40 backdrop-blur-md py-4 sm:py-5 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <a
              href="#hero"
              className="group flex items-center gap-3 transition-transform focus:outline-none"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isScrolled
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                    : "bg-white text-slate-900 shadow-md"
                }`}
              >
                <GraduationCap className="w-5 h-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xs uppercase tracking-wider font-semibold ${
                    isScrolled ? "text-sky-600 dark:text-sky-400" : "text-sky-300"
                  }`}
                >
                  O‘zbekiston Respublikasi
                </span>
                <span
                  className={`font-black tracking-tight text-sm sm:text-base leading-tight ${
                    isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                  }`}
                >
                  NAMANGAN 3-SONLI TEXNIKUM
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isScrolled
                      ? "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTA, Theme Toggle & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              <a
                href="#qabul"
                className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm ${
                  isScrolled
                    ? "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20"
                    : "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/25"
                }`}
              >
                <span>Qabul haqida ma’lumot</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>

              {/* Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Menyuni ochish"
              >
                <Menu className="w-6 h-6" />
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
