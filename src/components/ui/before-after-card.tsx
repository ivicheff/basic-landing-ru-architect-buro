import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";

export interface BeforeAfterCardProps {
  title: string;
  image: string;
  before: string;
  after: string;
  description: string;
}

export const BeforeAfterCard = ({
  title,
  image,
  before,
  after,
  description,
}: BeforeAfterCardProps) => {
  return (
    <Card className="group overflow-hidden p-0 shadow-lg transition-all hover:shadow-xl">
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-col gap-1 p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mb-3 flex mt-2 gap-0  flex-col">
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">До:</span>
            <span className="font-medium">{before}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">После:</span>
            <span className="font-medium text-green-600">{after}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BeforeAfterCard;
