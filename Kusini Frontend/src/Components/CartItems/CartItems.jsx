import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="cart_items">
      <div className="cart_item_format_main">
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart_items_format cart_item_format_main">
                <img src={e.image} className="cart_icon_product_icon" alt="" />
                <p>{e.name}</p>
                <p>Ksh.{e.price}</p>
                <button className="cart_item_quantity">
                  {cartItems[e.id]}
                </button>
                <p>Ksh.{e.price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  className="cart_items_remove_icon"
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart_items_down">
        <div className="cart_items_total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart_items_total_items">
              <p>Sub-Total</p>
              <p>Ksh.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_items_total_items">
              <p>Delivery Fee</p>
              <p>Ksh. 100</p>
            </div>
            <hr />
            <div className="cart_items_total_items">
              <h3>Total</h3>
              <h3>Ksh.{getTotalCartAmount() + 100} </h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
