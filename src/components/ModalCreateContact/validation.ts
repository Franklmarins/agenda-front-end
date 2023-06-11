import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  email: z.string().email("Deve ser um e-mail"),
  phone: z
    .string()
    .max(9, "Deve conter no máximo 9 digitos")
    .nonempty("Telefone obrigatório"),
});

export type CreateContactData = z.infer<typeof ContactSchema>;
