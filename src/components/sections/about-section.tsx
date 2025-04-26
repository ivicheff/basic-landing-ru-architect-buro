import Image from "next/image";
import { contentData } from "~/lib/content-data";
import Quiz from "../block/quiz";
import StatisticCardBlock from "../block/statistic-card-block";

const AboutSection = () => {
  return (
    <section className="flex flex-col gap-10" id="about">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-10">
        <div className="flex h-full flex-1">
          <div className="relative h-64 w-full md:min-h-[31.25rem] xl:h-full">
            <Image
              src={contentData.about.image.src}
              className="h-full w-full rounded-lg object-cover"
              alt={contentData.about.image.alt}
              fill
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 md:gap-12">
          <div className="flex flex-col gap-2">
            <h2>{contentData.about.title}</h2>
            <div className="text-muted-foreground flex flex-col gap-2">
              <p>{contentData.about.description[0]}</p>
              <p>{contentData.about.description[1]}</p>
            </div>
          </div>
          <StatisticCardBlock />
        </div>
      </div>
      <Quiz />
    </section>
  );
};

export default AboutSection;
