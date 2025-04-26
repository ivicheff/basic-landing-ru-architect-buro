import AdvantagesCardBlock from "~/components/block/advantages-card-block";
import { contentData } from "~/lib/content-data";
const AdvantagesSection = () => {
  return (
    <section className="flex flex-col" id="advantages">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{contentData.advantages.title}</h2>
        <p className="text-muted-foreground">
          {contentData.advantages.description}
        </p>
      </div>
      <div>
        <AdvantagesCardBlock />
      </div>
    </section>
  );
};

export default AdvantagesSection;
