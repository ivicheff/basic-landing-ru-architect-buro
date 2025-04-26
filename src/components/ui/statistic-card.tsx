import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface StatisticCardProps {
  title: string;
  description: string;
}

const StatisticCard = ({ title, description }: StatisticCardProps) => {
  return (
    <Card className="rounded-lg px-5 py-3 ">
      <CardHeader className="space-y-1">
        <CardTitle>
          <h2>{title}</h2>
        </CardTitle>
        <CardDescription className="2xl:whitespace-nowrap">
          <p>
            <small>{description}</small>
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatisticCard;
