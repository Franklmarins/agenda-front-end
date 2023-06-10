import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const userAuth = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
