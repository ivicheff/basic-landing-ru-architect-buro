import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { contentData } from "~/lib/content-data";
import CustomLink from "./custom-link";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <CustomLink
        href={contentData.links.socials.facebookUrl}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaFacebook className="size-5" />
      </CustomLink>
      <CustomLink
        href={contentData.links.socials.twitterUrl}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaXTwitter className="size-5" />
      </CustomLink>
      <CustomLink
        href={contentData.links.socials.instagramUrl}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaInstagram className="size-5" />
      </CustomLink>
      <CustomLink
        href={contentData.links.socials.linkedinUrl}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaLinkedin className="size-5" />
      </CustomLink>
      <CustomLink
        href={contentData.links.socials.youtubeUrl}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <FaYoutube className="size-5" />
      </CustomLink>
    </div>
  );
};

export default SocialIcons;
