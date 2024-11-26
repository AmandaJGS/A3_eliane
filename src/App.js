import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages.js/Home'
import Pesquisa from './components/pages.js/Pesquisa'
import User from './components/pages.js/User'
import Navbar from './components/layout/Navbar';
import Revenue from './components/Revenue';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
     
    <Router>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/pesquisa" element={<Pesquisa />} />
     <Route exact path="/user" element={<User />} />
     <Route exact path='/revenue' element={<Revenue/>}/>
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
