import React from 'react';
import './OrderItem.css';

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-details">
        <h3>Order ID: {order.order_id}</h3>
        <p>Order Date: {order.order_date}</p>
        {/* Display other order details like delivery date, total amount, etc. */}
      </div>
    </div>
  );
};

export default OrderItem;
