"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
  Download,
  Award,
  FileText,
  Wrench,
  MapPin,
  GraduationCap,
  MessageSquare,
  Phone,
} from "lucide-react";
import "../styles/globals.css";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/forms/ContactForm";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { Navigation } from "@/components/layout/Navigation";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useData, useCourseData } from "@/lib/utils/useData";
import { useRef } from "react";

export default function Home() {
  const { t } = useLanguage();
  const {
    personalInfo,
    contactInfo,
    experiences,
    projects,
    achievements,
    technicalSkills,
    aboutSections,
    educations,
  } = useData();

  const courses = useCourseData();

  const latestExperience = experiences[0];
  const featuredProjects = projects.slice(0, 3);
  const aboutRef = useRef<HTMLElement | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navigation />

      <main className="container relative z-10 pt-32">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo with Enhanced Effects - Shows FIRST on mobile */}
            <div
              className="relative w-80 h-80 md:w-[30rem] md:h-[30rem] group animate-fade-in order-1 md:order-2"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Background Glow Effects */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/25 rounded-full blur-[160px] animate-float" />
              <div
                className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] bg-violet-500/25 rounded-full blur-[200px] animate-float"
                style={{ animationDelay: "5s" }}
              />
              <div
                className="absolute -bottom-28 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[160px] animate-float"
                style={{ animationDelay: "10s" }}
              />

              {/* Animated Gradient Border Ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
                style={{ padding: "3px", animation: "spin 8s linear infinite" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Glass Ring */}
              <div className="absolute inset-5 rounded-full bg-white/5 backdrop-blur-xl ring-2 ring-white/10 group-hover:ring-4 group-hover:ring-cyan-400/50 transition-all duration-500" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-cyan-400/50">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Text Section - Shows SECOND on mobile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {personalInfo.name}
              </h1>

              <p className="text-lg md:text-2xl text-muted-foreground mb-3">
                {personalInfo.title}
              </p>

              <p className="text-muted-foreground max-w-xl mb-8">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 justify-center md:justify-start mb-10 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/experience" className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    {t("hero.viewExperience")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {t("hero.viewProjects")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    {t("hero.resume")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: "0.35s" }}
              >
                {contactInfo.socialLinks.linkedin && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={contactInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}


                {contactInfo.socialLinks.github && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={contactInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Scroll Down
              </span>
              <div className="relative w-6 h-10 border-2 border-gradient rounded-full p-1 scroll-indicator-border">
                <div className="w-1.5 h-1.5 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full mx-auto scroll-wheel" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Box - Left */}
            <div className="md:col-span-3 glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/10 hover:border-cyan-400/30 border border-transparent">
              <h2 className="text-3xl font-semibold tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all duration-300">
                {t("about.title")}
              </h2>
              <div className="space-y-4">
                {aboutSections.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Details Box - Right */}
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/30 border border-transparent">
              <h2 className="text-3xl font-semibold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-pink-500 transition-all duration-300">
                {t("about.details")}
              </h2>
              <div className="space-y-6">
                <div className="group/item">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2 group-hover/item:text-cyan-400 transition-colors">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {t("about.location")}
                    </span>
                  </div>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>

                <div className="group/item">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2 group-hover/item:text-violet-500 transition-colors">
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {t("about.education")}
                    </span>
                  </div>
                  <p className="font-medium">{personalInfo.education}</p>
                </div>

                <div>
                  <div className="text-muted-foreground mb-3 text-sm font-medium">
                    {t("about.interests")}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 hover:scale-110"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <CategoryCard
            title={t("categories.experience.title")}
            count={experiences.length}
            description={t("categories.experience.description")}
            icon={Briefcase}
            href="/experience"
            gradient="from-cyan-400 to-blue-500"
            delay={0}
          />

          <CategoryCard
            title={t("categories.projects.title")}
            count={projects.length}
            description={t("categories.projects.description")}
            icon={Code}
            href="/projects"
            gradient="from-violet-500 to-purple-600"
            delay={0.1}
          />

          <CategoryCard
            title={t("categories.research.title")}
            count={achievements.length}
            description={t("categories.research.description")}
            icon={Award}
            href="/researches"
            gradient="from-pink-500 to-rose-500"
            delay={0.2}
          />

          <CategoryCard
            title={t("categories.courses.title")}
            count={courses.courseData.length}
            description={t("categories.courses.description")}
            icon={FileText}
            href="/courses"
            gradient="from-amber-400 to-orange-500"
            delay={0.3}
          />

          <CategoryCard
            title={t("categories.education.title")}
            count={educations.length}
            description={t("categories.education.description")}
            icon={GraduationCap}
            href="/education"
            gradient="from-emerald-400 to-teal-500"
            delay={0.4}
          />
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("categories.education.title")}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              {t("pageDescriptions.education")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {educations.map((education, index) => {
              // Helper function to get color theme based on degree level
              const getDegreeTheme = (degree: string) => {
                if (degree.includes("M.Sc") || degree.includes("Master")) {
                  return {
                    gradient: "from-cyan-400 to-blue-500",
                    badgeClass: "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 dark:text-cyan-300 border-cyan-500/50 dark:border-cyan-500/30",
                    hoverGradient: "group-hover:from-cyan-400 group-hover:to-blue-500",
                  };
                } else {
                  return {
                    gradient: "from-emerald-400 to-teal-500",
                    badgeClass: "bg-gradient-to-r from-emerald-500/30 to-teal-500/30 text-emerald-200 dark:text-emerald-300 border-emerald-500/50 dark:border-emerald-500/30",
                    hoverGradient: "group-hover:from-emerald-400 group-hover:to-teal-500",
                  };
                }
              };

              const theme = getDegreeTheme(education.degree);

              return (
                <div
                  key={education.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/10 hover:border-emerald-400/30 border border-transparent">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-semibold mb-2 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                          {education.institution}
                        </h3>
                        <p className="text-muted-foreground text-lg mb-1 group-hover:text-foreground transition-colors">
                          {education.degree}
                        </p>
                        {education.gpa && (
                          <p className="text-sm text-muted-foreground">
                            GPA: {education.gpa}
                          </p>
                        )}
                      </div>
                      <Badge className={`${education.endDate.includes('Currently') || education.endDate.includes('Derzeit')
                        ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white border-sky-400/60 shadow-xl shadow-sky-500/30 animate-pulse ring-2 ring-sky-400/50 hover:shadow-sky-500/50'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-emerald-500/60 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50'
                        } transition-all duration-300 font-semibold text-sm px-4 py-2 w-fit`}>
                        {education.endDate}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{education.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section with Folding Effect */}
        <section className="mb-20 group/skills">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("sections.technicalSkills")}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              {t("sections.skillsHover")}
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Collapsed State - Single Card */}
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl transition-all duration-500 cursor-pointer group-hover/skills:opacity-0 group-hover/skills:scale-95 group-hover/skills:max-h-0 group-hover/skills:mb-0 max-h-[200px] mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  {t("sections.viewAllSkills")}
                </h3>
                <div className="flex gap-2">
                  {technicalSkills.map((skill, index) => (
                    <div
                      key={skill.category}
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      style={{ opacity: 0.3 + index * 0.2 }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground">
                {technicalSkills.length} {t("sections.categoriesCount")} •{" "}
                {technicalSkills.reduce(
                  (acc, skill) => acc + skill.items.length,
                  0
                )}{" "}
                {t("sections.skillsCount")}
              </p>
            </div>

            {/* Expanded State - 4 Cards */}
            <div className="max-h-0 opacity-0 group-hover/skills:max-h-[2000px] group-hover/skills:opacity-100 transition-all duration-700 overflow-hidden">
              <div className="grid gap-6 md:grid-cols-2 pb-6">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill.category}
                    className="opacity-0 translate-y-4 group-hover/skills:opacity-100 group-hover/skills:translate-y-0 transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="glass-card dark:glass-card-dark p-6 rounded-2xl group/card transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 border border-transparent h-full">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-cyan-400 group-hover/card:to-violet-500 transition-all duration-300">
                          {skill.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <Badge
                              key={item}
                              variant="outline"
                              className="transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:text-white hover:border-transparent hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/50"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Experience Preview */}
        {latestExperience && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Briefcase className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-semibold tracking-tight">
                  {t("sections.latestExperience")}
                </h2>
              </div>
              <Button
                asChild
                className="group/btn bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
              >
                <Link href="/experience" className="flex items-center gap-2">
                  {t("sections.viewAll")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative group/card">
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-2xl opacity-0 group-hover/card:opacity-100 blur-sm transition-all duration-500" />

              <div className="relative glass-card dark:glass-card-dark p-8 rounded-2xl transition-all duration-500 group-hover/card:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 border border-transparent group-hover/card:border-cyan-400/30">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent group-hover/card:from-cyan-300 group-hover/card:to-violet-400 transition-all duration-300">
                      {latestExperience.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg text-foreground font-medium flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-cyan-400" />
                        {latestExperience.company}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {latestExperience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className='bg-gradient-to-r from-sky-400 to-indigo-500 text-white border-sky-400/60 shadow-xl shadow-sky-500/30 animate-pulse ring-2 ring-sky-400/50 hover:shadow-sky-500/50'>
                      {latestExperience.startDate} - {latestExperience.endDate}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover/card:text-foreground transition-colors duration-300">
                  {latestExperience.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Featured Projects Preview */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Code className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("sections.featuredProjects")}
              </h2>
            </div>
            <Button
              asChild
              className="group/btn bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/projects" className="flex items-center gap-2">
                {t("sections.viewAll")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="group/project relative">
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover/project:opacity-100 blur-sm transition-all duration-500" />

                <div className="relative glass-card dark:glass-card-dark p-6 rounded-2xl h-full flex flex-col transition-all duration-500 group-hover/project:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20 border border-transparent group-hover/project:border-violet-500/30 cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent group-hover/project:from-violet-400 group-hover/project:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow group-hover/project:text-foreground transition-colors">
                    {project.description.substring(0, 100)}...
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group/learn bg-gradient-to-r from-violet-500/10 to-purple-600/10 hover:from-violet-500 hover:to-purple-600 border-violet-500/30 hover:border-transparent hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50"
                  >
                    <Link href="/projects" className="flex items-center justify-center gap-2">
                      <span className="font-medium">{t("sections.learnMore")}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/learn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section ref={aboutRef} id="contact" className="mb-20">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("contact.title")}
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20 hover:border-pink-500/30 border border-transparent">
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
                {t("contact.sendMessage")}
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/30 border border-transparent">
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  {t("contact.contactInformation")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-400 group-hover/item:to-blue-500 transition-all duration-300">
                      <Mail className="h-5 w-5 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("contact.email")}
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {contactInfo.phone && (
                    <div className="flex items-start gap-4 group/item">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover/item:bg-gradient-to-r group-hover/item:from-violet-500 group-hover/item:to-purple-600 transition-all duration-300">
                        <Phone className="h-5 w-5 text-primary group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {t("contact.phone")}
                        </p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover/item:bg-gradient-to-r group-hover/item:from-pink-500 group-hover/item:to-rose-500 transition-all duration-300">
                      <MapPin className="h-5 w-5 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {t("contact.location")}
                      </p>
                      <p className="font-medium">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card dark:glass-card-dark p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20 hover:border-violet-500/30 border border-transparent">
                <h3 className="text-lg font-semibold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-purple-600 transition-all duration-300">
                  {t("contact.connectWithMe")}
                </h3>
                <div className="flex gap-4">
                  {contactInfo.socialLinks.linkedin && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="glass-card dark:glass-card-dark hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      <a
                        href={contactInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {contactInfo.socialLinks.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="glass-card dark:glass-card-dark hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-gray-500/50"
                    >
                      <a
                        href={contactInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
