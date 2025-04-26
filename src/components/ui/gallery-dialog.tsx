"use client";

import Image from "next/image";
import type { FilterOption } from "~/components/block/gallery-list-block";
import { Badge } from "~/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { contentData } from "~/lib/content-data";
import type { GalleryItem } from "./gallery-card";

interface GalleryDialogProps {
  item: GalleryItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface GalleryFilters {
  subcategories?: FilterOption[];
  styles?: FilterOption[];
  locations?: FilterOption[];
  status?: FilterOption[];
}

export function GalleryDialog({
  item,
  open,
  onOpenChange,
}: GalleryDialogProps) {
  const { filters = {} as GalleryFilters } = contentData.gallery;

  // Функция для получения названия параметра по его id
  const getNameById = (
    filterType: keyof GalleryFilters,
    id?: string,
  ): string => {
    if (!id) return "";

    const options = filters[filterType] ?? [];
    const found = options?.find((option) => option.id === id);
    return found ? found.name : "";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 sm:max-w-4xl">
        {item && (
          <div className="flex flex-col lg:flex-row">
            <div className="relative aspect-square w-full max-w-2xl lg:w-2/3">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-t-lg object-cover xl:rounded-l-lg xl:rounded-tr-none"
              />
            </div>

            <div className="flex flex-col gap-3 p-6 pt-14 lg:w-1/3">
              <DialogHeader>
                <DialogTitle className="text-left">{item.title}</DialogTitle>
                <DialogDescription>{item.description}</DialogDescription>
              </DialogHeader>

              {/* Дополнительная информация о проекте */}
              {item.category === "projects" && (
                <div className="mt-4 space-y-3">
                  {item.subcategory && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Тип:</span>
                      <Badge variant="outline">
                        {getNameById("subcategories", item.subcategory)}
                      </Badge>
                    </div>
                  )}

                  {item.style && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Стиль:</span>
                      <Badge variant="outline">
                        {getNameById("styles", item.style)}
                      </Badge>
                    </div>
                  )}

                  {item.location && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Расположение:</span>
                      <Badge variant="outline">
                        {getNameById("locations", item.location)}
                      </Badge>
                    </div>
                  )}

                  {item.status && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Статус:</span>
                      <Badge
                        variant={
                          item.status === "completed"
                            ? "default"
                            : item.status === "in_progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {getNameById("status", item.status)}
                      </Badge>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
