"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Logo from "~/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import SocialIcons from "~/components/ui/social-icons";
import { useScrollDirection } from "~/hooks/useScrollDirection";
import { contentData } from "~/lib/content-data";
import { cn } from "~/lib/utils";
import madeby from "~/madeby.json";
import CustomLink from "../ui/custom-link";

const Header = () => {
  const isVisible = useScrollDirection();

  return (
    <header
      className={cn(
        "bg-background/80 fixed top-0 right-0 left-0 z-50 border-b shadow-sm backdrop-blur-sm transition-transform duration-300",
        !isVisible && "-translate-y-full",
      )}
    >
      <div className="ml-4 flex max-w-[102rem] items-center justify-between px-0 py-0 md:ml-0 lg:mx-auto lg:px-8 lg:py-5">
        <div className="">
          <Logo />
        </div>
        <div className="text-muted-foreground flex flex-1 items-center justify-center gap-8 max-2xl:hidden">
          <Link href={`${contentData.links.phone.url}`}>
            {contentData.links.phone.text}
          </Link>
          <Link href={`${contentData.links.email.url}`}>
            {contentData.links.email.text}
          </Link>
        </div>
        <div className="hidden items-center justify-between xl:flex 2xl:flex-1 gap-8">
          <nav className="flex items-center gap-9 text-nowrap">
            {contentData.header.navigation?.map((item) => (
              <CustomLink
                key={item.url}
                href={item.url}
                className="text-accent-foreground"
              >
                {item.text}
              </CustomLink>
            ))}
          </nav>
          <Link href={contentData.header.cta.url}>
            <Button className="min-w-40 flex-1 text-nowrap">
              {contentData.header.cta.text}
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild className="">
              <Button
                variant="ghost"
                size="icon"
                className="h-16 w-16"
                aria-label="Открыть меню"
              >
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-3xl font-bold">
                  {contentData.links.logo.text}
                </SheetTitle>
              </SheetHeader>
              <nav className="text-primary flex flex-col items-start space-y-5 p-4 text-xl">
                {contentData.header.navigation?.map((item) => (
                  <CustomLink
                    key={item.url}
                    href={item.url}
                    className="text-accent-foreground"
                  >
                    {item.text}
                  </CustomLink>
                ))}
              </nav>
              <div className="text-md text-muted-foreground flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-2">
                  <Link href={contentData.links.phone.url}>
                    {contentData.links.phone.text}
                  </Link>
                  <Link href={contentData.links.email.url}>
                    {contentData.links.email.text}
                  </Link>
                </div>
                <SocialIcons />
              </div>
              <SheetFooter>
                <Button className="w-full">
                  {contentData.header.cta.text}
                </Button>
                <Link
                  href={madeby.url}
                  className="mt-5 flex flex-col items-center justify-center gap-4 text-[.6rem] uppercase md:text-[.8rem]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <span>{madeby.phrase}</span>
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
