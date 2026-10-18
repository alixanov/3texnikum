"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Maximize2,
  Sparkles,
  BookOpen,
  Monitor,
  Wrench,
  Utensils,
  Scissors,
  Users,
} from "lucide-react";
import { motion, useMotionValue, useAnimationFrame, wrap } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import GalleryLightbox from "../ui/GalleryLightbox";

function CategoryRibbon({
  categories,
  categoryIcons,
}: {
  categories: string[];
  categoryIcons: Record<string, React.ReactNode>;
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const singleSetRef = useRef<HTMLDivElement>(null);
  const singleWidthRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const pointerStartXRef = useRef<number>(0);

  // Measure single track width
  useEffect(() => {
    const measure = () => {
      if (singleSetRef.current) {
        // Gap is 12px (gap-3)
        singleWidthRef.current = singleSetRef.current.offsetWidth + 12;
      }
    };
    measure();
    const t1 = setTimeout(measure, 150);
    const t2 = setTimeout(measure, 600);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, [categories]);

  // Smooth continuous auto-scroll with zero-stutter mathematical wrapping
  useAnimationFrame((time, delta) => {
    const singleWidth = singleWidthRef.current;
    if (!singleWidth || isDraggingRef.current) return;

    // Smooth speed: 30 px/s (16 px/s if mouse hovers)
    const speed = isHoveredRef.current ? 16 : 30;
    const moveBy = (speed * delta) / 1000;
    const nextX = wrap(-singleWidth, 0, x.get() - moveBy);
    x.set(nextX);
  });

  // Touch and mouse drag swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    pointerStartXRef.current = e.clientX;
    startXRef.current = x.get();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 0 && e.pointerType === "mouse") return;
    const singleWidth = singleWidthRef.current;
    if (!singleWidth || pointerStartXRef.current === 0) return;

    const diff = e.clientX - pointerStartXRef.current;
    if (Math.abs(diff) > 5) {
      isDraggingRef.current = true;
      const targetX = startXRef.current + diff;
      x.set(wrap(-singleWidth, 0, targetX));
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    pointerStartXRef.current = 0;
  };

  // 5 identical sets guarantee smooth coverage across any screen resolution
  const sets = [0, 1, 2, 3, 4];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full overflow-hidden mb-10 sm:mb-14 py-2 select-none cursor-grab active:cursor-grabbing touch-pan-y"
    >
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-slate-50/90 dark:via-slate-950/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-950 via-slate-50/90 dark:via-slate-950/90 to-transparent z-20" />

      {/* Moving Track */}
      <motion.div style={{ x }} className="flex w-max items-center gap-3">
        {sets.map((setIdx) => (
          <div
            key={`set-${setIdx}`}
            ref={setIdx === 0 ? singleSetRef : undefined}
            className="flex items-center gap-3 shrink-0"
            aria-hidden={setIdx > 0}
          >
            {categories.map((cat, i) => (
              <div
                key={`${setIdx}-${cat}-${i}`}
                className="shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 shadow-sm"
              >
                <span className="text-sky-600 dark:text-sky-400">
                  {categoryIcons[cat] || <Sparkles className="w-3.5 h-3.5" />}
                </span>
                <span>{cat}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "O‘quv jarayoni",
    "Kompyuter sinflari",
    "Avtomobil ustaxonasi",
    "Oshpazlik",
    "Moda va tikuvchilik",
    "Talabalar hayoti",
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    "O‘quv jarayoni": <BookOpen className="w-3.5 h-3.5" />,
    "Kompyuter sinflari": <Monitor className="w-3.5 h-3.5" />,
    "Avtomobil ustaxonasi": <Wrench className="w-3.5 h-3.5" />,
    "Oshpazlik": <Utensils className="w-3.5 h-3.5" />,
    "Moda va tikuvchilik": <Scissors className="w-3.5 h-3.5" />,
    "Talabalar hayoti": <Users className="w-3.5 h-3.5" />,
  };

  const items = siteConfig.gallery;

  return (
    <section id="galereya" className="py-16 sm:py-24 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Foto galereya"
          title="Texnikum hayotidan lavhalar"
          subtitle="Nazariy darslar, amaliy mashg‘ulotlar, zamonaviy ustaxonalar va faol talabalik damlari"
        />

        {/* Continuous Running Marquee Ribbon */}
        <CategoryRibbon
          categories={categories}
          categoryIcons={categoryIcons}
        />

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-900 ${
                  isWide
                    ? "aspect-[16/10] sm:aspect-[16/9] sm:col-span-2 lg:col-span-2"
                    : "aspect-[4/3]"
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
