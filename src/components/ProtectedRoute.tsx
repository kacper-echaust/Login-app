import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("IDToken");

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export { ProtectedRoute };
