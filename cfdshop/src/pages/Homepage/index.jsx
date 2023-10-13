import React from "react";
import IntroSection from "./IntroSection";
import HotProductSection from "./HotProductSection";
import DealSection from "./DealSection";
import BrandSection from "./BrandSection";
import FeatureSection from "./FeatureSection";
import ServiceSection from "./ServiceSection";
import GetDealSection from "./GetDealSection";
import useHomePage from "../../hooks/useHomePage";

const HomePage = () => {
  const {
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featuredProps,
    serviceProps,
    getDealProps,
  } = useHomePage();
  return (
    <main className="main">
      <IntroSection {...introProps} />
      <HotProductSection />
      <div className="mb-7 mb-lg-11" />
      {/*  */}
      <DealSection />
      <BrandSection />
      <div className="container">
        <hr className="mt-3 mb-6" />
      </div>
      <div className="container">
        <hr className="mt-5 mb-6" />
      </div>
      <FeatureSection />
      <div className="container">
        <hr className="mt-5 mb-0" />
      </div>
      <ServiceSection />
      <GetDealSection />
    </main>
  );
};

export default HomePage;
