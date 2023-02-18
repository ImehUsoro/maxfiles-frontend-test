import React from "react";
import OfferCard from "../offer-card/OfferCard";
import { SectionThreeStyles } from "./SectionThreeStyles";

const SectionThree = () => {
  return (
    <SectionThreeStyles>
      <h2>What we offer our clients</h2>
      <div className="cards-container">
        <OfferCard
          icon="/images/consultation_icon.svg"
          title="Visa Consultation"
          text="Our qualified and dependable visa consultants can assist you in obtaining a favorable result in your case."
        />
        <OfferCard
          icon="/images/resources_icon.svg"
          title="Resources"
          text="We provide our clients with important information and resources and also the travel requirements needed."
        />
        <OfferCard
          icon="/images/support_icon.svg"
          title="Support"
          text="We also provide  required document support to ease the application process."
        />
        <OfferCard
          icon="/images/free_assessment_icon.svg"
          title="Free Assessment"
          text="We help those who want to know their eligibility status by assisting with free visa assessment."
        />
      </div>
    </SectionThreeStyles>
  );
};

export default SectionThree;
