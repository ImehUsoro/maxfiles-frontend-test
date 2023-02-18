import React from "react";
import PopularDestinationCard from "../popular-destination-card/PopularDestinationCard";
import { SectionFiveStyles } from "./SectionFiveStyles";

const SectionFive = () => {
  return (
    <SectionFiveStyles>
      <h2 className="main-title">Popular destinations</h2>
      <div className="sub-heading-container">
        <p className="sub-heading">Tourist visa only</p>
      </div>

      <div className="popular-destination-container">
        <img src={"/images/previous_icon.png"} alt="" />
        <div className="popular-destinations-cards-container">
          <PopularDestinationCard
            name="United Arab Emirates"
            image="/images/popular_uae.png"
            price="30,000"
          />
          <PopularDestinationCard
            name="Maldives"
            image="/images/maldives.png"
            price="28,000"
          />
          <PopularDestinationCard
            name="South Africa"
            image="/images/south_africa.png"
            price="23,600"
          />
          <PopularDestinationCard
            name="Jordan"
            image="/images/jordan.png"
            price="25,000"
          />
        </div>
        <img src={"/images/next_icon.png"} alt="" />
      </div>
    </SectionFiveStyles>
  );
};

export default SectionFive;
