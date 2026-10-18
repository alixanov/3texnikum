"use client";

import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  BookOpen,
  Award,
  ArrowRight,
  GraduationCap,
  Wrench,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const valueIcons = [Wrench, GraduationCap, Users];

  return (
    <section
      id="haqimizda"
      className="rounded-t-[32px] sm:rounded-t-[48px] -mt-6 sm:-mt-8 relative z-20 pt-10 pb-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden shadow-2xl border-t border-slate-200/80 dark:border-slate-800"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle mobile sheet pull handle */}
        <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 sm:hidden" />

        <SectionHeading
          badge={t.about.badge}
          title={t.about.title}
          subtitle={t.hero.subheadline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-10 sm:mt-14">
          {/* Left Column: Visual Showcase & Embedded Metrics (Balanced Height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-slate-950/60 border border-slate-200/80 dark:border-slate-800 bg-slate-900 h-full min-h-[480px] lg:min-h-[580px] flex flex-col justify-between group">
              {/* Background Image */}
              <Image
                src={siteConfig.about.image}
                alt={t.about.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
              />

              {/* Gradient Overlays for readable text and depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/40 pointer-events-none" />

              {/* Top floating badge */}
              <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-sky-700 dark:text-sky-300 text-xs font-semibold shadow-md border border-white/20 dark:border-slate-700/50">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  {t.hero.badge}
                </span>
              </div>

              {/* Bottom metric cards & caption */}
              <div className="relative z-10 p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white">
                    <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                      {t.hero.stats.practiceValue}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      {t.hero.stats.practiceLabel}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white">
                    <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                      {t.hero.stats.specialtiesValue}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">
                      {t.hero.stats.specialtiesLabel}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-slate-200">
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    {t.features.items[0]?.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission and Structured Educational Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Mission statement - refined and integrated */}
            <div className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    <span>{t.about.title}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-normal text-base sm:text-lg">
                    «{t.about.leadText}»
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Educational Values */}
            <div className="space-y-3.5">
              {t.about.values.map((item, index) => {
                const IconComponent = valueIcons[index] || CheckCircle2;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-800/50 hover:border-sky-300 dark:hover:border-sky-500/40 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/40 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-sky-500 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#yonalishlar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-200 group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#qabul"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 font-semibold text-sm transition-all duration-200"
              >
                <span>{t.common.admissionBtn}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
