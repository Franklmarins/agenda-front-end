import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactCard } from "../../components/ContactCard";
import { ModalCreateContact } from "../../components/ModalCreateContact";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  clientId: string;
}

const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts", {
        headers: { Authorization: api.defaults.headers.common.authorization },
      });

      setContacts(response.data);
    })();
  }, []);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <main>
      <div>
        <button type="button" onClick={toggleModal}>
          Adiconar Contato
        </button>
      </div>

      {isOpenModal && (
        <ModalCreateContact
          toggleModal={toggleModal}
          setContacts={setContacts}
        />
      )}

      <ul>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
