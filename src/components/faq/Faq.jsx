import React from "react";
import Question from "../question/Question";
import { FaqStyles } from "./FaqStyles";

const Faq = () => {
  return (
    <FaqStyles>
      <h2 className="faq-heading">Frequently asked questions</h2>

      <div className="faqs-container">
        <Question
          text={"What are the requirements to get a visa?"}
          answer="The requirement depends on the country you're applying to. Log in to see different countries and their requirements."
        />
        <Question
          text={"How long does the visa processing take?"}
          answer="In general, visa processing times can range from a few days to several weeks or even months."
        />
        <Question
          text={"Can I still be approved if I have no travel history?"}
          answer="Yes, having no travel history does not disqualify you from getting your visa approved."
        />
        <Question
          text={"How does VISAPROF obtain a visa for me?"}
          answer="We are registered with the visa bodies of 150 countries to obtain visas on behalf of our customers."
        />
        <Question
          text={"Do I need my passport at early stages of application?"}
          answer="Yes, you will need your passport as a means of identification."
        />
        <Question
          text={"Must I be vaccinated to travel abroad?"}
          answer="Some countries are not strict on vaccination, however for countries that are, we require a vaccination card to process your visa."
        />
      </div>
    </FaqStyles>
  );
};

export default Faq;
