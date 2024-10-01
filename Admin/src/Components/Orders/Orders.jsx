import React, { useEffect, useState } from "react";
import "./Orders.css";
import removeIcon from "../../Assets/cart_cross_icon.png";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:4000/allorders");
    const data = await response.json();
    setAllOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const removeOrder = async (orderId) => {
    await fetch("http://localhost:4000/deleteorder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId }),
    });
    await fetchOrders(); // Refresh the order list
  };

  return (
    <div className="orders_container">
      <h1>All Orders List</h1>
      <div className="orders_format_main">
        <p>Order ID</p>
        <p>Customer Name</p>
        <p>Total Amount</p>
        <p>Status</p>
        <p>Remove</p>
      </div>
      <div className="orders_all_items">
        <hr />
        {allOrders.map((order, index) => (
          <div key={index} className="orders_format">
            <p>{order.orderId}</p>
            <p>{order.customer.name}</p>
            <p>KSh.{order.totalAmount}</p>
            <p>{order.status}</p>
            <img
              className="orders_remove_icon"
              src={removeIcon}
              alt="Remove"
              onClick={() => removeOrder(order.orderId)}
            />
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
}

export default Orders;
