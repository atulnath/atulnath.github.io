"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, ExternalLink, FileText } from "lucide-react";
import { useData } from "@/lib/utils/useData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navigation } from "@/components/layout/Navigation";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AchievementsPage() {
  const { t } = useLanguage();
  const { achievements } = useData();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main className="container relative z-10 py-12 pt-32">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              {t("nav.pubRes")}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {t("pageDescriptions.research")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card dark:glass-card-dark p-6 rounded-2xl h-full flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all duration-300">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription>{achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {achievement.link && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:text-white hover:border-transparent"
                      >
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{achievement.linkText || "View"}</span>
                        </a>
                      </Button>
                    )}
                    {achievement.links?.map((link, linkIndex) => {
                      const isRecommendation = link.text
                        .toLowerCase()
                        .includes("recommendation");
                      return (
                        <Button
                          key={linkIndex}
                          size="sm"
                          variant="outline"
                          asChild
                          className="transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:text-white hover:border-transparent"
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            {isRecommendation ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}
                            <span>{link.text}</span>
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
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
