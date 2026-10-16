"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    direction: "dasturlash",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-800/80 shadow-xl text-center space-y-4 transition-colors">
        <div className="w-16 h-16 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto border border-sky-200 dark:border-sky-800">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Murojaatingiz qabul qilindi!
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          Rahmat! Sizning arizangiz qabul qilindi. Tez orada texnikum qabul komissiyasi mas’ul xodimi siz bilan bog‘lanadi.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: "", phone: "", direction: "dasturlash", message: "" });
          }}
          className="mt-4 px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl transition-colors"
        >
          Yangi murojaat yuborish
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-slate-950/40 space-y-5 transition-colors"
    >
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Qabul bo‘yicha savol yoki ariza qoldirish
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
          Ma’lumotlaringizni qoldiring, biz siz bilan bog‘lanib to‘liq ma’lumot beramiz.
        </p>
      </div>

      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          F.I.SH (Ism va familiyangiz) *
        </label>
        <input
          id="fullName"
          type="text"
          required
          placeholder="Masalan: Sardor Aliyev"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Telefon raqamingiz *
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="+998 90 123 45 67"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="direction"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Qiziqtirayotgan yo‘nalish
        </label>
        <select
          id="direction"
          value={formData.direction}
          onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-sm outline-none transition-all"
        >
          {siteConfig.directions.map((d) => (
            <option key={d.id} value={d.id}>
              {d.title}
            </option>
          ))}
          <option value="boshqa">Hali bir qarorga kelmadim (maslahat kerak)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          Qo‘shimcha savol yoki xabar (ixtiyoriy)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="O‘zingizni qiziqtirgan savolni yozishingiz mumkin..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>{loading ? "Yuborilmoqda..." : "Murojaatni yuborish"}</span>
      </button>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
        Taqdim etilgan ma’lumotlar maxfiy saqlanadi va faqat qabul konsultatsiyasi uchun foydalaniladi.
      </p>
    </form>
  );
}
