import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "~/components/ui/card";

interface TestimonialCardProps {
  name: string;
  jobTitle: string;
  image: string;
  testimonial: string;
}

const TestimonialCard = ({ name, jobTitle, image, testimonial }: TestimonialCardProps) => {
  return (
    <Card className="flex flex-col gap-3">
      <CardContent>
        <CardDescription>
          <blockquote className="italic">
            {`"${testimonial}"`}
          </blockquote>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="leading-none">{name}</p>
          <p className="leading-none">
            <small className="leading-none">{jobTitle}</small>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
