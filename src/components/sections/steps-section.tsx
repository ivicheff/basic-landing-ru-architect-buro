import StepsCardBlock from "~/components/block/steps-card-block";
import { contentData } from "~/lib/content-data";

const StepsSection = () => {
  return (
    <section className="flex flex-col" id="steps">
      <div className="flex flex-col items-center justify-center gap-2 pb-8">
        <h2>{contentData.steps.title}</h2>
        <p className="text-muted-foreground text-center">
          {contentData.steps.description}
        </p>
      </div>
      <StepsCardBlock />
    </section>
  );
};

export default StepsSection;
