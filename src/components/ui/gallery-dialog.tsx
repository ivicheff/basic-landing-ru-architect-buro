"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import type { GalleryItem } from "./gallery-card";

interface GalleryDialogProps {
  item: GalleryItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GalleryDialog({
  item,
  open,
  onOpenChange,
}: GalleryDialogProps) {
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
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
