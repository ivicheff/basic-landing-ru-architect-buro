import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { contentData } from "~/lib/content-data";

export interface BeforeAfterComparisonCardProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  description: string;
}

const LABELS = {
  before: contentData.beforeAfter.labels.before,
  after: contentData.beforeAfter.labels.after,
};

export const BeforeAfterComparisonCard = ({
  title,
  beforeImage,
  afterImage,
  beforeLabel = LABELS.before,
  afterLabel = LABELS.after,
  description,
}: BeforeAfterComparisonCardProps) => {
  return (
    <Card className="group gap-0 overflow-hidden p-0 shadow-lg transition-all hover:shadow-xl">
      <CardContent className="flex flex-col gap-4 p-0">
        <div className="relative flex flex-col md:flex-row">
          {/* До */}
          <div className="relative flex-1">
            <div className="relative aspect-square min-h-[240px] w-full md:aspect-auto md:h-full">
              <Image
                src={beforeImage}
                alt={`${title} - ${contentData.beforeAfter.labels.before}`}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-8 left-4 md:top-4">
                {beforeLabel}
              </Badge>
            </div>
          </div>

          {/* Индикатор разделения - видимый на мобильных устройствах */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:hidden">
            <div className="bg-primary text-secondary flex h-8 w-8 rotate-90 items-center justify-center rounded-full">
              <ArrowRight className="size-4" />
            </div>
          </div>

          {/* Индикатор разделения - видимый на десктопе */}
          <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full shadow-md">
              <ArrowRight className="size-5" />
            </div>
          </div>

          {/* Разделительная линия для десктопа */}
          <div className="bg-border absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 md:block" />

          {/* После */}
          <div className="relative flex-1">
            <div className="relative aspect-square min-h-[240px] w-full md:aspect-auto md:h-full">
              <Image
                src={afterImage}
                alt={`${title} - ${contentData.beforeAfter.labels.after}`}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-8 left-4 md:top-4">
                {afterLabel}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardHeader className="flex flex-col gap-2 p-6">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BeforeAfterComparisonCard;
