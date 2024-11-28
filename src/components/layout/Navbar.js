import { Link, useNavigate } from "react-router-dom";
import './styleNavbar.css';
import logo from '../img/Brown Simple Icon Food Logo.png';
import { Search } from "lucide-react";
import { House } from "lucide-react";

function Navbar() {
    const navigate = useNavigate(); // Hook do react-router-dom para redirecionamento

    // Função para realizar o logout
    const handleLogout = () => {
        // Remover o token do localStorage
        localStorage.removeItem('token');
        console.log('Usuário desconectado');
        
        // Redirecionar para a página de login
        navigate('/auth/signin');
    };

    return (
        <div>
            <div className="header">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <ul className="menu">
                    <li className="menuMobile"><Link to='/home'><House size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/pesquisa'><Search size={25} /></Link></li>
                    <li className="menuDesktop"><Link className="Nav_link" to='/home' >Home</Link></li>
                    <li className="menuDesktop"><Link className="Nav_link" to='/pesquisa' >Receitas</Link></li>
                    <li className="menuDesktop"><button className="Nav_link" onClick={handleLogout}>Sair</button></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
