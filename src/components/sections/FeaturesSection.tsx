"use client";

import React from "react";
import { GraduationCap, Cpu, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-7 h-7 text-sky-600 dark:text-sky-400" />;
      case "Cpu":
        return <Cpu className="w-7 h-7 text-sky-600 dark:text-sky-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-7 h-7 text-sky-600 dark:text-sky-400" />;
      case "Award":
        return <Award className="w-7 h-7 text-sky-600 dark:text-sky-400" />;
      default:
        return <Award className="w-7 h-7 text-sky-600 dark:text-sky-400" />;
    }
  };

  return (
    <section id="imkoniyatlar" className="py-20 md:py-28 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Imkoniyatlar"
          title="Nima uchun Namangan 3-sonli texnikumi?"
          subtitle="Talabalarning har tomonlama yetuk mutaxassis bo‘lib yetishishiga qaratilgan asosiy omillar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-500 hover:bg-gradient-to-b hover:from-white dark:hover:from-slate-800 hover:to-sky-50/40 dark:hover:to-sky-950/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-md shadow-slate-200/50 dark:shadow-slate-950/50 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(getIcon(feature.iconName), {
                    className: "w-7 h-7 group-hover:text-white transition-colors duration-300",
                  })}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                <span>0{index + 1} / Asosiy tamoyil</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
