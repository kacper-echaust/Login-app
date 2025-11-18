import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./Form/LoginForm";
import { RegisterForm } from "./Form/RegisterForm";
import { ProtectedRoute } from "./ProtectedRoute";
import { Logged } from "./Logged";
import { Home } from "./Home";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
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
  );
};

export { RoutesContainer };
