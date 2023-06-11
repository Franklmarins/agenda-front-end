import { Contact } from "../../pages/Dashboard";
import { StyledContactCard } from "./style";

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <StyledContactCard>
      <h2>
        Nome: <span>{contact.name}</span>
      </h2>

      <h2>
        Telefone: <span>{contact.phone}</span>
      </h2>

      <h2>
        Email: <span>{contact.email}</span>
      </h2>
    </StyledContactCard>
  );
};
