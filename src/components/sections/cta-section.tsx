import Link from "next/link";
import { Button } from "~/components/ui/button";

const CTASection = () => {
  // Пример данных для CTA секции
  const ctaData = {
    title: "Готовы начать прямо сейчас?",
    description:
      "Начните бесплатный пробный период на 14 дней и откройте для себя все возможности нашей платформы. Никаких кредитных карт. Никаких обязательств.",
    primaryButton: {
      text: "Начать бесплатно",
      url: "/signup",
    },
    secondaryButton: {
      text: "Связаться с нами",
      url: "/contacts",
    },
    background: "bg-gradient-to-r from-primary/80 via-primary to-primary/80",
  };

  return (
    <section
      className={`relative overflow-hidden rounded-3xl ${ctaData.background} shadow-2xl`}
      id="cta"
    >
      {/* Фоновые элементы */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-white/5"></div>
        <div className="absolute right-16 bottom-12 h-24 w-24 rounded-full bg-white/10"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 p-12 text-center text-white md:p-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold md:text-4xl">{ctaData.title}</h2>
          <p className="mx-auto max-w-2xl opacity-90">{ctaData.description}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={ctaData.primaryButton.url}>
            <Button size="lg" variant="secondary" className="px-8 shadow-lg">
              {ctaData.primaryButton.text}
            </Button>
          </Link>

          <Link href={ctaData.secondaryButton.url}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 px-8 text-white hover:bg-white/20"
            >
              {ctaData.secondaryButton.text}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
