import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`custom-navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links nav-left ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="/escalafon" className="nav-link">Escalafon</a></li>
        </ul>

        {/* Logo centrado */}
        <div className="logo-container">
          <a href="/">
            <img src="/logo2.png" alt="Logo EMS" className="navbar-logo-img" />
          </a>
        </div>

        <ul className={`nav-links nav-right ${menuOpen ? "active" : ""}`}>
          <li><a href="/uniformidad" className="nav-link">Uniformidad</a></li>
          <li><a href="/directiva" className="nav-link">Directiva</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
