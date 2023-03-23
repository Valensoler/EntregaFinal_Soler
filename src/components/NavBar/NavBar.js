import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <h1> Donna Civetta </h1>
            <div>
                <NavLink to ='/category/Remeras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Remeras </NavLink>
                <NavLink to ='/category/Pantalones' className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Pantalones </NavLink>
                <NavLink to ='/category/Shorts'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Shorts </NavLink>
                <NavLink to ='/category/Buzos'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Buzos </NavLink>
            </div>
        </nav>
    )
}

export default NavBar