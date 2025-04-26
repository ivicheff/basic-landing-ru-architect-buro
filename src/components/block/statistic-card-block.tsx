import StatisticCard from "~/components/ui/statistic-card";
import { contentData } from "~/lib/content-data";

const StatisticCardBlock = () => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
      {contentData.about.statistics.map((stat, index) => (
        <StatisticCard
          key={index}
          title={stat.title}
          description={stat.description}
        />
      ))}
    </div>
  );
};

export default StatisticCardBlock;
