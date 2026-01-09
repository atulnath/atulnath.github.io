"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
}
