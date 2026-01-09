"use client";

import { ArrowLeft, Code } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { useData } from "@/lib/utils/useData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/layout/Navigation";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";

export default function ProjectsPage() {
  const { t } = useLanguage();
  const { projects } = useData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main className="container relative z-10 py-12 pt-32">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("nav.projects")}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {t("pageDescriptions.projects")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card dark:glass-card-dark rounded-2xl overflow-hidden">
                <ProjectCard project={project} />
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
