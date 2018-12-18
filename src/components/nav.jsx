import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => (
  <nav className="Nav">
    <ul>
      <Link to="/">
        <li className="nav-btn">WELCOME</li>
      </Link>
      <Link to="/projects">
        <li className="nav-btn">PROJECTS</li>
      </Link>
      <Link to="/resume">
        <li className="nav-btn">RESUME</li>
      </Link>
      <Link to="/contact">
        <li className="nav-btn">CONTACT</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
