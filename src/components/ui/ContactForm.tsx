"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    direction: "dasturlash",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || t.contact.form.errorMessage);
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t.contact.form.errorMessage;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Allow digits, spaces, plus, dashes, and parens
    const cleaned = raw.replace(/[^\d+() -]/g, "");
    setFormData((prev) => ({ ...prev, phone: cleaned }));
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-800/80 shadow-xl text-center space-y-4 transition-colors">
        <div className="w-16 h-16 rounded-full bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mx-auto border border-sky-200 dark:border-sky-800">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {t.contact.form.successTitle}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
          {t.contact.form.successMessage}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError(null);
            setFormData({ fullName: "", phone: "", direction: "dasturlash", message: "" });
          }}
          className="mt-4 px-6 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
        >
          {t.contact.form.resetBtn}
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
          {t.contact.form.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
          {t.contact.form.subtitle}
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {t.contact.form.nameLabel} *
        </label>
        <input
          id="fullName"
          type="text"
          required
          placeholder={t.contact.form.namePlaceholder}
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
          {t.contact.form.phoneLabel} *
        </label>
        <input
          id="phone"
          type="tel"
          required
          placeholder={t.contact.form.phonePlaceholder}
          value={formData.phone}
          onChange={handlePhoneChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="direction"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {t.contact.form.directionLabel}
        </label>
        <select
          id="direction"
          value={formData.direction}
          onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 text-sm outline-none transition-all"
        >
          {t.directions.items.map((d) => (
            <option key={d.id} value={d.id}>
              {d.title}
            </option>
          ))}
          <option value="boshqa">{t.contact.form.undecidedOption}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
        >
          {t.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder={t.contact.form.messagePlaceholder}
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
        <span>{loading ? t.contact.form.submittingBtn : t.contact.form.submitBtn}</span>
      </button>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
        {t.contact.form.privacyNote}
      </p>
    </form>
  );
}
