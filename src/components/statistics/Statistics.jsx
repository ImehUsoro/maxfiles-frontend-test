import React from "react";
import SingleStat from "../statistic/SingleStat";

import { StatisticsStyles } from "./StatisticsStyles";

const Statistics = () => {
  return (
    <StatisticsStyles>
      <SingleStat stat={"200"} text={"clients who have trusted us"} />
      <div className="divider"></div>
      <SingleStat stat={"98%"} text={"Successful visa process rate"} />
      <div className="divider"></div>

      <SingleStat stat={"60 hrs"} text={"Application approval time"} />
    </StatisticsStyles>
  );
};

export default Statistics;
