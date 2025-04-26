import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomForm from "~/components/forms/custom-form";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import PlatformReviewsCard from "~/components/ui/platform-reviews-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { contentData } from "~/lib/content-data";
import AvatarStack from "../patterns/avatar-stack";
import PlatformCardStack from "../patterns/platform-card-stack";

type HeroSectionProps = {
  variant?:
    | "default"
    | "centered"
    | "reversed"
    | "gradient"
    | "tabs"
    | "split"
    | "collage"
    | "form";
};

// Определяем типы для новых данных героя
type HeroTab = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type HeroCard = {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
};

type HeroReview = {
  id: string;
  author: string;
  platform: string;
  rating: number;
  text: string;
  avatar?: string;
};

type ContactInfo = {
  title: string;
  items: Array<string>;
};

// Дополняем contentData типами
interface ExtendedHeroData {
  gradientBadge: string;
  gradientTitle: string;
  gradientDescription: string;
  gradientImage: {
    src: string;
    alt: string;
  };
  tabsBadge: string;
  tabsTitle: string;
  tabsDescription: string;
  tabs: HeroTab[];
  splitBadge: string;
  splitTitle: string;
  splitDescription: string;
  splitImage: {
    src: string;
    alt: string;
  };
  features: string[];
  cardBasedBadge: string;
  cardBasedTitle: string;
  cardBasedDescription: string;
  cards: HeroCard[];
  secondaryCta: {
    text: string;
    url: string;
  };
  collageImages: {
    src: string;
    alt: string;
  }[];
  collageTitle: string;
  collageDescription: string;
  galleryTitle: string;
  galleryDescription: string;
  galleryImages: {
    src: string;
    alt: string;
  }[];
  reviewsTitle: string;
  reviewsDescription: string;
  reviewsTrust: string;
  reviews: HeroReview[];
}

// Приведение типов для безопасного доступа к добавленным полям
const extendedHeroData = contentData.hero as unknown as ExtendedHeroData;

const HeroSection = ({ variant = "default" }: HeroSectionProps) => {
  // Отображаем выбранный вариант hero section
  switch (variant) {
    case "centered":
      return <CenteredHero />;
    case "reversed":
      return <ReversedHero />;
    case "gradient":
      return <GradientHero />;
    case "tabs":
      return <TabsHero />;
    case "split":
      return <SplitHero />;
    case "collage":
      return <CollageHero />;
    case "form":
      return <FormHero />;
    default:
      return <DefaultHero />;
  }
};

// Дефолтный вариант (оригинальный)
const DefaultHero = () => {
  return (
    <section className="mx-auto flex max-w-[102rem] flex-col gap-5 md:gap-10 lg:flex-row">
      <div className="flex flex-1 flex-col justify-end gap-5">
        <div className="flex flex-col gap-2">
          <h1>{contentData.hero.title}</h1>
          <p className="text-muted-foreground">
            {contentData.hero.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-5">
            <Button variant="cta" size="lg" className="shadow-lg">
              <Link href={contentData.hero.cta.url}>
                {contentData.hero.cta.text}
              </Link>
            </Button>
            <div className="flex flex-col gap-1">
              <AvatarStack />
              <p className="max-w-96 leading-none">
                <small className="text-muted-foreground leading-none">
                  {contentData.hero.testimonialText}
                </small>
              </p>
            </div>
          </div>
          <div className="hidden 2xl:block">
            <PlatformCardStack orientation="vertical" maxCards={3} />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={contentData.hero.image.src}
          alt={contentData.hero.image.alt}
          className="h-full w-full rounded-lg object-cover shadow-xl"
          width={1632}
          height={1088}
        />
      </div>
    </section>
  );
};

// Центрированный вариант
const CenteredHero = () => {
  return (
    <section className="mx-auto flex max-w-[102rem] flex-col items-center text-center">
      <div className="flex max-w-3xl flex-col items-center gap-4">
        <h1>{contentData.hero.title}</h1>
        <p className="text-muted-foreground max-w-2xl">
          {contentData.hero.description}
        </p>
        <Link href={contentData.hero.cta.url}>
          <Button variant="cta" size="lg" className="shadow-lg">
            {contentData.hero.cta.text}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col-reverse items-center gap-2 pt-2 pb-2 md:flex-row md:pb-4">
        <AvatarStack />
        <p className="max-w-full text-center leading-none md:max-w-96 md:text-left">
          <small className="text-muted-foreground">
            {contentData.hero.testimonialText}
          </small>
        </p>
      </div>
      <div className="w-full max-w-5xl">
        <Image
          src={contentData.hero.image.src}
          alt={contentData.hero.image.alt}
          className="w-full rounded-lg object-cover shadow-xl"
          width={1632}
          height={900}
        />
      </div>
      <div className="hidden xl:block">
        <div className="absolute top-[10rem] left-[2rem] 2xl:left-[14rem]">
          <PlatformReviewsCard
            rating={contentData.hero?.platforms[0]?.rating ?? 0}
            link={contentData.hero?.platforms[0]?.link ?? ""}
            image={contentData.hero?.platforms[0]?.image ?? ""}
            title={contentData.hero?.platforms[0]?.title}
            linkText={contentData.hero?.platforms[0]?.linkText}
          />
        </div>
        <div className="absolute top-[10rem] right-[2rem] 2xl:right-[14rem]">
          <PlatformReviewsCard
            rating={contentData.hero?.platforms[1]?.rating ?? 0}
            link={contentData.hero?.platforms[1]?.link ?? ""}
            image={contentData.hero?.platforms[1]?.image ?? ""}
            title={contentData.hero?.platforms[1]?.title}
            linkText={contentData.hero?.platforms[1]?.linkText}
          />
        </div>
        <div className="absolute top-[22rem] left-[4rem] 2xl:top-[21rem] 2xl:left-[18rem]">
          <PlatformReviewsCard
            rating={contentData.hero?.platforms[2]?.rating ?? 0}
            link={contentData.hero?.platforms[2]?.link ?? ""}
            image={contentData.hero?.platforms[2]?.image ?? ""}
            title={contentData.hero?.platforms[2]?.title}
            linkText={contentData.hero?.platforms[2]?.linkText}
          />
        </div>
        <div className="absolute top-[22rem] right-[4rem] 2xl:top-[21rem] 2xl:right-[18rem]">
          <PlatformReviewsCard
            rating={contentData.hero?.platforms[3]?.rating ?? 0}
            link={contentData.hero?.platforms[3]?.link ?? ""}
            image={contentData.hero?.platforms[3]?.image ?? ""}
            title={contentData.hero?.platforms[3]?.title}
            linkText={contentData.hero?.platforms[3]?.linkText}
          />
        </div>
      </div>
    </section>
  );
};

// Перевернутый вариант (изображение слева, контент справа)
const ReversedHero = () => {
  return (
    <section className="mx-auto flex max-w-[102rem] flex-col gap-5 md:gap-10 lg:flex-row">
      <div className="order-2 flex-1 lg:order-1">
        <Image
          src={contentData.hero.image.src}
          alt={contentData.hero.image.alt}
          className="h-full w-full rounded-lg object-cover shadow-xl"
          width={1632}
          height={1088}
        />
      </div>
      <div className="order-1 flex flex-1 flex-col justify-center gap-5 lg:order-2">
        <div className="flex flex-col gap-3">
          <h1>{contentData.hero.title}</h1>
          <p className="text-muted-foreground">
            {contentData.hero.description}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5">
            <Link href={contentData.hero.cta.url}>
              <Button variant="cta" size="lg" className="shadow-lg">
                {contentData.hero.cta.text}
              </Button>
            </Link>
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <AvatarStack />
              <p className="max-w-xs leading-none">
                <small className="text-muted-foreground">
                  {contentData.hero.testimonialText}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Градиентный вариант
const GradientHero = () => {
  return (
    <section className="mx-auto w-full">
      <div className="gradient-primary relative overflow-hidden rounded-xl p-8 md:p-12 lg:p-16">
        <div className="bg-grid-white/10 absolute inset-0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center gap-8 text-white lg:flex-row lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <Badge className="w-fit bg-white/20 hover:bg-white/30">
              {extendedHeroData.gradientBadge}
            </Badge>
            <h1>{extendedHeroData.gradientTitle}</h1>
            <p>{extendedHeroData.gradientDescription}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={contentData.hero.cta.url}>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-white/90"
                >
                  {contentData.hero.cta.text}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/20 hover:text-white"
              >
                {extendedHeroData.secondaryCta.text}
              </Button>
            </div>
          </div>
          <div className="relative hidden aspect-square w-full max-w-md shrink-0 overflow-hidden rounded-lg backdrop-blur-2xl lg:block">
            <Image
              src={extendedHeroData.gradientImage.src}
              alt={extendedHeroData.gradientImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Вариант с вкладками
const TabsHero = () => {
  return (
    <section className="mx-auto max-w-[102rem]">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <Badge className="w-fit">{extendedHeroData.tabsBadge}</Badge>
          <h1>{extendedHeroData.tabsTitle}</h1>
          <p className="text-muted-foreground">
            {extendedHeroData.tabsDescription}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={contentData.hero.cta.url}>
              <Button size="lg" variant="cta">
                {contentData.hero.cta.text}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Tabs defaultValue="feature1" className="w-full">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              {extendedHeroData.tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {extendedHeroData.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="h-full">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={tab.image.src}
                    alt={tab.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3">
                  <h3>{tab.title}</h3>
                  <p className="text-muted-foreground">{tab.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// Разделенный вариант
const SplitHero = () => {
  return (
    <section className="mx-auto max-w-[102rem] overflow-hidden rounded-xl lg:flex">
      <div className="bg-primary/5 flex flex-1 flex-col justify-center gap-6 px-6 py-10 lg:px-10 lg:py-20">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-background">
            {extendedHeroData.splitBadge}
          </Badge>
        </div>
        <h1 className="text-[1.8rem] leading-none font-black text-pretty sm:text-[2.25rem] md:text-[4rem]">
          {extendedHeroData.splitTitle}
        </h1>
        <p className="text-muted-foreground max-w-md">
          {extendedHeroData.splitDescription}
        </p>
        <div className="flex flex-col flex-wrap gap-4 md:flex-row">
          {extendedHeroData.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <small className="leading-none">{feature}</small>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-col flex-wrap gap-3 md:flex-row">
          <Link href={contentData.hero.cta.url}>
            <Button size="lg" variant="cta">
              {contentData.hero.cta.text}
            </Button>
          </Link>
          <Link href={extendedHeroData.secondaryCta.url}>
            <Button size="lg" variant="outline">
              {extendedHeroData.secondaryCta.text}
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src={extendedHeroData.splitImage.src}
          alt={extendedHeroData.splitImage.alt}
          className="h-full w-full object-cover"
          width={800}
          height={800}
          priority
        />
        <div className="bg-background/80 absolute right-0 bottom-0 left-0 flex items-center justify-between p-4 backdrop-blur-sm md:p-6">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <AvatarStack />
            <p className="text-muted-foreground max-w-xs leading-none">
              <small>{contentData.hero.testimonialText}</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Вариант с коллажем изображений (новый)
const CollageHero = () => {
  return (
    <section className="mx-auto max-w-[102rem]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit">{extendedHeroData.collageTitle}</Badge>
          <h1 className="py-4">{extendedHeroData.collageTitle}</h1>
          <p className="text-muted-foreground">
            {extendedHeroData.collageDescription}
          </p>
          <div className="flex flex-col gap-4 pt-8 pb-4 sm:flex-row">
            <Link href={contentData.hero.cta.url}>
              <Button size="lg" variant="cta">
                {contentData.hero.cta.text}
              </Button>
            </Link>
            <Link href={extendedHeroData.secondaryCta.url}>
              <Button size="lg" variant="outline">
                {extendedHeroData.secondaryCta.text}
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
            <AvatarStack />
            <p className="text-muted-foreground max-w-xs leading-none">
              <small>{contentData.hero.testimonialText}</small>
            </p>
          </div>
        </div>

        <div className="relative grid h-[500px] grid-cols-2 grid-rows-2 gap-4 lg:gap-8">
          {extendedHeroData.collageImages?.slice(0, 4).map((image, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg ${
                i === 0
                  ? "col-span-1 row-span-2"
                  : i === 1
                    ? "col-span-1 row-span-1"
                    : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Вариант с формой обратной связи
const FormHero = () => {
  return (
    <section className="mx-auto max-w-[102rem] md:pt-4">
      <div className="grid grid-cols-1 gap-0 md:gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="mt-auto flex flex-col justify-center">
          <Badge className="w-fit">{contentData.contacts.title}</Badge>
          <h1 className="pt-4">{contentData.contacts.title}</h1>
          <p className="text-muted-foreground pt-2">
            {contentData.contacts.description}
          </p>
          <div className="pt-4">
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
              <AvatarStack />
              <p className="text-muted-foreground max-w-full leading-none md:max-w-xs">
                <small>{contentData.hero.testimonialText}</small>
              </p>
            </div>
            <Card className="mt-4 hidden p-4 md:mt-6 md:block">
              <div className="flex flex-col gap-2">
                {contentData.contacts.info.items.map(
                  (item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle
                        size={16}
                        className="text-primary mt-1 shrink-0"
                      />
                      <p className="text-sm">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </Card>
          </div>
          <div className="hidden pt-4 lg:block">
            <PlatformCardStack orientation="horizontal" />
          </div>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="bg-background rounded-sm border p-4 shadow-sm md:p-6">
            <h2 className="mb-4 text-xl font-semibold">
              {contentData.contacts.form.title}
            </h2>
            <CustomForm />
          </div>

          <div className="gradient-primary absolute -top-2 -left-2 -z-10 h-full w-full rounded-lg md:-top-4 md:-left-4"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
