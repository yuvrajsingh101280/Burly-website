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
import useSEO from "../seo/useSEO";

const Home = () => {
  useSEO({
    title:
      "Burly Chem Products | Toilet Cleaner, Floor Cleaner, Dishwash Gel Manufacturer in India",
    description:
      "Leading Indian manufacturer of toilet cleaner, floor cleaner, dishwash gel, liquid detergent, glass cleaner, kitchen cleaner and car wash shampoo. Distributorship available across India.",
    canonical: "https://www.burlychemproducts.com/",
  });
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
