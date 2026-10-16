"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Info } from "lucide-react";
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
    <section id="galereya" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Foto galereya"
          title="Texnikum hayotidan lavhalar"
          subtitle="Nazariy darslar, amaliy mashg‘ulotlar, zamonaviy ustaxonalar va faol talabalik damlari"
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/25"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-900 ${
                  isWide ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md border border-white/20 dark:border-slate-700">
                    {item.category}
                  </span>
                </div>

                {/* Expand icon top-right */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Title bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-sky-300 font-medium flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Kattalashtirib ko‘rish uchun bosing →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Temporary material note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-center">
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
