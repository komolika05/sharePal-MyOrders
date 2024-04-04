import react, { useState } from "react";
import "./RaiseTicket.css";

function RaiseTicket({ orderId, handleCloseModal, handleSubmit }) {
  const [subject, setSubject] = useState("");

  return (
    <div className="ticket-container">
      <span className="close" onClick={handleCloseModal}>
        &times;
      </span>
      <form className="form-container" onSubmit={() => {
                  alert(`Issue raised with subject: ${subject}`);

        handleSubmit()}}>
        <label>
          Subject
        </label>
        <textarea
            className={"message-input"}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RaiseTicket;
