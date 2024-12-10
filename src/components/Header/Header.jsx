import React from "react";
import logo from "../../assets/images/cybernetica_logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Cybernetica Logo"
        className="logo"
      />
      <nav className="nav">
        <ul>
          <li>
            <a href="/esports">E-Sports</a>
          </li>
          <li>
            <a href="/esportes">Esportes</a>
          </li>
          <li>
            <a href="/eventos">Eventos</a>
          </li>
          <li>
            <a href="/bateria">Bateria</a>
          </li>
          <li>
            <a href="/loja">Loja</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
