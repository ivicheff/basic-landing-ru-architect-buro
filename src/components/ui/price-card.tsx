import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";

import Image from "next/image";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
  buttonUrl: string;
}

const PriceCard = ({
  title,
  description,
  price,
  image,
  buttonText,
  buttonUrl,
}: PriceCardProps) => {
  return (
    <Card className="flex gap-3 rounded-lg p-0">
      <CardContent>
        <Image
          src={image}
          className="h-[10rem] w-full rounded-md object-cover rounded-b-none"
          alt="Price"
          width={400}
          height={160}
          quality={100}
          priority
        />
      </CardContent>
      <CardHeader className="gap-3 px-6">
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto justify-between px-6 pb-6">
        <p>
          <small>{price}</small>
        </p>
        <Link href={buttonUrl}>
          <Button>{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
