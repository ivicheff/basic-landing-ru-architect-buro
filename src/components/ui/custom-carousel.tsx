"use client";

import { type ReactNode } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

interface CustomCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  itemsPerView?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  loop?: boolean;
  align?: "start" | "center" | "end";
  controlsPosition?: "inside" | "outside";
}

export function CustomCarousel<T>({
  items,
  renderItem,
  itemsPerView = { sm: 1, md: 2, lg: 3 },
  loop = true,
  align = "start",
  controlsPosition = "outside",
}: CustomCarouselProps<T>) {
  // Возвращаем классы для CarouselItem в зависимости от количества элементов на разных размерах экрана
  const getItemClasses = () => {
    // Базовый класс для всех размеров
    const baseClasses = "pl-2 md:pl-4";

    // Классы для адаптивного отображения
    let responsiveClasses = "sm:basis-full";

    if (itemsPerView.md === 1) responsiveClasses += " md:basis-full";
    else if (itemsPerView.md === 2) responsiveClasses += " md:basis-1/2";
    else if (itemsPerView.md === 3) responsiveClasses += " md:basis-1/3";
    else if (itemsPerView.md === 4) responsiveClasses += " md:basis-1/4";

    if (itemsPerView.lg === 1) responsiveClasses += " lg:basis-full";
    else if (itemsPerView.lg === 2) responsiveClasses += " lg:basis-1/2";
    else if (itemsPerView.lg === 3) responsiveClasses += " lg:basis-1/3";
    else if (itemsPerView.lg === 4) responsiveClasses += " lg:basis-1/4";

    return `${baseClasses} ${responsiveClasses}`;
  };

  // Классы для позиционирования элементов управления
  const controlsClasses =
    controlsPosition === "inside"
      ? "absolute top-1/2 -translate-y-1/2 z-10"
      : "static translate-y-0 mx-1";

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align,
          loop,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => (
            <CarouselItem key={index} className={getItemClasses()}>
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div
          className={cn(
            "mt-5 flex items-center justify-center gap-2",
            controlsPosition === "inside" && "relative",
          )}
        >
          <CarouselPrevious
            className={cn(
              controlsClasses,
              controlsPosition === "inside" && "left-2",
            )}
          />
          <CarouselNext
            className={cn(
              controlsClasses,
              controlsPosition === "inside" && "right-2",
            )}
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
