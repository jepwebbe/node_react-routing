import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.scss"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink activeClassName="active" to="/">Hjem</NavLink></li>
        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
        <li><NavLink to="/produkter">Produkter</NavLink></li>
        <li><NavLink to="/om-os">Om os</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;