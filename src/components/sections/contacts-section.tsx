import { contentData } from "~/lib/content-data";
import ContactsBlock from "~/components/block/contacts-block";

const ContactsSection = () => {
  return (
    <section
      className="mx-auto w-full max-w-[102rem] flex-col gap-8"
      id="contacts"
    >
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2 className="text-center">{contentData.contacts.title}</h2>
        <p className="text-muted-foreground max-w-2xl text-center">
          {contentData.contacts.description}
        </p>
      </div>
      <div>
        <ContactsBlock />
      </div>
    </section>
  );
};

export default ContactsSection;
