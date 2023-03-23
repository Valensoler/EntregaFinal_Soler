import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'><h1 className="h1Primario">Donna Civetta</h1></NavLink>
            <div>
                <NavLink to ='/category/Remeras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Remeras </NavLink>
                <NavLink to ='/category/Pantalones' className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Pantalones </NavLink>
                <NavLink to ='/category/Shorts'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Shorts </NavLink>
                <NavLink to ='/category/Buzos'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Buzos </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar