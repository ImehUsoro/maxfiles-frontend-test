import React from "react";
import Header from "../../components/header/Header";
import SectionOne from "../../components/section-one/SectionOne";
import Statistics from "../../components/statistics/Statistics";
import { HomeStyles } from "./HomeStyles";

const Home = () => {
  return (
    <HomeStyles>
      <Header />
      <SectionOne />
      <Statistics />
    </HomeStyles>
  );
};

export default Home;
