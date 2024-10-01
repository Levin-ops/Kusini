import React from "react";
import "./Admin.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProducts from "../../Components/AddProducts/AddProducts";
import ListProducts from "../../Components/ListProducts/ListProducts";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="addproducts" element={<AddProducts />} />
        <Route path="listproducts" element={<ListProducts />} />
      </Routes>
    </div>
  );
}

export default Admin;
