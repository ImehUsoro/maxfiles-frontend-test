import React from "react";
import { PopularDestinationCardStyles } from "./PopularDestinationCardStyles";

const PopularDestinationCard = ({ name, image, price }) => {
  return (
    <PopularDestinationCardStyles>
      <div className="name-container">
        <p>{name}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info-container">
        <p className="processing-time">Processing time:</p>
        <p className="days">2-3 working days</p>
        <p className="price">₦{price} per person</p>
      </div>
    </PopularDestinationCardStyles>
  );
};

export default PopularDestinationCard;
