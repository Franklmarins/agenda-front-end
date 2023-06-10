import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { userAuth } from "../../hooks/userAuth";
import { RegisterData, registerSchema } from "./validator";

export const Register = () => {
  const { createUser } = userAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <main>
      <h2>Registrar</h2>

      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" {...register("name")} />
        {errors.name?.message && <span>{errors.name.message}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email?.message && <span>{errors.email.message}</span>}

        <label htmlFor="phone">Phone</label>
        <input type="phone" id="phone" {...register("phone")} />
        {errors.phone?.message && <span>{errors.phone.message}</span>}

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password?.message && <span>{errors.password.message}</span>}

        <button type="submit">Registrar</button>
      </form>
    </main>
  );
};
