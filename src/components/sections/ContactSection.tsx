"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";
import { TelegramIcon, InstagramIcon, FacebookIcon } from "../ui/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="aloqa" className="py-16 sm:py-24 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Info & Editable Fields */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Contact details cards */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                {t.contact.infoTitle}
              </h3>

              <div className="space-y-5">
                {/* Manzil */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-850">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.addressLabel}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      {siteConfig.contact.address}
                    </p>
                    <span className="text-xs text-sky-600 dark:text-sky-400 block mt-0.5">
                      {siteConfig.contact.region}
                    </span>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-850">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.phoneLabel}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-3 mt-0.5">
                      {siteConfig.contact.phones.map((item, idx) => (
                        <React.Fragment key={item.number}>
                          {idx > 0 && (
                            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                          )}
                          <a
                            href={`tel:${item.number}`}
                            className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                          >
                            {item.display}
                          </a>
                        </React.Fragment>
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                      {t.contact.phoneNote}
                    </span>
                  </div>
                </div>

                {/* Elektron pochta */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-850">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.emailLabel}
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Ish vaqti */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 border border-sky-100 dark:border-sky-850">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.workingHoursLabel}
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                      {siteConfig.contact.workingHours}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {t.contact.restDayLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links & direct Telegram contact */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {t.contact.socialLabel}
                </span>

                <div className="flex flex-wrap gap-3">
                  {siteConfig.contact.telegramUrl && (
                    <a
                      href={siteConfig.contact.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-500/20 transition-all hover:-translate-y-0.5"
                    >
                      <TelegramIcon className="w-3.5 h-3.5" />
                      <span>{t.contact.telegramChannelBtn}</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  )}

                  {siteConfig.contact.instagramUrl && (
                    <a
                      href={siteConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-transparent dark:border-slate-700"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                      <span>Instagram</span>
                    </a>
                  )}

                  {siteConfig.contact.facebookUrl && (
                    <a
                      href={siteConfig.contact.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors border border-transparent dark:border-slate-700"
                    >
                      <FacebookIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive Map Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm p-4 transition-colors">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  {t.contact.mapTitle}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">{t.contact.mapSubtitle}</span>
              </div>
              <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 relative">
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Namangan 3-sonli texnikumi xaritada"
                  className="w-full h-full rounded-2xl transition-all duration-300 contrast-[1.05] dark:contrast-[1.12] dark:brightness-[0.88] dark:opacity-90"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
