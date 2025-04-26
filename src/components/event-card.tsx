import { CalendarClock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { contentData } from "~/lib/content-data";
import { cn } from "~/lib/utils";

export type EventType =
  | "conference"
  | "webinar"
  | "workshop"
  | "meetup"
  | "hackathon";

export interface Speaker {
  name: string;
  position: string;
  avatar: string;
}

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  type: EventType;
  image: string;
  speakers: Speaker[];
  attendees: number;
  isFree: boolean;
  price?: string;
  slug: string;
  isFeatured: boolean;
  isUpcoming: boolean;
}

export interface EventCardProps {
  event: EventData;
  eventTypes: Record<EventType, string>;
}

interface EventsContent {
  featuredLabel: string;
  speakersLabel: string;
  attendeesLabel: string;
  freeLabel: string;
  registerButtonText: string;
}

const EventCard = ({ event, eventTypes }: EventCardProps) => {
  const {
    featuredLabel,
    speakersLabel,
    attendeesLabel,
    freeLabel,
    registerButtonText,
  } = contentData.events as EventsContent;

  return (
    <Card className={cn("group overflow-hidden p-0")}>
      <div className="relative">
        <Link href={`/#contacts`} className="block overflow-hidden">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              
            />
            {event.isFeatured && (
              <div className="bg-primary absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium text-white">
                {featuredLabel}
              </div>
            )}
            <div className="absolute top-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {eventTypes[event.type]}
            </div>
          </div>
        </Link>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 px-6">
        <div className="flex flex-col gap-1">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <CalendarClock className="h-4 w-4" />
            <span>{event.date}</span>
            <span>•</span>
            <span>{event.time}</span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>

        <Link href={`/#contacts`}>
          <h3 className="hover:text-primary/90 line-clamp-2 text-xl font-semibold transition-colors">
            {event.title}
          </h3>
        </Link>

        <p className="text-muted-foreground line-clamp-3 text-sm">
          {event.description}
        </p>
      </CardContent>

      <CardFooter className="mt-auto flex flex-col items-start gap-4 px-6 pt-0 pb-6">
        <div className="flex w-full flex-col gap-3">
          {event.speakers.length > 0 && (
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">{speakersLabel}</p>
              <div className="flex flex-wrap gap-2">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="relative h-6 w-6 overflow-hidden rounded-full">
                      <Image
                        src={speaker.avatar}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs">{speaker.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-1 text-xs">
              <Users className="h-4 w-4" />
              <span>
                {event.attendees} {attendeesLabel}
              </span>
            </div>
            <span
              className={`rounded px-2 py-1 text-xs font-medium ${
                event.isFree
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {event.isFree ? freeLabel : event.price}
            </span>
          </div>
        </div>
        <Link href={`/#contacts`} className="w-full">
          <Button
            variant={event.isFeatured ? "default" : "outline"}
            className="w-full"
          >
            {registerButtonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
