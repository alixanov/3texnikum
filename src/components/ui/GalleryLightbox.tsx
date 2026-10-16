"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/siteConfig";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 select-none">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Galereyani yopish"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Oldingi rasm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
        aria-label="Keyingi rasm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div className="relative max-w-5xl w-full h-[75vh] sm:h-[80vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white px-4">
          <div className="inline-block px-3 py-1 rounded-full bg-sky-500/30 text-sky-300 text-xs font-semibold mb-2">
            {currentItem.category}
          </div>
          <h3 className="text-base sm:text-lg font-bold">{currentItem.title}</h3>
          <p className="text-xs text-slate-400 mt-1">
            {currentIndex + 1} / {items.length} — Mavzuli ko‘rgazmali material
          </p>
        </div>
      </div>
    </div>
  );
}
