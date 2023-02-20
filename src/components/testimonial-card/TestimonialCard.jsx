import React from "react";
import { TestimonialCardStyles } from "./TestimonialCardStyles";

const TestimonialCard = ({ name, image, text, space }) => {
  return (
    <TestimonialCardStyles>
      <img src={image} alt="" className="profile-image" />
      <p className="name">{name}</p>
      <div className="quote-container">
        <img src="/images/left_apostrophe.png" alt="" className="left" />
        <p className="text">{text}</p>
        <img src="/images/right_apostrophe.png" alt="" className="right" />
      </div>

      <div className="stars-container">
        <img src="/images/star.png" alt="" />
        <img src="/images/star.png" alt="" />
        <img src="/images/star.png" alt="" />
        <img src="/images/star.png" alt="" />
        <img src="/images/star.png" alt="" />
      </div>
    </TestimonialCardStyles>
  );
};

export default TestimonialCard;
