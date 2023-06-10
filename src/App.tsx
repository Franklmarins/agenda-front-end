import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
};

export default App;
