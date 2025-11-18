import { FormContainer } from "./components/FormContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Logged } from "./components/Logged";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./components/Home";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <FormContainer />
        <Routes>
          <Route
            path="/logged"
            element={
              <ProtectedRoute>
                <Logged />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export { App };
