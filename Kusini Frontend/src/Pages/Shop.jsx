import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Catalog from "../Components/Catalog/Catalog";
import TopShelf from "../Components/TopShelf/TopShelf";
import Newsletter from "../Components/Newsletter/Newsletter";

function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Catalog />
      <TopShelf />
      <Newsletter />
    </div>
  );
}

export default Shop;
