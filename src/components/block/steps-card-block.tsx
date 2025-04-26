import { type ReactElement } from "react";
import Step from "~/components/patterns/step";
import { contentData } from "~/lib/content-data";

const StepsCardBlock = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      {contentData.steps.items.map((step) => (
        <Step
          key={step.number}
          image={step.image}
          title={step.title}
          description={
            <span className="flex flex-col gap-2">
              {step.description.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </span>
          }
          number={step.number}
          reverse={step.reverse}
        />
      ))}
    </div>
  );
};

export default StepsCardBlock;
