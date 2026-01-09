"use client";

import { Braces, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Experience } from "@/lib/types/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t } = useLanguage();
  return (
    <Card className="border-none shadow-none transition-smooth bg-transparent">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="transition-colors hover:text-primary">
              {experience.title}
            </CardTitle>
            <CardDescription>
              {experience.company} ({experience.location})
            </CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <Badge className="transition-smooth hover:bg-primary/10">
              {experience.startDate} - {experience.endDate}
            </Badge>
            <span className="text-xs text-muted-foreground mt-1 mr-1">
              {experience.duration}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
          <div
            className="w-full h-[1px] min-h-[1px] bg-gradient-to-r from-transparent via-border to-transparent my-4 shrink-0"
            role="separator"
            aria-hidden="true"
          />
          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm uppercase tracking-wide text-primary mb-3">
            {t("other.toolTech")}
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {experience.tools.map((tool) => (
              <li
                key={tool}
                className="flex items-center gap-2 transition-smooth hover:text-primary"
              >
                <Braces className="h-4 w-4 text-primary" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm uppercase tracking-wide text-primary mb-3">
            {t("other.programLang")}
          </h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {experience.languages.map((lang) => (
              <li
                key={lang}
                className="flex items-center gap-2 transition-smooth hover:text-primary"
              >
                <Code className="h-4 w-4 text-primary" />
                <span>{lang}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
