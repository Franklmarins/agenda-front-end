import { ReactNode, createContext } from "react";
import { LoginData } from "../pages/Login/validator";
import { RegisterData } from "../pages/Register/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextValues {
  signIn: (data: LoginData) => void;
  createUser: (data: RegisterData) => void;
}

export const UserContext = createContext<UserContextValues>(
  {} as UserContextValues
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);

      navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (data: RegisterData) => {
    try {
      const response = await api.post("/clients", data);

      navigate("/login");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UserContext.Provider value={{ signIn, createUser }}>
      {children}
    </UserContext.Provider>
  );
};
