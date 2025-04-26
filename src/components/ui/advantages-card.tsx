import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

interface AdvantagesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
}

// Карта известных цветов Tailwind с поддержкой CSS переменных и hex-цветов
const getColorValue = (colorName: string): string => {
  // Если это CSS-переменная или hex-цвет, возвращаем как есть
  if (colorName.startsWith("var(") || colorName.startsWith("#")) {
    return colorName;
  }

  // Предопределенные цвета Tailwind
  switch (colorName) {
    case "primary":
      return "var(--primary)";
    case "secondary":
      return "var(--secondary)";
    case "blue-400":
      return "#60a5fa";
    case "orange-400":
      return "#fb923c";
    case "rose-400":
      return "#fb7185";
    case "green-400":
      return "#4ade80";
    case "purple-400":
      return "#c084fc";
    default:
      return "var(--secondary)";
  }
};

// Функция для получения светлого фона на основе цвета
const getBackgroundColorValue = (colorName: string): string => {
  // Если это hex-цвет, создаем полупрозрачную версию
  if (colorName.startsWith("#")) {
    // Преобразуем hex в rgba с прозрачностью
    const hex = colorName.slice(1);
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
  }

  // Для предопределенных цветов
  switch (colorName) {
    case "primary":
      return "rgba(var(--primary), 0.1)";
    case "secondary":
      return "rgba(var(--secondary), 0.1)";
    case "blue-400":
      return "#dbeafe"; // blue-100
    case "orange-400":
      return "#ffedd5"; // orange-100
    case "rose-400":
      return "#ffe4e6"; // rose-100
    case "green-400":
      return "#dcfce7"; // green-100
    case "purple-400":
      return "#f3e8ff"; // purple-100
    default:
      return "rgba(var(--secondary), 0.1)";
  }
};

export default function AdvantagesCard({
  icon,
  title,
  description,
  iconColor = "secondary",
  className,
}: AdvantagesCardProps) {
  const colorValue = getColorValue(iconColor);
  const backgroundColorValue = getBackgroundColorValue(iconColor);

  return (
    <Card
      className={cn("gap-3 rounded-lg  px-6 py-6", className)}
    >
      <CardContent>
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full border-2"
          style={{
            borderColor: colorValue,
            backgroundColor: backgroundColorValue,
          }}
        >
          <div style={{ color: colorValue }}>{icon}</div>
        </div>
      </CardContent>
      <CardHeader className="gap-1">
        <CardTitle>
          <h3 className="text-xl font-semibold">{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
