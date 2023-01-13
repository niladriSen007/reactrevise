import { NavLink } from "react-router-dom";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/GroupedTeamMembers">Teams</NavLink>
                </li>
        </ul>
    </nav>
  )
}

export default Navbar