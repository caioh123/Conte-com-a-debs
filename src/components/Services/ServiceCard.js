import React from "react";
import "./Services.css";

const ServiceCard = ({ title, children }) => {
  return (
    <div className="card-container grow">
      <p>{children}</p>
      <p className="desc-container">{title}</p>
    </div>
  );
};

export default ServiceCard;
