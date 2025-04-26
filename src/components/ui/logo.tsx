import Image from "next/image";
import Link from "next/link";
import { contentData } from "~/lib/content-data";

const Logo = () => {
  return (
    <Link
      href={contentData.links.logo.link}
      className="flex items-center gap-2"
    >
      <Image
        src={contentData.links.logo.src}
        alt={contentData.links.logo.alt}
        width={32}
        height={32}
      />
      <h3>{contentData.links.logo?.text}</h3>
    </Link>
  );
};

export default Logo;
