import React from "react";
import HomeHero from "../components/HomeHero";
import CustomerCount from "../components/CustomerCount";
import WhyUs from "../components/WhyUs";
import Testimonal from "../components/Testimonal";
import ServingList from "../components/ServingList";
import TrusteBy from "../components/TrusteBy";
import HomeFeatures from "../components/HomeFeatures";
import FetchData from "../components/FetchData";

function Homepage() {
  return (
    <main className="home">
      <HomeHero />
      <HomeFeatures />
      <CustomerCount />
      <WhyUs />
      <Testimonal />
      <ServingList />
      <TrusteBy />
      <FetchData />
    </main>
  );
}

export default Homepage;
