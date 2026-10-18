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
      className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-slate-950 overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-500/10 border border-sky-400/25 backdrop-blur-md text-sky-300 text-[11px] sm:text-sm font-semibold mb-6 shadow-inner"
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
            <span className="truncate">{t.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.12] text-balance drop-shadow-sm"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed text-balance max-w-2xl mx-auto"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
          >
            <a
              href="#yonalishlar"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              href="#aloqa"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* Key Quick Indicators with responsive touch cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 sm:mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto"
          >
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className="p-2.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm text-center flex flex-col justify-center min-w-0"
              >
                <span className="block text-base xs:text-2xl sm:text-3xl font-black text-white truncate">
                  {stat.value}
                </span>
                <span className="block text-[10px] xs:text-xs text-slate-400 mt-1 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Smooth bottom indicator without layout overlap */}
          <div className="mt-8 hidden lg:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
              {t.common.learnMore}
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-sky-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
