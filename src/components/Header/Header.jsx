import React, { useState, useEffect, useRef, useCallback } from "react";
import logo from "../../assets/images/cybernetica_logo.png";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    },
    [drawerRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Cybernetica Logo" className="logo" />

        <button className="drawer-toggle" onClick={toggleDrawer}>
          <MenuIcon />
        </button>
      </div>
      <nav className={`nav ${isDrawerOpen ? "open" : ""}`} ref={drawerRef}>
        <button className="close-drawer" onClick={closeDrawer}>
          <CloseIcon />
        </button>
        <ul>
          <li className={location.pathname === "/esports" ? "highlighted" : ""}>
            <a href="/esports">E-Sports</a>
          </li>
          <li
            className={location.pathname === "/esportes" ? "highlighted" : ""}
          >
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
