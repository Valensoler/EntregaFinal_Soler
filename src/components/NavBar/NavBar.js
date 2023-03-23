import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <h1> Donna Civetta </h1>
            <div>
                <NavLink to ='/category/remeras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Remeras </NavLink>
                <NavLink to ='/category/pantalones' className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Pantalones </NavLink>
                <NavLink to ='/category/shorts'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Shorts </NavLink>
            </div>
        </nav>
    )
}

export default NavBar