import { Dispatch, SetStateAction } from "react";
import { Contact } from "../../pages/Dashboard";
import { useForm } from "react-hook-form";
import { ContactSchema, CreateContactData } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Modal } from "../Modal";

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
      <form onSubmit={handleSubmit(createContact)}>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" {...register("name")} />
        {errors.name?.message && <span>{errors.name.message}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone" {...register("phone")} />
        {errors.phone?.message && <span>{errors.phone.message}</span>}
        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  );
};
