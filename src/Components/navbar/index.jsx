import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <p className="code-by-debo">&nbsp;&copy; Code by Debo</p>
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="#about">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Involvement</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
