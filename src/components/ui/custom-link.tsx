import Link from "next/link";
import { cn } from "~/lib/utils";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink = ({ href, children, className }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-primary cursor-pointer font-normal underline-offset-4 hover:underline w-fit",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
