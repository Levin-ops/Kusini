import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Crumbs from "../Components/Crumbs/Crumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  // Check if product is not found
  if (!product) {
    return <div>Loading product...</div>; // Or a different loading/error UI
  }

  return (
    <div>
      <Crumbs product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts product={product} />
    </div>
  );
}

export default Product;
