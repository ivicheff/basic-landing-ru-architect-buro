"use client";

import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { contentData } from "~/lib/content-data";

interface BookingWidgetProps {
  title?: string;
  description?: string;
  widgetType?: "yclients" | "other";
  widgetId?: string;
}

const YCLIENTS_WIDGET_ID = process.env.YCLIENTS_WIDGET_ID;

const BookingWidget = ({
  title = contentData.contacts.booking.title,
  description = contentData.contacts.booking.description,
  widgetType = contentData.contacts.booking.widgetType as "yclients" | "other",
  widgetId = YCLIENTS_WIDGET_ID,
}: BookingWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загрузка скрипта YClients
    if (widgetType === "yclients" && containerRef.current) {
      const script = document.createElement("script");
      script.src = "https://w.yclients.com/widget/loader";
      script.async = true;
      document.body.appendChild(script);

      const widgetContainer = document.createElement("div");
      widgetContainer.className = "yclientsWidget";
      widgetContainer.dataset.ycwidgetId = widgetId; // ID виджета из настроек
      containerRef.current.appendChild(widgetContainer);

      return () => {
        if (script && document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [widgetType, widgetId]);

  return (
    <Card className="flex h-full flex-col justify-between gap-3 pb-8">
      <CardHeader className="gap-3">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="min-h-[400px] w-full">
          {/* Здесь будет отображаться виджет записи */}
          {!widgetType && (
            <div className="text-muted-foreground flex h-full w-full items-center justify-center rounded-md border border-dashed p-8 text-center">
              Виджет записи будет отображаться здесь
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWidget;