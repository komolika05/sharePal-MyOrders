import React, { useState } from "react";
import OrderItem from "./../orderItem/OrderItem";
import OrderDetails from "./../orderDetails/OrderDetails";
import mockOrders from "./../mockData/mockData";
import "./OrderList.css";

const OrderList = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="order-list-container">
      <h2 className="myOrder">My Orders</h2>
      <div className="list">
        {mockOrders.map((order) => (
          <div key={order.order_id} className="order-list">
            {selectedOrder === order ? (
              <OrderDetails order={order} />
            ) : (
              <div onClick={() => handleOrderClick(order)}>
                <OrderItem order={order} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
