"use client";

import { useMemo, useState } from "react";
import { GalleryCard, type GalleryItem } from "~/components/ui/gallery-card";
import { GalleryDialog } from "~/components/ui/gallery-dialog";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { contentData } from "~/lib/content-data";

export type FilterOption = {
  id: string;
  name: string;
};

export interface GalleryListBlockProps {
  galleryItems: GalleryItem[];
  categories: FilterOption[];
  filters?: {
    subcategories?: FilterOption[];
    styles?: FilterOption[];
    locations?: FilterOption[];
    status?: FilterOption[];
  };
}

const GalleryListBlock = ({
  galleryItems,
  categories,
  filters = {},
}: GalleryListBlockProps) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    category: "all",
    subcategory: "all",
    style: "all",
    location: "all",
    status: "all",
  });

  // Получаем текст сообщения при отсутствии элементов из content.ru.json
  const { emptyFilterMessage } = contentData.gallery;

  // Фильтрация элементов галереи по всем активным фильтрам
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item: GalleryItem) => {
      // Проверяем категорию
      if (
        activeFilters.category !== "all" &&
        item.category !== activeFilters.category
      ) {
        return false;
      }

      // Проверяем подкатегорию
      if (
        activeFilters.subcategory !== "all" &&
        item.subcategory !== activeFilters.subcategory
      ) {
        return false;
      }

      // Проверяем стиль
      if (activeFilters.style !== "all" && item.style !== activeFilters.style) {
        return false;
      }

      // Проверяем местоположение
      if (
        activeFilters.location !== "all" &&
        item.location !== activeFilters.location
      ) {
        return false;
      }

      // Проверяем статус
      if (
        activeFilters.status !== "all" &&
        item.status !== activeFilters.status
      ) {
        return false;
      }

      return true;
    });
  }, [galleryItems, activeFilters]);

  // Обработчик изменения фильтра
  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Функция создания Select компонента для фильтрации
  const renderFilterSelect = (
    filterType: string,
    label: string,
    options?: FilterOption[],
  ) => {
    if (!options || options.length === 0) return null;

    return (
      <div className="w-full min-w-[200px] sm:flex-1">
        <Label htmlFor={`filter-${filterType}`} className="pl-1 mb-2 block">
          {label}
        </Label>
        <Select
          value={activeFilters[filterType as keyof typeof activeFilters]}
          onValueChange={(value) => handleFilterChange(filterType, value)}
        >
          <SelectTrigger id={`filter-${filterType}`} className="w-full">
            <SelectValue placeholder={`Выберите ${label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent className="min-w-[200px]">
            <SelectItem value="all">Все</SelectItem>
            {options.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <>
      {/* Секция фильтров */}
      <div className="bg-card mb-8 w-full ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Категории */}
          {renderFilterSelect("category", "Категория", [
            ...categories.filter((cat) => cat.id !== "all"),
          ])}

          {/* Подкатегории */}
          {renderFilterSelect("subcategory", "Тип", filters.subcategories)}

          {/* Стили */}
          {renderFilterSelect("style", "Стиль", filters.styles)}

          {/* Местоположение */}
          {renderFilterSelect("location", "Расположение", filters.locations)}

          {/* Статус */}
          {renderFilterSelect("status", "Статус", filters.status)}
        </div>
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
