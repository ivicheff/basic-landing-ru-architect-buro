import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Card, CardContent, CardFooter } from "~/components/ui/card";

// Типы для работы с данными о команде
interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

export interface MemberCardProps {
  member: TeamMember;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <Card className="group overflow-hidden p-0 transition-all hover:shadow-md">
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardContent className="flex flex-col gap-2 px-5">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-primary font-medium">{member.position}</p>
        <p className="text-muted-foreground line-clamp-3 text-sm">
          {member.bio}
        </p>
      </CardContent>

      <CardFooter className="mt-auto flex gap-3 p-5 pt-0">
        {member.social.linkedin && (
          <Link
            href={member.social.linkedin}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5" />
          </Link>
        )}
        {member.social.twitter && (
          <Link
            href={member.social.twitter}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="h-5 w-5" />
          </Link>
        )}
        {member.social.facebook && (
          <Link
            href={member.social.facebook}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-5 w-5" />
          </Link>
        )}
        {member.social.instagram && (
          <Link
            href={member.social.instagram}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="h-5 w-5" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
