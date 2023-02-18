import React from "react";
import { SingleStatStyles } from "./SingleStatStyles";

const SingleStat = ({ stat, text }) => {
  return (
    <SingleStatStyles>
      <h2>{stat}</h2>
      <p>c{text}</p>
    </SingleStatStyles>
  );
};

export default SingleStat;
