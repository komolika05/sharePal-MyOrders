import React from "react";
import OrderItem from "./../orderItem/OrderItem";
import mockOrders from "./../mockData/mockData";
import "./OrderList.css";

const OrderList = () => {
  return (
    <div className="order-list-container">
      <h2>My Orders</h2>
      <div>
        {mockOrders.map((order) => (
          <div key={order.order_id} className="order-item">
            <OrderItem order={order} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
