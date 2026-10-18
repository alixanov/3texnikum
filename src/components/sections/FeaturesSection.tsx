"use client";

import React from "react";
import { GraduationCap, Cpu, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  GraduationCap,
  Cpu,
  TrendingUp,
  Award,
} as const;

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="imkoniyatlar" className="py-16 sm:py-24 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.features.badge}
          title={t.features.title}
          subtitle={t.features.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.features.items.map((feature, index) => {
            const base = siteConfig.features.find((f) => f.id === feature.id);
            const iconName = (base?.iconName || "Award") as keyof typeof iconMap;
            const IconComponent = iconMap[iconName] || Award;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-500 hover:bg-gradient-to-b hover:from-white dark:hover:from-slate-800 hover:to-sky-50/40 dark:hover:to-sky-950/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-md shadow-slate-200/50 dark:shadow-slate-950/50 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-sky-600 dark:text-sky-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  <span>0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
