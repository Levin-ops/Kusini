import React from "react";
import "./Catalog.css";
import catalog_image from "../Assets/Images/Johnnie_Walker_Double_Black_Label.jpeg";

function Catalog() {
  return (
    <div className="catalog">
      <div className="catalog_left">
        <h1>CATALOG</h1>
        <h1>Vew Our Wide Collection</h1>
        <p>ALL IN ONE PLACE</p>
        <button>Order Now</button>
      </div>
      <div className="catalog_right">
        <img src={catalog_image} alt="" />
      </div>
    </div>
  );
}

export default Catalog;
