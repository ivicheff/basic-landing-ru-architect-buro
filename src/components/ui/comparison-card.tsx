import { Check, X } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { contentData } from "~/lib/content-data";

export interface PlanProps {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  popular?: boolean;
  className?: string;
  features?: Record<string, boolean | string>;
}

export default function ComparisonCard({
  id,
  title,
  price,
  period,
  description,
  buttonText,
  buttonUrl,
  popular = false,
  className,
  features,
}: PlanProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col lg:rounded-none lg:border-none lg:shadow-none",
        popular
          ? "border-primary bg-primary/5 rounded-t-lg!"
          : "bg-transparent",
        className,
      )}
    >
      <CardHeader className="mb-0 gap-4">
        <div className="flex items-center justify-between">
          <CardTitle>
            <h3 className="text-xl font-semibold">{title}</h3>
          </CardTitle>
          {popular && (
            <Badge className="rounded-sm">
              {contentData.comparison.labels.popularChoice}
            </Badge>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <CardDescription className="inline-block">/{period}</CardDescription>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="block flex-grow lg:hidden">
        {features && (
          <Accordion type="single" collapsible className="">
            <AccordionItem value="features" className="border-none">
              <AccordionTrigger className="px-0 py-2">
                <span className="text-sm font-medium">
                  {contentData.comparison.labels.showDetails}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-4 space-y-3 text-sm">
                  {Object.entries(features).map(([name, value]) => (
                    <div key={name} className="flex items-center gap-2">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
                        ) : (
                          <X className="h-4 w-4 flex-shrink-0 text-red-500" />
                        )
                      ) : (
                        <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
                      )}
                      <div className="flex w-full justify-between">
                        <span className="text-muted-foreground">{name}</span>
                        {typeof value !== "boolean" && (
                          <span className="font-medium">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>

      <CardFooter className="mt-auto">
        <Link href={buttonUrl} className="w-full">
          <Button variant={popular ? "default" : "outline"} className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
