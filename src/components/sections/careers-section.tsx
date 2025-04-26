import Link from "next/link";
import { Button } from "~/components/ui/button";
import CareerCard, { type JobVacancy } from "~/components/ui/career-card";
import { contentData } from "~/lib/content-data";

interface CareersContent {
  title: string;
  description: string;
  vacancies: JobVacancy[];
  labels: {
    featuredBadge: string;
    viewMoreButton: string;
    noMatchingVacanciesTitle: string;
    noMatchingVacanciesDescription: string;
    sendResumeButton: string;
  };
  contactFormUrl: string;
}

const CareersSection = () => {
  const { title, description, vacancies, labels, contactFormUrl } =
    contentData.careers as CareersContent;

  return (
    <section className="flex flex-col" id="careers">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {vacancies.map((job) => (
            <CareerCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Контактный блок */}
      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-semibold">
          {labels.noMatchingVacanciesTitle}
        </h3>
        <p className="text-muted-foreground max-w-xl">
          {labels.noMatchingVacanciesDescription}
        </p>
        <Link href={contactFormUrl}>
          <Button size="lg" className="mt-2">
            {labels.sendResumeButton}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CareersSection;
