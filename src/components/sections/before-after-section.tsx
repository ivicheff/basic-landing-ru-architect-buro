import Link from "next/link";
import { BeforeAfterCard } from "~/components/ui/before-after-card";
import { contentData } from "~/lib/content-data";

const BeforeAfterSection = () => {
  return (
    <section className="py-10" id="results">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="mb-4 text-3xl font-bold">
          {contentData.beforeAfter.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          {contentData.beforeAfter.description}
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {contentData.beforeAfter.items.map((item, index) => (
          <BeforeAfterCard
            key={index}
            title={item.title}
            image={item.image}
            before={item.before}
            after={item.after}
            description={item.description}
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

export default BeforeAfterSection;
