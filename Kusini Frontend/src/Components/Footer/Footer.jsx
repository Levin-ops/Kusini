import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/Images/Kusini_logo.jpeg";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
      </div>
      <ul className="footer_links">
        <li>Shop</li>
        <li>Drinks</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_icons_container">
          <BsInstagram className="icon" />
          <BsFacebook className="icon" />
          <BsWhatsapp className="icon" />
        </div>
      </div>
      <div className="footer_copyright">
        <hr />
        <p>Copyright @ 2024 | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
