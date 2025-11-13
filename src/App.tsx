import { FormContainer } from "./components/FormContainer";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <FormContainer />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export { App };
