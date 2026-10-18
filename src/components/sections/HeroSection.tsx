"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  const quickStats = [
    { value: t.hero.stats.practiceValue, label: t.hero.stats.practiceLabel },
    { value: t.hero.stats.specialtiesValue, label: t.hero.stats.specialtiesLabel },
    { value: t.hero.stats.formatValue, label: t.hero.stats.formatLabel },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between items-center bg-slate-950 overflow-hidden pt-16 sm:pt-20 lg:pt-20 pb-4 sm:pb-6"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src={siteConfig.hero.bgImage}
          alt={t.common.siteName}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
        />
        {/* Layered gradients for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(14,165,233,0.2),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 backdrop-blur-md text-sky-300 text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3 lg:mb-4 shadow-inner"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl xs:text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-balance drop-shadow-sm"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed text-balance max-w-2xl mx-auto"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons - Compact side-by-side on mobile, centered row on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3.5 sm:mt-5 lg:mt-6 grid grid-cols-2 gap-2 max-w-xs mx-auto sm:flex sm:flex-row sm:items-center sm:justify-center sm:max-w-none sm:gap-3"
          >
            <a
              href="#yonalishlar"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-md shadow-sky-600/30 transition-all active:scale-[0.98] text-center"
            >
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden sm:inline" />
            </a>

            <a
              href="#aloqa"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl backdrop-blur-md transition-all active:scale-[0.98] text-center"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
              <span className="truncate">{t.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* Key Quick Indicators with tight responsive cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3.5 sm:mt-5 lg:mt-6 pt-3 sm:pt-4 border-t border-white/10 grid grid-cols-3 gap-1.5 sm:gap-3 max-w-2xl mx-auto"
          >
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className="p-1.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center flex flex-col justify-center min-w-0"
              >
                <span className="block text-sm xs:text-base sm:text-xl lg:text-2xl font-black text-white truncate">
                  {stat.value}
                </span>
                <span className="block text-[8px] xs:text-[9px] sm:text-xs text-slate-400 mt-0.5 font-medium leading-tight truncate">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Smooth bottom indicator with link to #haqimizda */}
      <div className="relative z-10 pb-2 hidden lg:flex">
        <a
          href="#haqimizda"
          aria-label={t.common.learnMore}
          className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group focus:outline-none"
        >
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold group-hover:text-sky-400 transition-colors">
            {t.common.learnMore}
          </span>
          <div className="w-4 h-6 rounded-full border border-slate-500/50 flex items-start justify-center p-0.5 group-hover:border-sky-400 transition-colors">
            <div className="w-1 h-1.5 bg-sky-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
