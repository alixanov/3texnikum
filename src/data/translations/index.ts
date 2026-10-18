import { uz } from "./uz";
import { ru } from "./ru";
import { en } from "./en";
import { Language, Translations } from "./types";

export * from "./types";

export const translations: Record<Language, Translations> = {
  uz,
  ru,
  en,
};

export const languages: Array<{
  code: Language;
  label: string;
  shortLabel: string;
  flag: string;
}> = [
  { code: "uz", label: "O‘zbekcha", shortLabel: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "Русский", shortLabel: "RU", flag: "🇷🇺" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧" },
];
