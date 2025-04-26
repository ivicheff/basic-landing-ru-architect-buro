"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";
import FormCard from "~/components/ui/form-card";
import { contentData } from "~/lib/content-data";

const yandexMapApiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;
// Определение типов для Яндекс.Карт
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ymaps: any;
    yandexMapInit?: () => void;
  }
}

const YandexMap = () => {
      const mapRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
        // Функция, которая будет вызвана после загрузки API Яндекс.Карт
        const initMap = () => {
          if (typeof window !== "undefined" && window.ymaps && mapRef.current) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            window.ymaps.ready(() => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              const myMap = new window.ymaps.Map(mapRef.current, {
                center: [40.7128, -74.006], // координаты Нью-Йорка
                zoom: 15,
                controls: ["zoomControl"],
              });

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              const placemark = new window.ymaps.Placemark(
                [40.7128, -74.006],
                {
                  hintContent: "Our Office",
                  balloonContent:
                    "123 Business Avenue, Suite 100, New York, NY 10001",
                },
                {
                  preset: "islands#redDotIcon",
                },
              );

              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              myMap.geoObjects.add(placemark);
            });
          }
        };

        // Если API Яндекс.Карт уже загружен, инициализируем карту
        if (typeof window !== "undefined" && window.ymaps) {
          initMap();
        }

        // Если не загружен, window.yandexMapInit будет вызван после загрузки скрипта
        if (typeof window !== "undefined") {
          window.yandexMapInit = initMap;
        }
      }, []);
  return (
    <>
      {" "}
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${yandexMapApiKey}&lang=en_US`}
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== "undefined" && window.yandexMapInit) {
            window.yandexMapInit();
          }
        }}
      />
      <div
        ref={mapRef}
        className="mt-6 h-[18.75rem] w-full overflow-hidden rounded-lg"
        aria-label="Map showing our office location"
      />
    </>
  );
};

export default YandexMap;
