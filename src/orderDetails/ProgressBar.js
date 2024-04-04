import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ stepName }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const steps = [
    "Order Received",
    "KYC Received",
    "Order Confirmed",
    "Order Packed",
    "Order Delivered",
    "Pickup Due",
    "Pickup Scheduled",
    "Quality Checked",
  ];

  function setActiveIndexForSteps() {
    const index = steps.findIndex((s) => s === stepName);
    setActiveIndex(index);
  }

  useEffect(() => {
    setActiveIndexForSteps();
  }, [stepName]);

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div className="stepper-item">
          <div
            className={`step-circle ${index <= activeIndex ? "active-circle" : ""}`}
          >
            <p className={`${index <= activeIndex ? "active-number" : ""}`}>
              {index + 1}
            </p>
            <p className={`label ${index <= activeIndex ? "active-label": ""}`}>{step}</p>
          </div>
        </div>
      ))}
      <div class="horizontal-line"></div>
    </div>
  );
};

export default ProgressBar;
