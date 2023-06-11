import React from "react";
import { Contact } from "../../pages/Dashboard";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </li>
  );
};
