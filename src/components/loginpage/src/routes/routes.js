import { Routes, Route } from 'react-router-dom';
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";

// Rotas de autenticação
export const authRoutes = [
  { path: "/auth/signin", element: <Signin /> },
  { path: "/auth/signup", element: <Signup /> },
  { path: "/auth/forgot-password", element: <ForgotPassword /> },
];

// Rotas de administração
export const adminRoutes = [
  { path: "/admin/dashboard", element: <Dashboard /> },
  { path: "/admin/products", element: <Products /> },
  { path: "/admin/add-product", element: <AddProduct /> },
];

function AppRoutes() {
  return (
    <Routes>
      {/* Renderizando as rotas de autenticação */}
      {authRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Renderizando as rotas de administração */}
      {adminRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
