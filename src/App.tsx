import { FormContainer } from "./components/FormContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Logged } from "./components/Logged";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export { App };
