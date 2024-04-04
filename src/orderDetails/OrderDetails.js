// OrderDetails.js
import React from "react";
import "./OrderDetails.css";
import OrderItem from "../orderItem/OrderItem";

const OrderDetails = ({ order }) => {
  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <div className="order-info">
        <h3>Order ID: {order.order_id}</h3>
        <p>Order Date: {order.order_date}</p>
        <p>Delivery Date: {order.delivery_date}</p>
        <p>Total Order Amount: {order.total_order_amount}</p>
        <p>Stage: {order.stage}</p>
      </div>
      <div className="order-items">
        <h3>Items:</h3>
        <OrderItem order={order} />
      </div>
      <button className="raise-ticket-btn">Raise Ticket</button>
    </div>
  );
};

export default OrderDetails;
