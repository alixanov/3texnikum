"use client";

import React from "react";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { InstagramIcon, FacebookIcon, TelegramIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = 2025;
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#haqimizda" },
    { label: t.nav.directions, href: "#yonalishlar" },
    { label: t.nav.features, href: "#imkoniyatlar" },
    { label: t.nav.gallery, href: "#galereya" },
    { label: t.nav.contact, href: "#aloqa" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {t.common.siteName}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              {siteConfig.contact.telegramUrl && (
                <a
                  href={siteConfig.contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-slate-800"
                  aria-label="Telegram"
                >
                  <TelegramIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.contact.instagramUrl && (
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-slate-800"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {siteConfig.contact.facebookUrl && (
                <a
                  href={siteConfig.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-all border border-slate-800"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#qabul"
                  className="text-sky-400 hover:text-sky-300 font-medium inline-block"
                >
                  {t.common.admissionBtn}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {t.footer.ourDirections}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {t.directions.items.map((dir) => (
                <li key={dir.id}>
                  <a
                    href="#yonalishlar"
                    className="hover:text-sky-400 transition-colors line-clamp-1"
                  >
                    {dir.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.contact.region}</span>
              </li>
              <li className="flex flex-col gap-1.5">
                {siteConfig.contact.phones.map((item, idx) => (
                  <div key={item.number} className="flex items-center gap-2.5">
                    {idx === 0 ? (
                      <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    ) : (
                      <span className="w-4 shrink-0" />
                    )}
                    <a
                      href={`tel:${item.number}`}
                      className="hover:text-white transition-colors"
                    >
                      {item.display}
                    </a>
                  </div>
                ))}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {t.common.siteName}. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span>Professional Full-Stack Developer arxitekturasi</span>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
