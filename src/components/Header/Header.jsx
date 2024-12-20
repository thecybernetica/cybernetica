import React from "react";
import logo from "../../assets/images/cybernetica_logo.png";
import "./Header.css";

import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  console.log(location)

  return (
    <header className="header">
      <img
        src={logo}
        alt="Cybernetica Logo"
        className="logo"
      />
      <nav className="nav">
        <ul>
          <li className={location.pathname === "/esports" ? "highlighted" : ""}>
            <a href="/esports">E-Sports</a>
          </li>
          <li className={location.pathname === "/esportes" ? "highlighted" : ""}>
            <a href="/esportes">Esportes</a>
          </li>
          <li className={location.pathname === "/eventos" ? "highlighted" : ""}>
            <a href="/eventos">Eventos</a>
          </li>
          <li className={location.pathname === "/bateria" ? "highlighted" : ""}>
            <a href="/bateria">Bateria</a>
          </li>
          <li className={location.pathname === "/loja" ? "highlighted" : ""}>
            <a href="/loja">Loja</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
