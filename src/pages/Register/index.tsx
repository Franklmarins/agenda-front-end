import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuth } from "../../hooks/userAuth";
import { RegisterData, registerSchema } from "./validator";
import { StyledRegister } from "./style";
import { Container } from "../../styles/Container";
import { StyledForm } from "../../components/Form/style";
import { StyledInput } from "../../components/Input/style";
import { ButtonPrimaryStyles, Link } from "../../styles/Buttons";

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
    <Container>
      <StyledRegister>
        <div>
          <h2>Registrar</h2>

          <StyledForm onSubmit={handleSubmit(createUser)}>
            <label htmlFor="name">Name</label>
            <StyledInput type="name" id="name" {...register("name")} />
            {errors.name?.message && <span>{errors.name.message}</span>}

            <label htmlFor="email">Email</label>
            <StyledInput type="email" id="email" {...register("email")} />
            {errors.email?.message && <span>{errors.email.message}</span>}

            <label htmlFor="phone">Phone</label>
            <StyledInput type="phone" id="phone" {...register("phone")} />
            {errors.phone?.message && <span>{errors.phone.message}</span>}

            <label htmlFor="password">Senha</label>
            <StyledInput
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}

            <ButtonPrimaryStyles type="submit">Registrar</ButtonPrimaryStyles>
          </StyledForm>
          <Link to="/">
            <span>Voltar para a página de login</span>
          </Link>
        </div>
      </StyledRegister>
    </Container>
  );
};
