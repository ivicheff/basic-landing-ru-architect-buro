import { Badge } from "~/components/ui/badge";
import { type EventType } from "~/components/ui/event-card";
import { cn } from "~/lib/utils";

interface EventSortingBlockProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: {
    all: string;
    upcoming: string;
    past: string;
    free: string;
    paid: string;
    online: string;
    offline: string;
  };
  eventTypes: Record<EventType, string>;
}

const EventSortingBlock = ({
  activeFilter,
  setActiveFilter,
  filters,
  eventTypes,
}: EventSortingBlockProps) => {
  // Создаем массив всех доступных фильтров
  const allFilters = [
    { id: "all", name: filters.all },
    { id: "upcoming", name: filters.upcoming },
    { id: "free", name: filters.free },
    { id: "online", name: filters.online },
    ...Object.entries(eventTypes).map(([type, name]) => ({ id: type, name })),
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pb-8">
      {allFilters.map((filter) => (
        <Badge
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "secondary"}
          className={cn(
            "cursor-pointer px-3 py-1 text-sm font-medium",
            activeFilter === filter.id ? "" : "hover:bg-secondary/80",
          )}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.name}
        </Badge>
      ))}
    </div>
  );
};

export default EventSortingBlock;
