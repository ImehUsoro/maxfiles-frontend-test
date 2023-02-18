import React from "react";
import { TopDestinationCardStyles } from "./TopDestinationCardsStyles";

const TopDestinationCards = ({ bg, image, name }) => {
  return (
    <TopDestinationCardStyles bg={bg}>
      <div className="top">
        <img src={image} alt="" />
      </div>
      <div className="bottom">
        <p>{name}</p>
      </div>
    </TopDestinationCardStyles>
  );
};

export default TopDestinationCards;
