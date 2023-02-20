import React from "react";
import TestimonialCard from "../testimonial-card/TestimonialCard";
import { SectionSixStyles } from "./SectionSixStyles";

const SectionSix = () => {
  return (
    <SectionSixStyles>
      <div className="image-and-text">
        <h2 className="section-heading">
          What <span>our clients</span> have to say?
        </h2>

        <img src="/images/circle_vector.png" alt="" className="hide" />
      </div>
      <div className="testimonials-container">
        <TestimonialCard
          image={"images/leke.png"}
          name="Mr Leke"
          text="I'm happy I chose to process my visa with you guys, not a single regret. Visa came right on time with no hassle."
        />
        <TestimonialCard
          image={"images/matthew.png"}
          name="Matthew Eke"
          text="The processing was fast and I got the visa right on time. Service is 100. Will definitely be doing more business with you. "
        />
        <TestimonialCard
          image={"images/debbie.png"}
          name="Debbie"
          text="VISAPROF for the win... Wow!! How were you able to do this so fast. If i didn't get this visa, I would have had to cancel my trip."
        />
      </div>
      <img src="/images/circle_vector_left.png" alt="" className="hide" />
    </SectionSixStyles>
  );
};

export default SectionSix;
