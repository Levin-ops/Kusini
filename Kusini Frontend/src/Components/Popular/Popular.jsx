import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR DRINKS</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
