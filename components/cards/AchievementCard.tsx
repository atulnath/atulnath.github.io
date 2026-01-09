import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Achievement } from "@/lib/types/types";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <Card className="transition-smooth hover:shadow-lg hover:-translate-y-1 border-border/50">
      <CardHeader>
        <CardTitle className="transition-colors hover:text-primary">
          {achievement.title}
        </CardTitle>
        <CardDescription>{achievement.organization}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {achievement.link && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="transition-smooth hover:bg-primary hover:text-primary-foreground"
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
          {achievement.links?.map((link, index) => {
            const isRecommendation = link.text
              .toLowerCase()
              .includes("recommendation");
            return (
              <Button
                key={index}
                size="sm"
                variant="outline"
                asChild
                className="transition-smooth hover:bg-primary hover:text-primary-foreground"
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
    </Card>
  );
}
