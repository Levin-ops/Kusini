import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { BsArrowBarDown } from "react-icons/bs";
import Items from "../Components/Items/Items";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop_category">
      <div className="shop_category_index_sort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shop_category_sort">
          Sort by <BsArrowBarDown />
        </div>
      </div>
      <div className="shop_category_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop_category_load_more">Explore More!</div>
    </div>
  );
}

export default ShopCategory;
