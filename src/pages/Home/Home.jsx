import React from "react";
import Header from "../../components/header/Header";
import SectionOne from "../../components/section-one/SectionOne";
import SectionThree from "../../components/section-three/SectionThree";
import SectionTwo from "../../components/section-two/SectionTwo";
import Statistics from "../../components/statistics/Statistics";
import { HomeStyles } from "./HomeStyles";

const Home = () => {
  return (
    <HomeStyles>
      <Header />
      <SectionOne />
      <Statistics />
      <SectionTwo />
      <SectionThree />
    </HomeStyles>
  );
};

export default Home;
