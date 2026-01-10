"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/lib/data/data";

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.experience"), href: "/experience" },
    { label: t("nav.projects"), href: "/projects" },
    { label: t("nav.research"), href: "/researches" },
    { label: t("nav.courses"), href: "/courses" },
    { label: t("nav.education"), href: "/education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "w-[95%] max-w-7xl" : "w-[90%] max-w-6xl"
        }`}
      >
        <div
          className={`relative bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Gradient border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo/Name with Beautiful Typography */}
            <Link href="/" className="group relative">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent hover:from-violet-500 hover:via-pink-500 hover:to-cyan-400 transition-all duration-500 bg-[length:200%_auto] animate-gradient">
                {personalInfo.name.split(" ")[0]}
              </span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group"
                  >
                    {/* Active background */}
                    {isActive && (
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-violet-500/20 rounded-lg" />
                    )}

                    {/* Hover background */}
                    <span className="absolute inset-0 bg-white/5 dark:bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Text */}
                    <span
                      className={`relative ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
                        : "text-foreground/70 dark:text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side - Language, Theme toggle and mobile menu */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ModeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-20 left-4 right-4 bg-white/10 dark:bg-black/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-400/20 to-violet-500/20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500"
                    : "text-foreground/70 dark:text-muted-foreground hover:bg-white/5 dark:hover:bg-white/10 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
