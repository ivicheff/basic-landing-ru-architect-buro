import Link from "next/link";
import NewsletterForm from "~/components/forms/newsletter-form";
import CustomLink from "~/components/ui/custom-link";
import Logo from "~/components/ui/logo";
import { Separator } from "~/components/ui/separator";
import SocialIcons from "~/components/ui/social-icons";
import { contentData } from "~/lib/content-data";
import madeby from "~/madeby.json";

const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[102rem] flex-col px-4 md:px-8"
      id="footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap">
        <div className="flex max-w-sm flex-col-reverse gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="w-fit text-sm">
              {contentData.footer.contactInfo.title}
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href={contentData.links.phone.url}
                className="text-muted-foreground"
              >
                {contentData.links.phone.text}
              </Link>
              <Link
                href={contentData.links.email.url}
                className="text-muted-foreground"
              >
                {contentData.links.email.text}
              </Link>
              <Link
                href={contentData.links.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                {contentData.links.address.text}
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <SocialIcons />
              <Link
                href={madeby.url}
                className="gap-4 text-[.6rem]  text-muted-foreground  uppercase md:text-[.8rem]"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <span>{madeby.phrase}</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Logo />
          </div>
        </div>
        <nav className="flex flex-col gap-4">
          <h3 className="w-fit text-sm">
            {contentData.footer.quickLinks.title}
          </h3>
          <div className="flex flex-col gap-3">
            <CustomLink className="text-muted-foreground" href="/">
              {contentData.footer.quickLinks.items?.[0]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/about">
              {contentData.footer.quickLinks.items?.[1]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/services">
              {contentData.footer.quickLinks.items?.[2]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/testimonials">
              {contentData.footer.quickLinks.items?.[3]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/pricing">
              {contentData.footer.quickLinks.items?.[4]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/steps">
              {contentData.footer.quickLinks.items?.[5]?.text}
            </CustomLink>
          </div>
        </nav>
        <nav className="flex flex-col gap-4">
          <h3 className="w-fit text-sm">{contentData.footer.services.title}</h3>
          <div className="flex flex-col gap-3">
            <CustomLink className="text-muted-foreground" href="/#services">
              {contentData.footer.services.items?.[0]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/#services">
              {contentData.footer.services.items?.[1]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/#services">
              {contentData.footer.services.items?.[2]?.text}
            </CustomLink>
            <CustomLink className="text-muted-foreground" href="/#services">
              {contentData.footer.services.items?.[3]?.text}
            </CustomLink>
          </div>
        </nav>

        <div className="flex flex-col gap-4">
          <h3 className="w-fit text-sm">
            {contentData.footer.newsletter.title}
          </h3>
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground max-w-sm">
              {contentData.footer.newsletter.description}
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="border-border flex flex-col-reverse justify-between pb-5 md:pb-7 xl:flex-row">
        <p className="text-muted-foreground pt-8 xl:pt-0">
          {contentData.footer.copyright}
        </p>
        <div className="flex flex-col gap-3 xl:flex-row xl:gap-8">
          <CustomLink href="/privacy-policy" className="text-muted-foreground">
            {contentData.footer.legalLinks?.[1]?.text}
          </CustomLink>
          <CustomLink
            href="/terms-of-service"
            className="text-muted-foreground"
          >
            {contentData.footer.legalLinks?.[0]?.text}
          </CustomLink>
          <CustomLink href="/cookie-policy" className="text-muted-foreground">
            {contentData.footer.legalLinks?.[2]?.text}
          </CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
