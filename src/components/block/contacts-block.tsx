"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import YandexMap from "~/components/block/yandex-map";
import FormCard from "~/components/ui/form-card";
import { contentData } from "~/lib/content-data";

const ContactsInfoBlockText = () => {
  return (
    <div >
      <h3 className="mb-4">{contentData.contacts.title}</h3>
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-6 w-6" />
          <div className="flex flex-col">
            <p className="font-medium">
              {contentData.contacts.contactInfo?.items?.[0]?.label}
            </p>
            <Link
              href={contentData.links.phone.url}
              className="text-muted-foreground"
            >
              {contentData.links.phone.text}
            </Link>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Mail className="mt-1 h-6 w-6" />
          <div className="flex flex-col">
            <p className="font-medium">
              {contentData.contacts.contactInfo?.items?.[1]?.label}
            </p>
            <Link
              href={contentData.links.email.url}
              className="text-muted-foreground"
            >
              {contentData.links.email.text}
            </Link>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-6 w-6" />
          <div className="flex flex-col">
            <p className="font-medium">
              {contentData.contacts.contactInfo?.items?.[2]?.label}
            </p>
            <Link
              href={contentData.links.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground"
            >
              {contentData.links.address.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactsInfoBlock = () => {
  return (
    <div >
      <ContactsInfoBlockText />
      <YandexMap />
    </div>
  );
};

const ContactsBlock = () => {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <FormCard />
      </div>
      <div className="w-full lg:w-1/2">
        <ContactsInfoBlock />
      </div>
    </div>
  );
};

export default ContactsBlock;
