import React from "react";
import shieldIcon from "../../assets/icons/shield.svg";
import clockIcon from "../../assets/icons/clock.svg";

function FeatureList({ className = "" }) {
  return (
    <div className={`flex flex-col gap-4 md:gap-6 w-full md:w-[90%] lg:w-[628px] min-h-0 items-start text-left ${className}`}>
      <div className="flex items-start w-full">
        <div className="w-7 h-7 md:w-[30px] md:h-[31px] mt-[2px] flex items-center justify-center flex-shrink-0">
          <img src={shieldIcon} alt="Secure" className="w-full h-full" />
        </div>
        <div className="w-full ml-2 flex-col">
          <h4 className="text-[#1E2A38] text-lg md:text-[26px] font-bold leading-none whitespace-nowrap">
            Fast & Reliable
          </h4>
          <p className="text-[#1E2A38] text-sm md:text-base font-normal leading-7 w-full md:w-[90%] lg:w-[547px] mt-0">
            Quick processing and dependable support to deliver smooth, hassle-free loan services.
          </p>
        </div>
      </div>
      <div className="flex items-start md:mt-2 lg:mt-[17px]">
        <div className="w-7 h-7 md:w-[31.4px] md:h-[31.4px] mt-[2px] flex items-center justify-center flex-shrink-0">
          <img src={clockIcon} alt="Fast" className="w-full h-full" />
        </div>
        <div className="w-full ml-2 flex-col">
          <h4 className="text-[#1E2A38] text-lg md:text-[26px] font-bold leading-none whitespace-nowrap">
            100% Secure
          </h4>
          <p className="text-[#1E2A38] text-sm md:text-base font-normal leading-7 w-full md:w-[90%] lg:w-[572px] mt-0">
            Your financial information is protected with advanced security measures to ensure complete safety and confidentiality
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;