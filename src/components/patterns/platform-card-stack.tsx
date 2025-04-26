import PlatformReviewsCard from "~/components/ui/platform-reviews-card";
import { contentData } from "~/lib/content-data";
import { cn } from "~/lib/utils";

interface Platform {
  rating: number;
  link: string;
  image: string;
  title: string;
  linkText: string;
  orientation: "vertical" | "horizontal";
}

interface PlatformCardStackProps {
  orientation?: "vertical" | "horizontal";
  maxCards?: number;
}

const PlatformCardStack = ({
  orientation = "vertical",
  maxCards = 3,
}: PlatformCardStackProps) => {
  const platforms = contentData.hero.platforms as Platform[];
  const displayPlatforms = platforms.slice(0, maxCards);

  return (
    <div
      className={cn(
        "grid gap-7",
        orientation === "vertical"
          ? "grid-cols-1"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
      )}
    >
      {displayPlatforms.map((platform, index) => (
        <PlatformReviewsCard
          key={index}
          rating={platform.rating}
          link={platform.link}
          image={platform.image}
          title={platform.title}
          linkText={platform.linkText}
        />
      ))}
    </div>
  );
};

export default PlatformCardStack;
