import React from "react";
import "./navbar.css";
import logo from "./public/Kusini_logo.jpeg";
import { BsCart3 } from "react-icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
