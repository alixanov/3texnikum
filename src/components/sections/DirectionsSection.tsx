"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig, DirectionItem } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import DirectionModal from "../ui/DirectionModal";

export default function DirectionsSection() {
  const [selectedDirection, setSelectedDirection] = useState<DirectionItem | null>(null);

  return (
    <section id="yonalishlar" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Mutaxassisliklar"
          title="Ta’lim yo‘nalishlari"
          subtitle="Zamonaviy mehnat bozorida yuqori talabga ega 5 ta asosiy kasbiy soha"
        />

        {/* 5 Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.directions.map((item, index) => {
            const isFeatured = index < 2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-sky-300 dark:hover:border-sky-500 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured && index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/90 dark:text-sky-300 backdrop-blur-md text-slate-800 shadow-sm border dark:border-slate-700">
                      <Sparkles className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Title overlay at image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Amaliyotga yo‘naltirilgan
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedDirection(item)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:text-white bg-sky-50 dark:bg-sky-950/60 group-hover:bg-sky-600 rounded-xl transition-all duration-200 shadow-sm border border-sky-100 dark:border-sky-900/40"
                    >
                      <span>Batafsil</span>
                      <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Specialty Detailed Modal */}
      <DirectionModal
        direction={selectedDirection}
        onClose={() => setSelectedDirection(null)}
      />
    </section>
  );
}
