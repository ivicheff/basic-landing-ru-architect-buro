import Link from "next/link";
import { BeforeAfterComparisonCard } from "~/components/ui/before-after-comparison-card";
import { contentData } from "~/lib/content-data";

const BeforeAfterComparisonSection = () => {
  return (
    <section className="py-10" id="results-comparison">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold">
          {contentData.beforeAfter.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          {contentData.beforeAfter.description}
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {contentData.beforeAfter.items.map((item) => (
          <BeforeAfterComparisonCard
            key={item.title}
            title={item.title}
            beforeImage={item.image}
            afterImage={item.image}
            description={item.description}
            beforeLabel={item.before}
            afterLabel={item.after}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={contentData.beforeAfter.cta.url}
          className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
        >
          {contentData.beforeAfter.cta.text}
        </Link>
      </div>
    </section>
  );
};

export default BeforeAfterComparisonSection;
