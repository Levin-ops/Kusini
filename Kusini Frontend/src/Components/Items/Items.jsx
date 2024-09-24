import "./Items.css";
import React from "react";

function Items(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_prices">
        <p>Ksh.{props.price}</p>
      </div>
    </div>
  );
}

export default Items;
