"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showText?: boolean;
  isTransparent?: boolean;
}

export default function ThemeToggle({
  className = "",
  showText = false,
  isTransparent = false,
}: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-transparent bg-slate-200/40 dark:bg-slate-800/40 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  // Dynamic button styling depending on whether navbar is currently transparent on hero
  const buttonStyle = isTransparent
    ? "bg-white/10 text-white hover:bg-white/20 border-white/20 shadow-sm"
    : isDark
    ? "bg-slate-800 text-amber-300 hover:bg-slate-700 border-slate-700 shadow-sm"
    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 shadow-sm";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2 sm:p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 border active:scale-95 ${buttonStyle} ${className}`}
      aria-label={isDark ? "Yorug‘ rejimga o‘tish" : "Tungi rejimga o‘tish"}
      title={isDark ? "Yorug‘ rejim" : "Tungi rejim"}
    >
      <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 rotate-0 scale-100" />
        )}
      </div>

      {showText && (
        <span className="text-xs font-semibold">
          {isDark ? "Yorug‘ rejim" : "Tungi rejim"}
        </span>
      )}
    </button>
  );
}
