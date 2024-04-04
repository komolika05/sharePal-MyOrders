import React, { useState } from "react";
import "./OrderDetails.css";
import ProgressBar from "./ProgressBar";
import RaiseTicket from "./RaiseTicket";

const OrderDetails = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRaiseTicket = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      <div className="order-info">
        <p>Order ID: {order.order_id}</p>
        <p>Rental Date: {order.rental_start_date}</p>
        <p>Rental End Date: {order.rental_end_date}</p>
        <p>Total Order Amount: {order.total_order_amount}</p>
      </div>
      <div className="order-items">
        <h3>Stage:</h3>
        <ProgressBar stepName={order.stage} />
      </div>
      <button className="raise-ticket-btn" onClick={handleRaiseTicket}>
        Raise Ticket
      </button>
      {isModalOpen && (
        <RaiseTicket
          orderId={order.order_id}
          handleCloseModal={() => {
            setIsModalOpen(false);
          }}
          handleSubmit={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default OrderDetails;
