"use client";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/layout/Navigation";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useData, useCourseData } from "@/lib/utils/useData";

export default function EducationPage() {
  const { educations } = useData();
  const { courseData } = useCourseData();
  const { t } = useLanguage();

  // Helper function to get color theme based on degree level
  const getDegreeTheme = (degree: string) => {
    if (degree.includes("M.Sc") || degree.includes("Master")) {
      return {
        gradient: "from-cyan-400 to-blue-500",
        badgeClass: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
        hoverShadow: "hover:shadow-2xl hover:shadow-cyan-400/20",
        hoverBorder: "hover:border-cyan-400/40",
        iconColor: "text-brown-400",
        timelineColor: "bg-cyan-400"
      };
    } else {
      return {
        gradient: "from-emerald-400 to-teal-500",
        badgeClass: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
        hoverShadow: "hover:shadow-2xl hover:shadow-emerald-400/20",
        hoverBorder: "hover:border-emerald-400/40",
        iconColor: "text-brown-400",
        timelineColor: "bg-emerald-400"
      };
    }
  };

  // Helper function to get coursework from course data based on degree level
  const getCourseworkForDegree = (degree: string) => {
    if (degree.includes("M.Sc") || degree.includes("Master")) {
      // Get Master level courses
      return courseData
        .filter(course => course.level === "Master")
        .map(course => course.title);
    } else {
      // Get Bachelor level courses
      return courseData
        .filter(course => course.level === "Bachelor")
        .map(course => course.title);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main className="container relative z-10 py-12 pt-32">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {t("nav.education")}
            </h1>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
            {t("pageDescriptions.education")}
          </p>

          {/* Decorative gradient line */}
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

          {educations.map((education, index) => {
            const theme = getDegreeTheme(education.degree);

            return (
              <div
                key={education.id}
                className="animate-fade-in group relative"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-8 top-8 -translate-x-1/2 items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${theme.timelineColor} ring-4 ring-background z-10`} />
                  <div className={`absolute w-6 h-6 rounded-full ${theme.timelineColor} opacity-20 animate-ping`} />
                </div>

                {/* Card */}
                <div className="md:ml-20">
                  <div className={`glass-card dark:glass-card-dark p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${theme.hoverShadow} ${theme.hoverBorder} border border-transparent cursor-pointer`}>
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div className="flex-1 space-y-3">
                        {/* Institution */}
                        <div className="flex items-start gap-3">
                          <Award className={`h-6 w-6 ${theme.iconColor} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                          <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                            {education.institution}
                          </h3>
                        </div>

                        {/* Degree */}
                        <div className="flex items-start gap-3">
                          <BookOpen className={`h-5 w-5 ${theme.iconColor} flex-shrink-0 mt-1`} />
                          <p className="text-lg md:text-xl text-foreground font-medium">
                            {education.degree}
                          </p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <p className="text-sm">{education.location}</p>
                        </div>

                        {/* GPA */}
                        {education.gpa && (
                          <div className="flex items-center gap-2">
                            <Sparkles className={`h-4 w-4 ${theme.iconColor}`} />
                            <p className="text-sm font-medium">
                              <span className="text-muted-foreground">{t("other.gpa")}:</span>{" "}
                              <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent font-bold`}>
                                {education.gpa}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Date Badge */}
                      <div className="flex items-center gap-2">
                        <Calendar className={`h-4 w-4 ${theme.iconColor}`} />

                        <Badge
                          className={`${education.endDate.includes('Currently') ||
                            education.endDate.includes('Derzeit')
                            ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white border-sky-400/60 shadow-xl shadow-sky-500/30 animate-pulse ring-2 ring-sky-400/50 hover:shadow-sky-500/50'
                            : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-500/60 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50'
                            } transition-all duration-300 font-semibold text-sm px-4 py-2`}
                        >
                          {education.endDate}
                        </Badge>
                      </div>
                    </div>

                    {/* Coursework Section - Dynamic from course data */}
                    {(() => {
                      const dynamicCoursework = getCourseworkForDegree(education.degree);
                      const displayedCourses = dynamicCoursework.slice(0, 3); // Show only first 3 courses

                      return displayedCourses.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border/50">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                              {t("education.keyCourseW")}
                            </h4>
                            {dynamicCoursework.length > 3 && (
                              <a
                                href="/courses"
                                className={`text-xs font-medium bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity flex items-center gap-1`}
                              >
                                {t("education.viewAll")} {dynamicCoursework.length}  {t("education.courses")} →
                              </a>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {displayedCourses.map((course, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/50"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
