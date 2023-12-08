import React from "react";
import "../styles/ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={props.image} alt="" />
      </div>
      <p>{props.name}</p>
      <p>$ {props.price}</p>
    </div>
  );
};

export default ItemCard;
