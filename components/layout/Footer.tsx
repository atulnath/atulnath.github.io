"use client";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo, contactInfo } from "@/lib/data/data";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mt-14 mb-5 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
      <div className="pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <span>
              © {currentYear} {personalInfo.name}. {t("footer.madeWith")}
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            <span>{t("footer.andCode")}</span>
          </div>

          {/* Right Section */}
          <div className="opacity-80 hover:opacity-100 transition">
            {t("footer.allRightsReserved")}:
          </div>
        </div>
      </div>
    </footer>
  );
}
