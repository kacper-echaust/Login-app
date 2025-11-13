import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./Form/LoginForm";
import { RegisterForm } from "./Form/RegisterForm";

const FormContainer = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export { FormContainer };
