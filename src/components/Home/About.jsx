import React from "react";
import aboutImage1 from "../../assets/images/about-image1.png";
import aboutImage2 from "../../assets/images/about-image2.png";
import shieldIcon from "../../assets/icons/shield.svg";
import clockIcon from "../../assets/icons/clock.svg";

function About() {
  return (
    <section className="w-full bg-white px-6 lg:px-0 lg:mt-[45px]">
      <div className="lg:max-w-[1314px] lg:min-h-[589px] lg:ml-[80px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Layered Images */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:block lg:min-h-[589px]">
          {/* Base Image */}
          <div className="lg:absolute lg:mt-0 lg:ml-0 w-full max-w-[411px] lg:w-[411px] h-[395px] bg-gray-200 rounded-[15px] overflow-hidden shadow-[0px_8px_30px_0px_#00000040] z-10">
            <img
              src={aboutImage1}
              alt="About Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlap Image */}
          <div className="lg:absolute lg:top-[134px] lg:left-[304px] w-full max-w-[305px] lg:w-[305px] h-[405px] rounded-[15px] shadow-[0px_8px_30px_0px_#00000040] z-20 overflow-hidden mt-8 lg:mt-0">
            <img
              src={aboutImage2}
              alt="About Image 2"
              className="w-full h-full object-cover scale-[1.15]"
            />
          </div>

          {/* Quote Box */}
          <div className="lg:absolute lg:mt-[337px] lg:ml-[56px] w-full max-w-[300px] lg:w-[300px] h-auto lg:h-[142px] bg-[#1E2A38] text-white rounded-[15px] shadow-2xl z-30 mt-8 lg:mt-0 relative overflow-hidden">
            {/* Quote Symbol */}
            <div className="lg:absolute lg:mt-8 lg:ml-[22px] text-white text-[72px] leading-7 font-normal">
              "
            </div>
            {/* Quote Text */}
            <p className="lg:absolute lg:mt-[39px] lg:ml-[53px] text-lg lg:text-lg leading-6 font-medium max-w-[243px]">
              Quick approval, clear process, and outstanding support throughout.
            </p>
          </div>
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
              <div className="w-full">
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
              <div className="w-full">
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
      </div>
    </section>
  );
}

export default About;
