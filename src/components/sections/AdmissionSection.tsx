"use client";

import React from "react";
import { ArrowRight, Sparkles, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function AdmissionSection() {
  return (
    <section id="qabul" className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-sky-900/40">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/20 border border-sky-400/30 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.admission.badge}</span>
            </motion.div>

            {/* Title verbatim */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              {siteConfig.admission.title}
            </motion.h2>

            {/* Description verbatim */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed"
            >
              «{siteConfig.admission.text}»
            </motion.p>

            {/* 3 admission steps checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sky-400 text-xs font-bold block mb-1">1-QADAM</span>
                <span className="text-sm font-semibold text-white">Yo‘nalishni tanlang</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sky-400 text-xs font-bold block mb-1">2-QADAM</span>
                <span className="text-sm font-semibold text-white">Konsultatsiya oling</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-sky-400 text-xs font-bold block mb-1">3-QADAM</span>
                <span className="text-sm font-semibold text-white">Hujjatlarni taqdim eting</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href="#aloqa"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>{siteConfig.admission.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {siteConfig.contact.telegramUrl && (
                <a
                  href={siteConfig.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-all"
                >
                  <span>Telegram orqali savol berish</span>
                </a>
              )}
            </motion.div>

            {/* Transparent Note */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {siteConfig.admission.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
