"use client";

import CustomCarousel from "~/components/ui/custom-carousel";
import TestimonialCard from "~/components/ui/testimonial-card";
import { contentData } from "~/lib/content-data";

interface Testimonial {
  name: string;
  jobTitle: string;
  image: string;
  testimonial: string;
}

const TestimonialsCardCarousel = () => {
  const testimonials: Testimonial[] = contentData.testimonials.items;

  return (
    <CustomCarousel
      items={testimonials}
      renderItem={(testimonial) => (
        <TestimonialCard
          name={testimonial.name}
          jobTitle={testimonial.jobTitle}
          image={testimonial.image}
          testimonial={testimonial.testimonial}
        />
      )}
      itemsPerView={{ sm: 1, md: 2, lg: 3 }}
      loop={true}
      align="start"
      controlsPosition="outside"
    />
  );
};

export default TestimonialsCardCarousel;
