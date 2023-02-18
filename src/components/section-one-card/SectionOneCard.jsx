import React from "react";
import { SectionOneStyles } from "./SectionOneCardStyles";

const SectionOneCard = ({ type, title, info, subInfo, widthChange }) => {
  return (
    <SectionOneStyles
      group={`${subInfo ? true : false}`}
      widthChange={widthChange}
    >
      <p className="card-title">{title}</p>
      <div className="card-info">
        <p>{info}</p>
        <img src="/images/section_one-drop_down.png" alt="" />
      </div>
      {subInfo && <p className="sub-info">{subInfo}</p>}
    </SectionOneStyles>
  );
};

export default SectionOneCard;
