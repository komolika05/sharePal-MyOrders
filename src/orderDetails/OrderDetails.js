import React, { useState } from "react";
import "./OrderDetails.css";
import ProgressBar from "./ProgressBar";

const OrderDetails = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState("");

  const handleRaiseTicket = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    alert(`Issue raised with subject: ${subject}`);
    setIsModalOpen(false);
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
        <ProgressBar stepName={order.stage}/>
      </div>
      <button className="raise-ticket-btn" onClick={handleRaiseTicket}>
        Raise Ticket
      </button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Raise Ticket</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Subject:
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
