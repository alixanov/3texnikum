"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ActiveDirection } from "@/data/translations";

interface DirectionModalProps {
  direction: ActiveDirection | null;
  onClose: () => void;
}

export default function DirectionModal({ direction, onClose }: DirectionModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (direction) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction, onClose]);

  if (!direction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog (Bottom sheet on mobile, centered modal on desktop) */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92dvh] sm:max-h-[90vh] transition-colors duration-300">
        {/* Mobile drag handle indicator */}
        <div className="sm:hidden w-12 h-1.5 bg-white/40 rounded-full mx-auto my-2 absolute top-1 left-1/2 -translate-x-1/2 z-20" />

        {/* Header with image */}
        <div className="relative h-44 xs:h-52 sm:h-60 w-full shrink-0">
          <Image
            src={direction.image}
            alt={direction.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 text-white hover:bg-slate-950/90 transition-colors backdrop-blur-md active:scale-95"
            aria-label={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-5 right-5 sm:left-8 sm:right-8 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-xs font-semibold mb-2">
              {direction.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
              {direction.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 overscroll-contain">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
              {t.directions.subtitle}
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {direction.description}
            </p>
          </div>

          {/* Skills Acquired */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              {t.directions.skillsLabel}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {direction.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                  <CheckCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              {t.directions.careersLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {direction.careers.map((career, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 text-xs font-medium border border-sky-100 dark:border-sky-800"
                >
                  {career}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="p-4 sm:p-6 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400 font-medium">
            {t.common.siteName}
          </span>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-3 sm:py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors active:scale-95 cursor-pointer"
            >
              {t.common.close}
            </button>
            <a
              href="#aloqa"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-md shadow-sky-600/20 active:scale-95 text-center cursor-pointer"
            >
              <span>{t.directions.applyCta}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
