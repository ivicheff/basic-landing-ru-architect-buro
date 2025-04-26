import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export interface Achievement {
  id: number | string;
  year: string;
  title: string;
  description: string;
}

interface AchievementStepProps {
  achievement: Achievement;
  isEven: boolean;
  className?: string;
}

export default function AchievementStep({ achievement }: AchievementStepProps) {
  return (
    <div className="flex w-full lg:gap-6 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Separator className="flex-1" orientation="vertical" />
        <span className="lg:text-lg">{achievement.year}</span>
        <Separator className="flex-1" orientation="vertical" />
      </div>
      <Card className="md:my-4 my-2 w-full">
        <CardHeader className="gap-1">
          <CardTitle>
            <h3>{achievement.title}</h3>
          </CardTitle>
          <CardDescription>
            <p>{achievement.description}</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
