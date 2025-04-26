import Plate from "~/components/patterns/plate";
import AboutSection from "~/components/sections/about-section";
import AchievementsSection from "~/components/sections/achievements-section";
import AdvantagesSection from "~/components/sections/advantages-section";
import BeforeAfterComparisonSection from "~/components/sections/before-after-comparison-section";
import BeforeAfterSection from "~/components/sections/before-after-section";
import BlogSection from "~/components/sections/blog-section";
import CareersSection from "~/components/sections/careers-section";
import ContactsSection from "~/components/sections/contacts-section";
import EventsSection from "~/components/sections/events-section";
import FAQSection from "~/components/sections/faq-section";
import Footer from "~/components/sections/footer";
import GallerySection from "~/components/sections/gallery-section";
import Header from "~/components/sections/header";
import HeroSection from "~/components/sections/hero-section";
import PartnersSection from "~/components/sections/partners-section";
import PlanComparisonSection from "~/components/sections/plan-comparison-section";
import PricingSection from "~/components/sections/pricing-section";
import StepsSection from "~/components/sections/steps-section";
import TeamSection from "~/components/sections/team-section";
import TestimonialsSection from "~/components/sections/testimonials-section";
import VideoSection from "~/components/sections/video-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[94rem] flex-col gap-20 px-4 pt-5 pb-30 md:pt-10 md:pb-40 lg:gap-30 lg:px-8">
        <HeroSection variant="collage" />
        <section className="hidden space-y-24">
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Центрированный&rdquo;
            </h2>

            <HeroSection variant="centered" />
          </div>
          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;По умолчанию&rdquo;
            </h2>

            <HeroSection variant="default" />
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Перевернутый&rdquo;
            </h2>

            <HeroSection variant="reversed" />
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Градиент&rdquo;
            </h2>

            <HeroSection variant="gradient" />
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Вкладки&rdquo;
            </h2>

            <HeroSection variant="tabs" />
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Разделенный&rdquo;
            </h2>

            <HeroSection variant="split" />
          </div>

          <div>
            <h2 className="mb-8 text-center text-3xl font-bold">
              Вариант &ldquo;Коллаж&rdquo;
            </h2>

            <HeroSection variant="collage" />
          </div>
        </section>

        <PartnersSection />
        <GallerySection />
        <BeforeAfterSection />
        <BeforeAfterComparisonSection />
        <VideoSection />
        <TeamSection />
        <AboutSection />
        <AdvantagesSection />
        {/* <IntegrationsSection /> */}
        {/* <FeaturesSection /> */}
        <AchievementsSection />
        {/* <PricingSection /> */}
        {/* <PlanComparisonSection /> */}
        <TestimonialsSection />
        <StepsSection />
        {/* <EventsSection /> */}
        {/* <CareersSection /> */}
        <ContactsSection />
        <FAQSection />
        {/* <BlogSection /> */}
        {/* <CtaSection /> */}
      </main>
      <Footer />
      <Plate />
    </>
  );
}
