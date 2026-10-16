"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 lg:py-0"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.hero.bgImage}
          alt="Namangan 3-sonli texnikumi o‘quv muhiti"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
        />
        {/* Deep blue/black educational ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md text-sky-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner"
          >
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>{siteConfig.hero.badge}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] text-balance"
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed text-balance"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#yonalishlar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-sky-500/40 transition-all hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5" />
              <span>{siteConfig.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#aloqa"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              <PhoneCall className="w-5 h-5 text-sky-400" />
              <span>{siteConfig.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* Key Quick Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
          >
            {siteConfig.hero.quickStats.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold">
          Pastga
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-sky-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
