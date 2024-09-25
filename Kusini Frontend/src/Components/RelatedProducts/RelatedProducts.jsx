import React from "react";
import "./RelatedProducts.css";
import all_product from "../Assets/all_product";
import Items from "../Items/Items";

function RelatedProducts({ product }) {
  const relatedProduct = all_product
    .filter(
      (item) => item.category === product.category && item.id !== product.id
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  return (
    <div className="related_products">
      <h1>Related Products</h1>
      <hr />
      <div className="related_products_item">
        {relatedProduct.map((item, i) => {
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

export default RelatedProducts;
