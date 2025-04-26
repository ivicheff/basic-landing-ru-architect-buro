"use client";

import { useState } from "react";
import { Badge } from "~/components/ui/badge";
import { GalleryCard, type GalleryItem } from "~/components/ui/gallery-card";
import { GalleryDialog } from "~/components/ui/gallery-dialog";
import { contentData } from "~/lib/content-data";
import { cn } from "~/lib/utils";

type Category = {
  id: string;
  name: string;
};

interface GalleryListBlockProps {
  galleryItems: GalleryItem[];
  categories: Category[];
}

const GalleryListBlock = ({
  galleryItems,
  categories,
}: GalleryListBlockProps) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Получаем текст сообщения при отсутствии элементов из content.ru.json
  const { emptyFilterMessage } = contentData.gallery;

  // Фильтрация элементов галереи по категории
  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item: GalleryItem) => item.category === activeCategory,
        );

  return (
    <>
      {/* Фильтры категорий */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-8">
        {categories.map((category: Category) => (
          <Badge
            key={category.id}
            variant={activeCategory === category.id ? "default" : "secondary"}
            className={cn(
              "cursor-pointer px-3 py-1 text-sm font-medium",
              activeCategory === category.id ? "" : "hover:bg-secondary/80",
            )}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      {/* Сетка изображений */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item: GalleryItem) => (
            <GalleryCard key={item.id} item={item} onClick={setActiveImage} />
          ))
        ) : (
          <div className="text-muted-foreground col-span-full py-10 text-center">
            {emptyFilterMessage}
          </div>
        )}
      </div>

      {/* Диалог детального просмотра */}
      <GalleryDialog
        item={activeImage}
        open={!!activeImage}
        onOpenChange={(open) => !open && setActiveImage(null)}
      />
    </>
  );
};

export default GalleryListBlock;
