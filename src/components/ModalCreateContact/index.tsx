import { Dispatch, SetStateAction } from "react";
import { Contact } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { ContactSchema, CreateContactData } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Modal } from "../Modal";
import { StyledForm } from "../Form/style";
import { StyledInput } from "../Input/style";
import { ButtonPrimaryStyles } from "../../styles/Buttons";

interface ModalCreateContactProps {
  toggleModal: () => void;
  setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalCreateContact = ({
  toggleModal,
  setContacts,
}: ModalCreateContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactData>({
    resolver: zodResolver(ContactSchema),
  });

  const createContact = async (data: CreateContactData) => {
    const response = await api.post<Contact>("/contacts", data);

    setContacts((previousContacts) => [response.data, ...previousContacts]);
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm onSubmit={handleSubmit(createContact)}>
        <label htmlFor="name">Name</label>
        <StyledInput type="name" id="name" {...register("name")} />
        {errors.name?.message && <span>{errors.name.message}</span>}

        <label htmlFor="email">Email</label>
        <StyledInput type="email" id="email" {...register("email")} />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <label htmlFor="phone">Phone</label>
        <StyledInput type="phone" id="phone" {...register("phone")} />
        {errors.phone?.message && <span>{errors.phone.message}</span>}
        <ButtonPrimaryStyles type="submit">Cadastrar</ButtonPrimaryStyles>
      </StyledForm>
    </Modal>
  );
};
