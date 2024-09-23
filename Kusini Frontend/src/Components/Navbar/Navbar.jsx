import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Images/Kusini_logo.jpeg";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("beers");
          }}
        >
          <Link to="/beers" style={{ textDecoration: "none", color: "black" }}>
            Beers
          </Link>
          {menu == "beers" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("brandy");
          }}
        >
          <Link to="/brandy" style={{ textDecoration: "none", color: "black" }}>
            Brandy
          </Link>
          {menu == "brandy" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("gin");
          }}
        >
          <Link to="/gin" style={{ textDecoration: "none", color: "black" }}>
            Gin
          </Link>{" "}
          {menu == "gin" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sodas");
          }}
        >
          <Link to="/sodas" style={{ textDecoration: "none", color: "black" }}>
            Soft Drinks
          </Link>{" "}
          {menu == "sodas" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("spirits");
          }}
        >
          <Link
            to="/spirits"
            style={{ textDecoration: "none", color: "black" }}
          >
            Spirits
          </Link>{" "}
          {menu == "spirits" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("vodka");
          }}
        >
          <Link to="/vodka" style={{ textDecoration: "none", color: "black" }}>
            Vodka
          </Link>{" "}
          {menu == "vodka" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("whisky");
          }}
        >
          <Link to="/whisky" style={{ textDecoration: "none", color: "black" }}>
            Whisky
          </Link>{" "}
          {menu == "whisky" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("wine");
          }}
        >
          <Link to="/wine" style={{ textDecoration: "none", color: "black" }}>
            Wine
          </Link>
          {menu == "wine" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("others");
          }}
        >
          <Link to="/others" style={{ textDecoration: "none", color: "black" }}>
            Others
          </Link>{" "}
          {menu == "others" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav_login_cart">
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <BsCart3 className="icon" />
        </Link>

        <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
