import { useForm } from "react-hook-form";
import { LoginData, loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuth } from "../../hooks/userAuth";
import { Container } from "../../styles/Container";
import { StyledLogin } from "./style";
import { StyledInput } from "../../components/Input/style";
import { StyledForm } from "../../components/Form/style";
import { ButtonPrimaryStyles, Link } from "../../styles/Buttons";

export const Login = () => {
  const { signIn } = userAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Container>
      <StyledLogin>
        <div>
          <h2>Login</h2>

          <StyledForm onSubmit={handleSubmit(signIn)}>
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              id="email"
              placeholder="Digite o seu email"
              {...register("email")}
            />
            {errors.email?.message && <span>{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <StyledInput
              type="password"
              id="password"
              placeholder="Digite a sua senha"
              {...register("password")}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}

            <ButtonPrimaryStyles type="submit">Entrar</ButtonPrimaryStyles>
          </StyledForm>

          <Link to="/register">
            <span>Ainda não possui uma conta?</span>
          </Link>
        </div>
      </StyledLogin>
    </Container>
  );
};
