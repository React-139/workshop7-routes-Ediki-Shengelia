import React from 'react'
import { NavLink} from "react-router-dom"
import "./Navbar.css"
import { routes } from '../constants/routers'

const Navbar = () => {
  return (
    <div>
        <NavLink to={routes.HOME}>Home</NavLink>
        <NavLink to={routes.USERS}>Users</NavLink>
    </div>
  )
}

export default Navbar