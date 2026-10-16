import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      }`}
    >
      {badge && (
        <span
          className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
            light
              ? "bg-sky-400/20 text-sky-200 border border-sky-400/30"
              : "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/80"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
