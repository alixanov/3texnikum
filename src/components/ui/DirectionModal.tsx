"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { DirectionItem } from "@/data/siteConfig";

interface DirectionModalProps {
  direction: DirectionItem | null;
  onClose: () => void;
}

export default function DirectionModal({ direction, onClose }: DirectionModalProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh] transition-colors duration-300">
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <Image
            src={direction.image}
            alt={direction.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/50 text-white hover:bg-slate-950/80 transition-colors backdrop-blur-md"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-500/80 backdrop-blur-md text-xs font-semibold mb-1.5">
              {direction.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {direction.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
              Yo‘nalish tavsifi
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {direction.description}
            </p>
          </div>

          {/* Skills Acquired */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              O‘rganiladigan asosiy ko‘nikmalar
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {direction.skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
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
              Kelajakdagi kasbiy imkoniyatlar
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

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Namangan 3-sonli texnikumi o‘quv dasturi asosida
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors"
            >
              Yopish
            </button>
            <a
              href="#aloqa"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-md shadow-sky-600/20"
            >
              <span>Ushbu yo‘nalishga ariza</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
