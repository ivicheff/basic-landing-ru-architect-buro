"use client";

import { useState } from "react";
import EventSortingBlock from "~/components/block/event-sorting-block";
import EventCard, {
  type EventData,
  type EventType,
} from "~/components/ui/event-card";
import { contentData } from "~/lib/content-data";

interface EventsListBlockProps {
  events: EventData[];
  eventTypes: Record<EventType, string>;
  filters: {
    all: string;
    upcoming: string;
    past: string;
    free: string;
    paid: string;
    online: string;
    offline: string;
  };
}

const EventsListBlock = ({
  events,
  eventTypes,
  filters,
}: EventsListBlockProps) => {
  // Состояние для активного фильтра
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Получаем текст сообщения при отсутствии событий из content.ru.json
  const { emptyFilterMessage } = contentData.events;

  // Фильтрация событий в зависимости от выбранного фильтра
  const filteredEvents = events.filter((event) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "upcoming") return event.isUpcoming;
    if (activeFilter === "free") return event.isFree;
    if (activeFilter === "paid") return !event.isFree;
    if (activeFilter === "online") return event.isOnline;
    if (activeFilter === "offline") return !event.isOnline;
    return event.type === activeFilter;
  });

  // Отображение рекомендованных событий первыми
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return 0;
  });

  return (
    <>
      {/* Компонент сортировки */}
      <EventSortingBlock
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={filters}
        eventTypes={eventTypes}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} eventTypes={eventTypes} />
          ))
        ) : (
          <div className="text-muted-foreground col-span-full py-10 text-center">
            {emptyFilterMessage}
          </div>
        )}
      </div>
    </>
  );
};

export default EventsListBlock;
