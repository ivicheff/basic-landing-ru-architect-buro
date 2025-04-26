import AchievementStep from "~/components/ui/achievement-step";
import { contentData } from "~/lib/content-data";


const AchievementsSection = () => {
  const { title, description, items } = contentData.achievements;

  return (
    <section className="mx-auto flex flex-col" id="achievements">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      <div className="w-full">
        {items.map((achievement, index) => (
          <AchievementStep
            key={achievement.id}
            achievement={achievement}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
