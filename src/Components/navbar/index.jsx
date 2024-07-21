import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <a href="#hero" className="logo">
          <p className="code-by-debo">&nbsp;&copy; Code by Debo</p>
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
