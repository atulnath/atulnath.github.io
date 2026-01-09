import { de } from "../data/de";
import { en } from "../data/en";

export const translations = {
  de,
  en,
};

export function getTranslation(lang: "de" | "en", key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === "object") {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
}
