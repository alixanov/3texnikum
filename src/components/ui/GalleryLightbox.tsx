"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/siteConfig";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const { t } = useLanguage();

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, onClose, handlePrev, handleNext]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-3 sm:p-8 select-none">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white transition-all"
        aria-label={t.common.close}
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 rounded-full bg-black/40 hover:bg-white/25 active:scale-95 text-white transition-all backdrop-blur-sm"
        aria-label={t.common.prevImage}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-4 rounded-full bg-black/40 hover:bg-white/25 active:scale-95 text-white transition-all backdrop-blur-sm"
        aria-label={t.common.nextImage}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Image container */}
      <div className="relative max-w-5xl w-full h-[62dvh] sm:h-[78vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="95vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-3 sm:mt-4 text-center text-white px-4">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-500/30 text-sky-300 text-[11px] sm:text-xs font-semibold mb-1 sm:mb-2">
            {currentItem.category}
          </div>
          <h3 className="text-sm sm:text-lg font-bold line-clamp-1">{currentItem.title}</h3>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            {currentIndex + 1} / {items.length} — {t.common.galleryMaterial}
          </p>
        </div>
      </div>
    </div>
  );
}
