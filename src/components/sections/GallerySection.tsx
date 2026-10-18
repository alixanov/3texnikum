"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Info,
  Sparkles,
  BookOpen,
  Monitor,
  Wrench,
  Utensils,
  Scissors,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import GalleryLightbox from "../ui/GalleryLightbox";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("Barchasi");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "Barchasi",
    "O‘quv jarayoni",
    "Kompyuter sinflari",
    "Avtomobil ustaxonasi",
    "Oshpazlik",
    "Moda va tikuvchilik",
    "Talabalar hayoti",
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    "Barchasi": <Sparkles className="w-3.5 h-3.5" />,
    "O‘quv jarayoni": <BookOpen className="w-3.5 h-3.5" />,
    "Kompyuter sinflari": <Monitor className="w-3.5 h-3.5" />,
    "Avtomobil ustaxonasi": <Wrench className="w-3.5 h-3.5" />,
    "Oshpazlik": <Utensils className="w-3.5 h-3.5" />,
    "Moda va tikuvchilik": <Scissors className="w-3.5 h-3.5" />,
    "Talabalar hayoti": <Users className="w-3.5 h-3.5" />,
  };

  // Repeat categories 3 times per track to ensure wide screen coverage
  const trackItems = [...categories, ...categories, ...categories];

  const filteredItems =
    activeCategory === "Barchasi"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (itemIndex: number) => {
    const targetItem = filteredItems[itemIndex];
    const globalIdx = siteConfig.gallery.findIndex((i) => i.id === targetItem.id);
    setLightboxIndex(globalIdx !== -1 ? globalIdx : 0);
  };

  return (
    <section id="galereya" className="py-16 sm:py-24 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Foto galereya"
          title="Texnikum hayotidan lavhalar"
          subtitle="Nazariy darslar, amaliy mashg‘ulotlar, zamonaviy ustaxonalar va faol talabalik damlari"
        />

        {/* Continuous Running Marquee Ribbon (100% Seamless Infinite Loop) */}
        <div className="group-marquee relative w-full overflow-hidden mb-10 sm:mb-14 py-2 select-none">
          {/* Edge gradient fade masks for smooth tape effect */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-slate-50/90 dark:via-slate-950/90 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-950 via-slate-50/90 dark:via-slate-950/90 to-transparent z-20" />

          {/* Continuous Twin Tracks: Track 1 & Track 2 (Zero-gap, mathematically seamless infinite loop) */}
          <div className="flex w-max gap-3">
            {/* Track 1 */}
            <div className="animate-marquee-seamless flex items-center">
              {trackItems.map((cat, i) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={`t1-${cat}-${i}`}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`group shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-600/30 scale-105 border border-sky-400/40"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-md hover:scale-[1.02]"
                    }`}
                  >
                    <span
                      className={`${
                        isActive
                          ? "text-sky-200"
                          : "text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform"
                      }`}
                    >
                      {categoryIcons[cat] || <Sparkles className="w-3.5 h-3.5" />}
                    </span>
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

            {/* Track 2 - Exact duplicate following track 1 for true infinity */}
            <div className="animate-marquee-seamless flex items-center" aria-hidden="true">
              {trackItems.map((cat, i) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={`t2-${cat}-${i}`}
                    type="button"
                    tabIndex={-1}
                    onClick={() => setActiveCategory(cat)}
                    className={`group shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-600/30 scale-105 border border-sky-400/40"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-sky-400 dark:hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:shadow-md hover:scale-[1.02]"
                    }`}
                  >
                    <span
                      className={`${
                        isActive
                          ? "text-sky-200"
                          : "text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform"
                      }`}
                    >
                      {categoryIcons[cat] || <Sparkles className="w-3.5 h-3.5" />}
                    </span>
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => {
            const isAll = activeCategory === "Barchasi";
            const isWide = isAll && (index === 0 || index === 3);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-900 ${
                  isWide
                    ? "aspect-[16/10] sm:aspect-[16/9] sm:col-span-2 lg:col-span-2"
                    : isAll
                    ? "aspect-[4/3]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 active:scale-[1.02]"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center px-2.5 py-1 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md border border-white/20 dark:border-slate-700">
                    {item.category}
                  </span>
                </div>

                {/* Expand icon top-right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Title bottom */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <h3 className="text-xs sm:text-base font-bold tracking-tight line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-sky-300 font-medium flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Kattalashtirish uchun bosing →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Temporary material note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-center px-2">
          <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
          <span>
            * Galereyadagi tasvirlar ta’lim yo‘nalishlari va o‘quv muhitini ko‘rgazmali namoyish qilish uchun namunaviy material sifatida joylashtirilgan.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={siteConfig.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
