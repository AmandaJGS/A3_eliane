import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Signin from './components/loginpage/src/pages/auth/Signin.jsx';
import Signup from './components/loginpage/src/pages/auth/Signup.jsx';
import ForgotPassword from './components/loginpage/src/pages/auth/ForgotPassword.jsx';
import Home from './components/pages.js/Home';
import Pesquisa from './components/pages.js/Pesquisa';
import Navbar from './components/layout/Navbar';
import Revenue from './components/Revenue';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/loginpage/src/routes/PrivateRoute';
import Authlayout from "./components/loginpage/src/layout/Authlayout";  // Importando o Authlayout

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation(); // Usando useLocation para controle da Navbar
  
  return (
    <>
      {/* Verifica se a rota não é '/auth/signin' e renderiza a Navbar */}
      {location.pathname !== '/auth/signin' && <Navbar />}
      
      <Routes>
        {/* Página inicial redirecionada para /auth/signin */}
        <Route path="/" element={<Navigate to="/auth/signin" />} />
        
        {/* Rotas de autenticação com Authlayout */}
        <Route path="/auth/signin" element={<Authlayout><Signin /></Authlayout>} />
        <Route path="/auth/signup" element={<Authlayout><Signup /></Authlayout>} />
        <Route path="/auth/forgotpassword" element={<Authlayout><ForgotPassword /></Authlayout>} />
        
        {/* Rotas protegidas com PrivateRoute */}
        <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path="/pesquisa" element={<PrivateRoute> <Pesquisa /> </PrivateRoute>} />
        <Route path="/revenue" element={<PrivateRoute> <Revenue /> </PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
