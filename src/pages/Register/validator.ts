import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Nome obrigatório"),
  email: z.string().email("Deve ser um e-mail"),
  phone: z
    .string()
    .min(9, "Deve conter no mínimo 9 digitos")
    .nonempty("Telefone obrigatório"),
  password: z
    .string()
    .min(8, "Deve conter no mínimo 8 caracteres")
    .nonempty("Senha obrigatória"),
});

export type RegisterData = z.infer<typeof registerSchema>;
