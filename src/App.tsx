import { FormContainer } from "./components/FormContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./components/Home";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <FormContainer />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export { App };
