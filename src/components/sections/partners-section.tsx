"use client";

import { contentData } from "~/lib/content-data";
import Marquee from "~/components/ui/marquee";

const PartnersSection = () => {
  const { title, description } = contentData.partners;
  return (
    <section className="flex flex-col" id="partners">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>
      <Marquee />
    </section>
  );
};

export default PartnersSection;
