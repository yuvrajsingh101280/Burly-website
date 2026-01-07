import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import BrandParallax from "../components/BrandParallax";
import Products from "../components/Products";
import WhyPartner from "../components/WhyPartner";
import Distributorship from "../components/Distributorship";
import ProductRangeInfo from "../components/ProductRangeInfo";
import NextSteps from "../components/NextSteps";
import DistributorInvestment from "../components/DistributorInvestment";
import Contact from "../components/Contat";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <BrandParallax />
      <Products />
      <WhyPartner />
      <ProductRangeInfo />
      <NextSteps />
      <DistributorInvestment />
      <Distributorship />
      <Contact />
    </>
  );
};

export default Home;
