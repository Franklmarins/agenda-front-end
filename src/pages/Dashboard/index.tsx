import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContactCard } from "../../components/ContactCard";
import { ModalCreateContact } from "../../components/ModalCreateContact";
import { Container } from "../../styles/Container";
import { StyledDashboard } from "./style";
import {
  ButtonSecondaryStyles,
  ButtonTerciaryStyles,
} from "../../styles/Buttons";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("/contacts", {
        headers: { Authorization: api.defaults.headers.common.authorization },
      });

      setContacts(response.data);
    })();
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <>
      <Container>
        <StyledDashboard>
          <div>
            <ButtonTerciaryStyles type="button" onClick={toggleModal}>
              Adiconar Contato
            </ButtonTerciaryStyles>
            <ButtonSecondaryStyles onClick={logOut}>Sair</ButtonSecondaryStyles>
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
        </StyledDashboard>
      </Container>
    </>
  );
};

export default Dashboard;
