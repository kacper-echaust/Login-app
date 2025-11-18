import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { RoutesContainer } from "./components/FormContainer";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <RoutesContainer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export { App };
