"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, BookOpen, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="haqimizda" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={siteConfig.about.sectionBadge}
          title={siteConfig.about.title}
          subtitle="Ta’lim jarayoniga zamonaviy yondashuv va kasbiy amaliyot uyg‘unligi"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Education Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60 dark:shadow-slate-950/80 aspect-[4/3] border border-slate-100 dark:border-slate-800">
              <Image
                src={siteConfig.about.image}
                alt="Namangan 3-sonli texnikumida o‘quv jarayoni va amaliy mashg‘ulotlar"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Amaliy ta’lim muhiti
                </span>
                <p className="text-sm font-medium text-slate-200 leading-snug">
                  Nazariy bilimlarni mustahkamlash uchun tashkil etilgan zamonaviy ustaxonalar
                </p>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-100 dark:bg-sky-950/40 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-slate-100 dark:bg-slate-800/40 rounded-3xl -z-10" />
          </motion.div>

          {/* Right Column: Exact Prompt Description & Institutional Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* The official description provided verbatim in prompt */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-50/70 to-slate-50 dark:from-slate-800/80 dark:to-slate-850 border border-sky-100/80 dark:border-slate-700/60 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-600/20">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    Bizning maqsadimiz
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal text-base sm:text-lg">
                    «{siteConfig.about.leadText}»
                  </p>
                </div>
              </div>
            </div>

            {/* Educational values cards */}
            <div className="space-y-4">
              {siteConfig.about.values.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-800/40 hover:border-sky-200 dark:hover:border-sky-500/50 hover:bg-slate-50/80 dark:hover:bg-slate-800/80 transition-all flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#yonalishlar"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 group"
              >
                <span>Mavjud yo‘nalishlar bilan tanishish</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
