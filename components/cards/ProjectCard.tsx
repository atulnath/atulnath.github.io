"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/lib/types/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-lg hover:-translate-y-1 group border-none bg-transparent shadow-none">
      <div className="aspect-video relative bg-muted/30 overflow-hidden rounded-t-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="bg-transparent">
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 bg-transparent">
        <div>
          <h4 className="text-sm font-medium mb-2">{t("other.tech")}:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="transition-smooth hover:bg-primary/10 hover:border-primary/50"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
