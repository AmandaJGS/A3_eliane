import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");

  if (isAuthenticated === null) {
    console.error("Token não encontrado! Redirecionando para a página de login.");
  }

  return isAuthenticated ? children : <Navigate to="/auth/signin" replace />;
};

export default PrivateRoute;