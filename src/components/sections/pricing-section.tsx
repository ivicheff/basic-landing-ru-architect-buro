import Calculator from "~/components/block/calculator";
import PriceCardBlock from "~/components/block/price-card-block";
import { contentData } from "~/lib/content-data";

const PricingSection = () => {
  return (
    <section className="flex flex-col" id="pricing">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{contentData.pricing.title}</h2>
        <p className="text-muted-foreground">
          {contentData.pricing.description}
        </p>
      </div>
      <PriceCardBlock />
      <div className="mt-10" />
      <Calculator />
    </section>
  );
};

export default PricingSection;
