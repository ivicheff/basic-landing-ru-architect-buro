import PlanComparisonBlock from "../block/plan-comparison-block";
import { contentData } from "~/lib/content-data";

const PlanComparisonSection = () => {
  return (
    <section className="flex flex-col" id="plan-comparison">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{contentData.comparison.title}</h2>
        <p className="text-muted-foreground max-w-2xl">
          {contentData.comparison.description}
        </p>
      </div>
      <div>
        <PlanComparisonBlock />
      </div>
    </section>
  );
};

export default PlanComparisonSection;
