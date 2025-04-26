import MemberCard, { type TeamMember } from "~/components/ui/member-card";
import { contentData } from "~/lib/content-data";

interface TeamContent {
  title: string;
  description: string;
  members: TeamMember[];
}

const TeamSection = () => {
  // Получаем данные из content.ru.json
  const {
    title,
    description,
    members: teamMembers,
  } = contentData.team as TeamContent;

  return (
    <section className="flex flex-col" id="team">
      <div className="flex flex-col items-center gap-2 pb-8 text-center">
        <h2>{title}</h2>
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
