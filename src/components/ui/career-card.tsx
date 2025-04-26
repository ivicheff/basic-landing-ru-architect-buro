import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { contentData } from "~/lib/content-data";

// Получаем типы занятости из content.ru.json
type EmploymentType = (typeof contentData.careers.employmentTypes)[number];

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: EmploymentType;
  salary: string;
  description: string;
  requirements: string[];
  featured: boolean;
  slug: string;
}

interface CareersLabels {
  featuredBadge: string;
  viewMoreButton: string;
  noMatchingVacanciesTitle: string;
  noMatchingVacanciesDescription: string;
  sendResumeButton: string;
}

interface CareerCardProps {
  job: JobVacancy;
  className?: string;
}

export default function CareerCard({ job, className }: CareerCardProps) {
  // Получаем текст для бейджа и кнопки из JSON-файла
  const labels = (contentData.careers as { labels: CareersLabels }).labels;

  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${
        job.featured ? "border-primary/50 bg-primary/[0.1]" : "bg-card"
      } ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
        </div>
        {job.featured && (
          <Badge
            variant="default"
            className="bg-primary/10 hover:bg-primary/20 text-primary border-none"
          >
            {labels.featuredBadge}
          </Badge>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="font-normal">
          {job.department}
        </Badge>
        <Badge variant="secondary" className="font-normal">
          {job.type}
        </Badge>
        <Badge variant="secondary" className="font-normal">
          {job.salary}
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm">{job.description}</p>

      <Link href={`#contacts`} className="mt-auto">
        <Button
          variant={job.featured ? "default" : "outline"}
          className="w-full"
        >
          {labels.viewMoreButton} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
