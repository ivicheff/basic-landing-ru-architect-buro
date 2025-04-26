import { contentData } from "~/lib/content-data";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface AvatarStackProps {
  length?: number;
  images?: string[];
  fallbacks?: string[];
  alts?: string[];
}

const AvatarStack = ({
  length = contentData.hero.avatars.length,
  images = contentData.hero.avatars.images,
  fallbacks = contentData.hero.avatars.fallbacks,
  alts = contentData.hero.avatars.alts,
}: AvatarStackProps) => {
  return (
    <div className={`flex flex-row -space-x-1`}>
      {Array.from({ length }).map((_, index) => (
        <Avatar key={index} className="border-background border-2"  >
          <AvatarImage
            src={images[index] ?? images[0]}
            alt={alts[index] ?? alts[0] }
          />
          <AvatarFallback>{fallbacks[index] ?? fallbacks[0] ?? ""}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
};

export default AvatarStack;
