import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Certification } from "@/lib/types/types";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{certification.title}</CardTitle>
        <CardDescription>{certification.issuer}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Badge>{certification.date}</Badge>
        {certification.url && (
          <div className="flex">
            <Button variant="link" size="sm" className="px-0" asChild>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View Certification</span>
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
