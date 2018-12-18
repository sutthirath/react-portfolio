import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import logo from "../images/sean_flash.jpg";

const Header = () => (
  <div className="container">
    <Link to="/">
      <img className="logo" src={logo} />
    </Link>
    <Nav />
  </div>
);

export default Header;
