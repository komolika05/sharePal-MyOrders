import React from "react";
import "./OrderItem.css";

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-details">
        <h3>{order.product}</h3>
        <p>{order.stage}</p>
      </div>
    </div>
  );
};

export default OrderItem;
