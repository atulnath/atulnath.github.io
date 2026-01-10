"use client";
import { FileText, BookOpen, FlaskConical, GraduationCap, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useCourseData } from "@/lib/utils/useData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CoursesPage() {
  const { courseData } = useCourseData();
  const { t } = useLanguage();

  const bachelorCourses = courseData.filter(
    (course) => course.level === "Bachelor"
  );

  const masterCourses = courseData.filter(
    (course) => course.level === "Master"
  );

  // Helper function to get color theme based on category
  const getCategoryTheme = (category?: string) => {
    // Handle both English and German category names
    if (category === "Theory" || category === "Theorie") {
      return {
        icon: BookOpen,
        badgeClass: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30 hover:from-cyan-500/30 hover:to-blue-500/30",
        hoverShadow: "hover:shadow-2xl hover:shadow-cyan-400/20",
        hoverBorder: "hover:border-cyan-400/40",
        iconColor: "text-cyan-400"
      };
    } else if (category === "Lab" || category === "Labor") {
      return {
        icon: FlaskConical,
        badgeClass: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/30 hover:from-violet-500/30 hover:to-purple-500/30",
        hoverShadow: "hover:shadow-2xl hover:shadow-violet-400/20",
        hoverBorder: "hover:border-violet-400/40",
        iconColor: "text-violet-400"
      };
    }
    return {
      icon: BookOpen,
      badgeClass: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30 hover:from-emerald-500/30 hover:to-teal-500/30",
      hoverShadow: "hover:shadow-2xl hover:shadow-emerald-400/20",
      hoverBorder: "hover:border-emerald-400/40",
      iconColor: "text-emerald-400"
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      <AnimatedBackground />
      <Navigation />

      <main className="container relative z-10 py-12 pt-32 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <FileText className="h-10 w-10 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {t("nav.courses")}
            </h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed" id="bachelor-courses">
            {t("pageDescriptions.courses")}
          </p>

          {/* Decorative gradient line */}
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full" />
        </div>

        {/* Bachelor Section */}
        <section className="space-y-8"  >
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-cyan-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("courseData.bchlorCourses")}
            </h2>
            <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bachelorCourses.map((course, index) => {
              const theme = getCategoryTheme(course.category);
              const CategoryIcon = theme.icon;

              return (
                <div
                  key={course.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Card className={`glass-card dark:glass-card-dark group transition-all duration-500 hover:scale-[1.03] ${theme.hoverShadow} ${theme.hoverBorder} border border-transparent cursor-pointer h-full`}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors flex-1">
                          {course.title}
                        </CardTitle>
                        {course.category && (
                          <CategoryIcon className={`h-5 w-5 ${theme.iconColor} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                        )}
                      </div>
                      {course.category && (
                        <Badge className={`${theme.badgeClass} transition-all duration-300 font-medium w-fit`}>
                          {course.category}
                        </Badge>
                      )}
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>

        {/* Decorative Separator */}
        <div className="relative py-8" id="master-courses">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-primary/60" />
            </div>
          </div>
        </div>

        {/* Master Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-violet-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              {t("courseData.masterCourses")}
            </h2>
            <Sparkles className="h-6 w-6 text-violet-400 animate-pulse" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {masterCourses.map((course, index) => {
              const theme = getCategoryTheme(course.category);
              const CategoryIcon = theme.icon;

              return (
                <div
                  key={course.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <Card className={`glass-card dark:glass-card-dark group transition-all duration-500 hover:scale-[1.03] ${theme.hoverShadow} ${theme.hoverBorder} border border-transparent cursor-pointer h-full`}>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors flex-1">
                          {course.title}
                        </CardTitle>
                        {course.category && (
                          <CategoryIcon className={`h-5 w-5 ${theme.iconColor} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                        )}
                      </div>
                      {course.category && (
                        <Badge className={`${theme.badgeClass} transition-all duration-300 font-medium w-fit`}>
                          {course.category}
                        </Badge>
                      )}
                    </CardHeader>
                  </Card>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
