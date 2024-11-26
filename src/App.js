import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/loginpage/src/pages/auth/Signin';
 // Importação do componente Signin
import Home from './components/pages.js/Home';
import Pesquisa from './components/pages.js/Pesquisa';
import User from './components/pages.js/User';
import Navbar from './components/layout/Navbar';
import Revenue from './components/Revenue';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Página inicial redirecionada para Signin */}
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/pesquisa" element={<Pesquisa />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/revenue" element={<Revenue />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
