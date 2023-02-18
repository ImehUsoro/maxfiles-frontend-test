import React from "react";
import { OfferCardStyles } from "./OfferCardStyles";

const OfferCard = ({ icon, title, text }) => {
  return (
    <OfferCardStyles>
      <img src={icon} alt="" className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </OfferCardStyles>
  );
};

export default OfferCard;
