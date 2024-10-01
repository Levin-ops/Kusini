import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import addProduct from "../../Assets/addproduct.png";
import listProduct from "../../Assets/listProduct.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link
        to="addproducts" // relative path within /admin
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="sidebar_item">
          <img src={addProduct} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link
        to="listproducts" // relative path within /admin
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="sidebar_item">
          <img src={listProduct} alt="" />
          <p>Products List</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
