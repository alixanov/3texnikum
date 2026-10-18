"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "3tex_theme_change";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
    mql.removeEventListener("change", callback);
  };
}

function getThemeSnapshot(): Theme {
  try {
    const val = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (val === "light" || val === "dark" || val === "system") return val;
  } catch {}
  return "system";
}

function getServerThemeSnapshot(): Theme {
  return "system";
}

function getSystemDarkSnapshot(): boolean {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {}
  return false;
}

function getServerSystemDarkSnapshot(): boolean {
  return false;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const isSystemDark = useSyncExternalStore(subscribeTheme, getSystemDarkSnapshot, getServerSystemDarkSnapshot);

  const resolvedTheme: "light" | "dark" =
    theme === "dark" || (theme === "system" && isSystemDark) ? "dark" : "light";

  // Synchronize DOM classes strictly based on resolvedTheme - zero setState in effect!
  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [resolvedTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
