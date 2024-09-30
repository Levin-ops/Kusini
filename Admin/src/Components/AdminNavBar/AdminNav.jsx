import React from "react";
import "./AdminNav.css";
import KusiniLogo from "../../Assets/Kusini_logo.jpeg";
import { BsPerson } from "react-icons/bs";

function AdminNav() {
  return (
    <div className="admin_navbar">
      <img src={KusiniLogo} alt="" className="admin_nav_logo" />
      <BsPerson className="admin_nav_profile" />
    </div>
  );
}

export default AdminNav;
