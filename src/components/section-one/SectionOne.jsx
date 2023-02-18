import React from "react";
import SectionOneCard from "../section-one-card/SectionOneCard";
import { SectionOneStyles } from "./SectionOneStyles";

const SectionOne = () => {
  return (
    <SectionOneStyles>
      <h2 className="title">PROMPT AND EASY STEPS FOR VISA PROCESSING</h2>
      <div className="blur-background">
        <div className="cards">
          <div className="card-group group-one">
            <SectionOneCard
              type="one"
              title={"Traveling from?"}
              info={"Lagos, Nigeria"}
            />
            <div className="image-container">
              <img src="/images/flights_icon.png" alt="" />
            </div>
            <SectionOneCard
              type="one"
              title={"Traveling to?"}
              info={"Nairobi, Kenya"}
            />
          </div>
          <div className="card-group">
            <SectionOneCard
              type="two"
              title={"Departure date"}
              info={"27th Jul 2022"}
              subInfo={"Wednesday"}
              widthChange
            />
            <SectionOneCard
              type="two"
              title={"Return date"}
              info={"07th Aug 2022"}
              subInfo={"Thursday"}
              widthChange
            />
          </div>
          <div className="card-group">
            <SectionOneCard
              type="two"
              title={"Travellers/ Class"}
              info={"1 / Economy"}
              subInfo={"traveller"}
              widthChange
            />
            <SectionOneCard
              type="one"
              title={"Visa type"}
              info={"Tourist visa"}
              widthChange
            />
          </div>
        </div>
        <img src="/images/scroll_icon.png" alt="" className="scroll-icon" />
      </div>
    </SectionOneStyles>
  );
};

export default SectionOne;
