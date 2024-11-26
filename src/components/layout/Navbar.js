import { Link } from "react-router-dom"
import './styleNavbar.css'
import logo from '../img/Brown Simple Icon Food Logo.png'
import { Search } from "lucide-react"
import { User } from "lucide-react"
import { House } from "lucide-react"
function Navbar() {
    return (
        <div>
            <div className="header">
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <ul className="menu">
                    <li className="menuMobile"><Link to='/'><House size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/pesquisa'><Search size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/user'><User size={25} /></Link></li>
                    <li className="menuDesktop"><Link className="Nav_link" to='/' >Home</Link></li>
                    <li className="menuDesktop"><Link className="Nav_link" to='/pesquisa' >Receitas</Link></li>
                    <li className="menuDesktop"><Link className="Nav_link" to='/user' >Sair</Link></li>
                </ul>
            </div>

        </div>


    )

}

export default Navbar