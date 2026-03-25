import React from "react";
import AboutDesign from "./AboutDesign";
import shieldIcon from "../../assets/icons/shield.svg";
import clockIcon from "../../assets/icons/clock.svg";
import FeatureList from "./FeatureList";
  

function About() {
  return (
    <section className="w-full bg-white px-6 lg:px-0 lg:mt-[45px]">
      <div className="lg:max-w-[1314px] lg:min-h-[589px] lg:ml-[80px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Use AboutDesign */}
        <div className="order-2 lg:order-1 flex justify-center lg:block lg:min-h-[589px]">
          <AboutDesign />
        </div>

        {/* Right Side: Content Column */}
        <div className="lg:absolute lg:mt-0 lg:ml-[652px] lg:w-[662px] lg:min-h-[589px] flex flex-col gap-6 lg:gap-7 order-1 lg:order-2">
          <div>
            <span className="block text-[#E60318] font-bold text-[26px] leading-none whitespace-nowrap">
              ABOUT COMPANY
            </span>
            <h2 className="text-[#1E2A38] text-[50px] font-extrabold leading-[64px] mt-2">
              Funding Your Future with Confidence
            </h2>
          </div>

          <p className="text-[#1E2A38] text-lg font-medium leading-7 lg:w-[628px] lg:min-h-[140px]">
            Total Loans is dedicated to providing reliable, transparent, and
            customer-focused financial solutions. We offer tailored loan
            services designed to meet personal and business needs, ensuring a
            smooth and secure borrowing experience. Our goal is to simplify
            financing and help our clients move forward with confidence.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-6 lg:w-[628px] lg:min-h-[201px] mt-4">
            <div className="flex items-start">
              <div className="w-[30px] h-[31px] mt-[2px] flex items-center justify-center flex-shrink-0">
                <img src={shieldIcon} alt="Secure" className="w-full h-full" />
              </div>
              <div className="w-full ml-2 flex-col">
                <h4 className="text-[#1E2A38] text-[26px] font-bold leading-none whitespace-nowrap">
                  100% Secure
                </h4>
                <p className="text-[#1E2A38] text-base font-normal leading-7 lg:w-[572px] mt-0">
                  Your financial information is protected with advanced security
                  measures to ensure complete safety and confidentiality
                </p>
              </div>
            </div>

            <div className="flex items-start lg:mt-[17px]">
              <div className="w-[31.4px] h-[31.4px] mt-[2px] flex items-center justify-center flex-shrink-0">
                <img src={clockIcon} alt="Fast" className="w-full h-full" />
              </div>
              <div className="w-full ml-2 flex-col">
                <h4 className="text-[#1E2A38] text-[26px] font-bold leading-none whitespace-nowrap">
                  Fast & Reliable
                </h4>
                <p className="text-[#1E2A38] text-base font-normal leading-7 lg:w-[547px] mt-0">
                  Quick processing and dependable support to deliver smooth,
                  hassle-free loan services.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Feature List for mobile only (below About section) */}
        <FeatureList className="mt-6 lg:hidden order-3" />
      </div>
    </section>
  );
}

export default About;
