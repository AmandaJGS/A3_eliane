import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signin from './components/loginpage/src/pages/auth/Signin.jsx';
import Signup from './components/loginpage/src/pages/auth/Signup.jsx'; // Certifique-se que a extensão está correta
import ForgotPassword from './components/loginpage/src/pages/auth/ForgotPassword.jsx';
import Home from './components/pages.js/Home';
import Pesquisa from './components/pages.js/Pesquisa';
import Navbar from './components/layout/Navbar';
import Revenue from './components/Revenue';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/loginpage/src/routes/PrivateRoute'; // Ajuste o caminho do PrivateRoute

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Página inicial redirecionada para /auth/signin */}
          <Route path="/" element={<Navigate to="/auth/signin" />} />
          
          {/* Página de login */}
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          
          {/* Rotas protegidas com PrivateRoute */}
          <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path="/pesquisa" element={<PrivateRoute> <Pesquisa /> </PrivateRoute>} />
          <Route path="/revenue" element={<PrivateRoute> <Revenue /> </PrivateRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
