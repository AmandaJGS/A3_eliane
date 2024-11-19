import { Link } from "react-router-dom"
import './styleNavbar.css'
import logo from '../img/Brown Simple Icon Food Logo.png'
import { Search } from "lucide-react"
import { User } from "lucide-react"
import { CirclePlus } from "lucide-react"
import { House } from "lucide-react"
function Navbar() {
    return (
        <div>
            <div className="header">
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <ul className="menu">
                    <li className="menuMobile"><Link to='/'><House size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/criar'><CirclePlus size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/pesquisa'><Search size={25} /></Link></li>
                    <li className="menuMobile"><Link to='/user'><User size={25} /></Link></li>
                    <li className="menuDesktop"><Link to='/' >Home</Link></li>
                    <li className="menuDesktop"><Link to='/criar' >Criar</Link></li>
                    <li className="menuDesktop"><Link to='/pesquisa' >Pesquisa</Link></li>
                    <li className="menuDesktop"><Link to='/user' >User</Link></li>
                </ul>
            </div>

        </div>


    )

}

export default Navbar