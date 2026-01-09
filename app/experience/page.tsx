"use client";

import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/Footer";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { useData } from "@/lib/utils/useData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/layout/Navigation";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";

export default function ExperiencePage() {
  const { t } = useLanguage();
  const { experiences } = useData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main className="container relative z-10 py-12 pt-32">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("nav.experience")}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {t("pageDescriptions.experience")}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl p-8">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
