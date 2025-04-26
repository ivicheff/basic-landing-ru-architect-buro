"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

interface GalleryCardProps {
  item: GalleryItem;
  onClick: (item: GalleryItem) => void;
}

export function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <Card
      className="group relative cursor-pointer overflow-hidden border-0 p-0 shadow-none"
      onClick={() => onClick(item)}
    >
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover  transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
            <div className="absolute right-0 bottom-0 left-0 p-4 text-white">
              <CardTitle className="font-semibold">{item.title}</CardTitle>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
