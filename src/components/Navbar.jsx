import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`custom-navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="logo">🔥 Phoenix</div>

        {/* Botón de menú hamburguesa */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
