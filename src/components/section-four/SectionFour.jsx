import React from "react";
import TopDestinationCards from "../top-destination-cards/TopDestinationCards";
import { SectionFourStyles } from "./SectionFourStyles";

const SectionFour = () => {
  return (
    <SectionFourStyles>
      <h2>
        Top <span>Destinations</span>{" "}
      </h2>

      <div className="top-destination-cards-container">
        <TopDestinationCards
          bg={"#D19439"}
          image="/images/kenya.png"
          name="Kenya (E-visa)"
        />
        <TopDestinationCards
          bg={"#2D4253"}
          image="/images/uae.png"
          name="United Arab Emirates)"
        />
        <TopDestinationCards
          bg={"#D19439"}
          image="/images/nigeria.png"
          name="Nigeria (visa on arrival)"
        />
        <TopDestinationCards
          bg={"#2D4253"}
          image="/images/egypt.png"
          name="Egypt"
        />
      </div>
    </SectionFourStyles>
  );
};

export default SectionFour;
