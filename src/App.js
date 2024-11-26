import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes, // Alteração: usamos Routes no lugar de Switch
  Navigate, // Alteração: substituímos Redirect por Navigate
} from "react-router-dom";
import { adminRoutes, authRoutes } from "./routes/routes";
import Authlayout from "./layout/Authlayout";
import Adminlayout from "./layout/Adminlayout";

function App() {
  return (
    <Router>
      <Routes> {/* Alteração: usamos Routes em vez de Switch */}
        {/* Rotas de autenticação */}
        {authRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Authlayout>
                <route.component />
              </Authlayout>
            }
          />
        ))}
        {/* Rotas de administração */}
        {adminRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Adminlayout>
                <route.component />
              </Adminlayout>
            }
          />
        ))}
        {/* Redirecionamento */}
        <Route path="/" element={<Navigate to="/auth/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
