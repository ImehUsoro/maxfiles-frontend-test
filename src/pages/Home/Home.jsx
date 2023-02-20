import React from "react";
import Assessment from "../../components/assessment/Assessment";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SectionFive from "../../components/section-five/SectionFive";
import SectionFour from "../../components/section-four/SectionFour";
import SectionOne from "../../components/section-one/SectionOne";
import SectionSix from "../../components/section-six/SectionSix";
import SectionThree from "../../components/section-three/SectionThree";
import SectionTwo from "../../components/section-two/SectionTwo";
import Statistics from "../../components/statistics/Statistics";
import { HomeStyles } from "./HomeStyles";

const Home = () => {
  return (
    <HomeStyles>
      {/* <Header /> */}
      <SectionOne />
      <Statistics />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Faq />
      <Assessment />
      <Footer />
    </HomeStyles>
  );
};

export default Home;
