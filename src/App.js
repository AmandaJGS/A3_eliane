import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages.js/Home'
import Criar from './components/pages.js/Criar'
import Pesquisa from './components/pages.js/Pesquisa'
import User from './components/pages.js/User'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
     
    <Router>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/criar" element={<Criar />} />
     <Route exact path="/pesquisa" element={<Pesquisa />} />
     <Route exact path="/user" element={<User />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
