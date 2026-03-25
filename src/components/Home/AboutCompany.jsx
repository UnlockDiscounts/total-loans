import React from "react";
import AboutCompanyHeading from "./AboutCompanyHeading";

function AboutCompany() {
  return (
    <>
      <AboutCompanyHeading />
      <div className="border-2 border-[#E60318] rounded-xl bg-white shadow-md px-6 md:px-12 lg:px-20 py-6 md:py-8 lg:py-10 transition-all duration-300 hover:shadow-lg text-center mt-4">
        
          Total Loans is dedicated to providing <span className="font-semibold text-[#E60318]">reliable</span>, <span className="font-semibold text-[#E60318]">transparent</span>, and <span className="font-semibold text-[#E60318]">customer-focused</span> financial solutions. We offer tailored loan services designed to meet personal and business needs, ensuring a smooth and secure borrowing experience. Our goal is to simplify financing and help our clients move forward with confidence.
        
      </div>
    </>
  );
}

export default AboutCompany;
