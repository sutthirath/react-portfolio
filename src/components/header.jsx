import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import "./header.css";
import logo from "../images/sean_flash.jpg";

const Header = () => (
  <div className="Header">
    <Link to="/">
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
    </Link>
    <div>
      <Nav />
    </div>
  </div>
);

export default Header;
