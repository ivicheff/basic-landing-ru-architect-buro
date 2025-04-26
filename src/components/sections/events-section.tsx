import Link from "next/link";
import EventsListBlock from "~/components/block/events-list-block";
import { Button } from "~/components/ui/button";
import { type EventData, type EventType } from "~/components/ui/event-card";
import { contentData } from "~/lib/content-data";
import NewsletterForm from "../forms/newsletter-form";

interface EventsContent {
  title: string;
  description: string;
  eventTypes: Record<EventType, string>;
  allEventsText: string;
  filters: {
    all: string;
    upcoming: string;
    past: string;
    free: string;
    paid: string;
    online: string;
    offline: string;
  };
  items: EventData[];
  cta: {
    title: string;
    buttonText: string;
    buttonLink: string;
  };
  newsletter: {
    title: string;
    description: string;
  };
}

const EventsSection = () => {
  // Получаем данные из content.ru.json
  const {
    title,
    description,
    eventTypes,
    filters,
    items: events,
    cta,
    newsletter,
  } = contentData.events as unknown as EventsContent;

  return (
    <section className="flex flex-col" id="events">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      {/* Компонент со списком событий и фильтрацией */}
      <EventsListBlock
        events={events}
        eventTypes={eventTypes}
        filters={filters}
      />

      {/* Календарь событий */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold">{cta.title}</h3>
        <Link href={cta.buttonLink}>
          <Button variant="outline" size="lg" className="gap-2">
            {cta.buttonText}
          </Button>
        </Link>
      </div>

      {/* Подписка на уведомления */}
      <div className="bg-muted/20 mt-12 rounded-xl border p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-xl font-semibold">{newsletter.title}</h3>
          <p className="text-muted-foreground max-w-lg">
            {newsletter.description}
          </p>
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
