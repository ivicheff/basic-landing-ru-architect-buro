import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import AdvantagesCard from "~/components/ui/advantages-card";
import { contentData } from "~/lib/content-data";

// Тип для карточки преимуществ из JSON
interface AdvantageCard {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

// Тип для иконок Lucide
type LucideIconsType = Record<string, LucideIcon>;

const AdvantagesCardBlock = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {contentData.advantages.cards.map((card: AdvantageCard, index) => {
        // Динамически получаем компонент иконки из lucide-react по имени из JSON
        const IconComponent = (LucideIcons as unknown as LucideIconsType)[
          card.icon
        ];

        // Если иконка не найдена, отображаем заглушку или пропускаем
        if (!IconComponent) {
          console.warn(`Иконка ${card.icon} не найдена в lucide-react`);
          return null;
        }

        return (
          <AdvantagesCard
            key={index}
            title={card.title}
            description={card.description}
            icon={<IconComponent className="h-6 w-6" />}
            iconColor={card.iconColor}
          />
        );
      })}
    </div>
  );
};

export default AdvantagesCardBlock;
