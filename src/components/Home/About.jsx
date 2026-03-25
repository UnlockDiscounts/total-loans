import React from "react";


import AboutDesign from "./AboutDesign";
import AboutCompany from "./AboutCompany";
import FeatureList from "./FeatureList";




function About() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-0 lg:mt-[45px]">
      <div className="w-full lg:max-w-[1314px] min-h-0 lg:min-h-[589px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center relative">
        {/* Left: Design (Images/Quote) */}
        <div className="order-2 lg:order-1 w-full">
          <AboutDesign />
        </div>
        {/* Right: About Company and Feature List */}
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-7 order-1 lg:order-2 mt-6 lg:mt-0 lg:absolute lg:top-0 lg:left-[652px] lg:w-[662px] lg:min-h-[589px]">
          <AboutCompany />
          {/* Feature List for desktop only */}
          <FeatureList className="hidden lg:flex min-h-[201px] mt-2 md:mt-4" />
        </div>
        {/* Feature List for mobile only (below About section) */}
        <FeatureList className="mt-6 lg:hidden order-3" />
      </div>
    </section>
  );
}

export default About;
