import PriceCard from "~/components/ui/price-card";
import { contentData } from "~/lib/content-data";

const PriceCardBlock = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {contentData.pricing.cards.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          image={card.image}
          buttonText={card.buttonText}
          buttonUrl={card.buttonUrl}
        />
      ))}
    </div>
  );
};

export default PriceCardBlock;
