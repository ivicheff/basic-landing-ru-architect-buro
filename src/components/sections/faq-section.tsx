"use client";

import Link from "next/link";
import FAQAccordionBlock from "~/components/block/faq-accordion-block";
import { Button } from "~/components/ui/button";
import { contentData } from "~/lib/content-data";

const FAQSection = () => {
  const faqData = contentData.faq;

  if (!faqData) {
    return null;
  }

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center" id="faq">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{faqData.title}</h2>
        <p className="text-muted-foreground">{faqData.description}</p>
      </div>
      <FAQAccordionBlock />
      <div className="flex flex-col items-center gap-5 pt-10">
        <h3 className="text-center">{faqData.callToAction.text}</h3>
        <Link href={contentData.faq.callToAction.button.url}>
          <Button variant="cta" size="lg" className="shadow-lg">
            {faqData.callToAction.button.text}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
