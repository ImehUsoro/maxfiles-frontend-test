import React from "react";
import { SectionOneStyles } from "./SectionTwoStyles";

const SectionTwo = () => {
  return (
    <SectionOneStyles>
      <div className="left-section">
        <h2>
          Africa's <span>leading</span> visa consultants
        </h2>
        <p>
          VISAPROF is a pioneer in Nigeria's online travel industry. The
          organization started in 2020 on the basis of an idea conceived by its
          promoters. VISAPROF is trusted by over 200 clients. We assist
          applicants in navigating the visa process to any country in which they
          choose to stay or visit.
        </p>
      </div>
      <div className="right-section">
        <img src="images/section_two_image.png" alt="" />
      </div>
    </SectionOneStyles>
  );
};

export default SectionTwo;
