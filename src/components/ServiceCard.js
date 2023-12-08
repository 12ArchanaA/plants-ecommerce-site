import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={props.image} alt="" />
      </div>
      <h4>{props.name}</h4>
    </div>
  );
};

export default ServiceCard;
