import aboutImage1 from "../../assets/images/about-image1.png";
import aboutImage2 from "../../assets/images/about-image2.png";
import shieldIcon from "../../assets/icons/shield.svg";
import clockIcon from "../../assets/icons/clock.svg";

function About() {
  return (
    <section className="w-full bg-white lg:mt-11">
      {/* DESKTOP ABOUT */}
      <div className="hidden lg:block px-6 lg:px-8">
        <div className="lg:max-w-[1314px] mx-auto grid grid-cols-1 lg:grid-cols-[609px_1fr] gap-16 lg:gap-11 items-center">
          {/* Left Side */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:block min-h-[500px] lg:min-h-[589px] lg:w-[609px]">
            {/* Base Image */}
            <div className="lg:absolute lg:top-0 lg:left-0 w-full max-w-[411px] h-[395px] bg-gray-200 rounded-2xl overflow-hidden shadow-[0px_8px_30px_0px_#00000040] z-10">
              <img
                src={aboutImage1}
                alt="About Image 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlap Image */}
            <div className="lg:absolute lg:top-[134px] lg:left-[304px] w-full max-w-[305px] h-[405px] rounded-2xl shadow-[0px_8px_30px_0px_#00000040] z-20 overflow-hidden mt-8 lg:mt-0">
              <img
                src={aboutImage2}
                alt="About Image 2"
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>

            {/* Quote Box */}
            <div className="lg:absolute lg:top-[337px] lg:left-14 w-full max-w-[330px] h-auto lg:h-[142px] bg-[#1E2A38] text-white rounded-2xl shadow-2xl z-30 mt-8 lg:mt-0 relative overflow-hidden">
              {/* Quote Symbol */}
              <div className="absolute top-8 left-[22px] text-white text-[72px] font-normal leading-7">
                "
              </div>
              {/* Quote Text */}
              <div className="pt-10 pl-13 pr-4 pb-6">
                <p className="text-lg font-medium leading-6 max-w-[260px]">
                  Quick approval, clear process, and outstanding support
                  throughout.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Content Column */}
          <div className="flex flex-col gap-6 lg:gap-7 order-1 lg:order-2 lg:max-w-[662px] w-full">
            <div>
              <span className="block text-[#E60318] font-bold text-[26px] leading-none whitespace-nowrap">
                ABOUT COMPANY
              </span>
              <h2 className="text-[#1E2A38] text-[32px] md:text-[40px] lg:text-[50px] font-extrabold leading-tight lg:leading-[64px] mt-2">
                Funding Your Future with Confidence
              </h2>
            </div>

            <p className="text-[#1E2A38] text-lg font-medium leading-7 w-full">
              Total Loans is dedicated to providing reliable, transparent, and
              customer-focused financial solutions. We offer tailored loan
              services designed to meet personal and business needs, ensuring a
              smooth and secure borrowing experience. Our goal is to simplify
              financing and help our clients move forward with confidence.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-6 w-full mt-4">
              <div className="flex items-start">
                <div className="w-[30px] h-[31px] mt-[2px] flex items-center justify-center flex-shrink-0">
                  <img
                    src={shieldIcon}
                    alt="Secure"
                    className="w-full h-full"
                  />
                </div>
                <div className="w-full ml-4">
                  <h4 className="text-[#1E2A38] text-[26px] font-bold leading-none">
                    100% Secure
                  </h4>
                  <p className="text-[#1E2A38] text-base font-normal leading-7 w-full mt-1">
                    Your financial information is protected with advanced
                    security measures to ensure complete safety and
                    confidentiality
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-[31.4px] h-[31.4px] mt-[2px] flex items-center justify-center flex-shrink-0">
                  <img src={clockIcon} alt="Fast" className="w-full h-full" />
                </div>
                <div className="w-full ml-4">
                  <h4 className="text-[#1E2A38] text-[26px] font-bold leading-none">
                    Fast & Reliable
                  </h4>
                  <p className="text-[#1E2A38] text-base font-normal leading-7 w-full mt-1">
                    Quick processing and dependable support to deliver smooth,
                    hassle-free loan services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ABOUT */}
      <div className="block lg:hidden px-4 pt-12 pb-10">
        <div className="flex flex-col items-center text-center">
          {/* Section Subtitle */}
          <span className="text-[#E60318] text-lg font-bold leading-none mb-4">
            ABOUT COMPANY
          </span>

          {/* Section Main Title */}
          <h2 className="text-black text-xl font-[800] leading-[27px] max-w-[280px] mb-8">
            Funding Your Future with Confidence
          </h2>

          {/* Bordered Paragraph Card */}
          <div className="w-full bg-white border-[0.5px] border-[#E60318] rounded-lg p-5 px-4 py-7.5">
            <p className="text-[#1E2A38] text-[15px] font-[500] leading-[22px]">
              Total Loans is dedicated to providing reliable, transparent, and
              customer-focused financial solutions. We offer tailored loan
              services designed to meet personal and business needs, ensuring a
              smooth and secure borrowing experience. Our goal is to simplify
              financing and help our clients move forward with confidence.
            </p>
          </div>

          {/* Layered Image Section */}
          <div className="relative w-full max-w-[380px] h-[310px] mx-auto mt-10 mb-12">
            {/* Base Image */}
            <div className="absolute top-0 left-0 w-[211px] h-48 rounded-lg overflow-hidden shadow-[0px_8px_30px_0px_#00000040] z-10">
              <img
                src={aboutImage1}
                alt="About Image 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlap Image  */}
            <div className="absolute top-22 right-[5px] w-[174px] h-[207px] rounded-lg overflow-hidden shadow-[0px_8px_30px_0px_#00000040] z-20">
              <img
                src={aboutImage2}
                alt="About Image 2"
                className="w-full h-full object-cover scale-[1.15]"
              />
            </div>

            {/* Quote Box */}
            <div className="absolute top-[183px] left-8 w-[215px] h-[91px] bg-[#1E2A38] text-white rounded-[6px] shadow-2xl z-30 overflow-hidden">
              {/* Quote Symbol */}
              <div className="absolute top-2 left-3 text-white text-[44px] font-normal leading-none opacity-80">
                "
              </div>
              {/* Quote Text */}
              <div className="pt-[22px] pl-[34px] pr-2 pb-2 text-left">
                <p className="text-xs font-[400] leading-[15px] max-w-[170px]">
                  Quick approval, clear process, and outstanding support
                  throughout.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-4 w-full">
            {/* Card 1 */}
            <div
              className="w-full h-21 bg-white rounded-[6px] p-3.5 px-2.5 flex items-start gap-2"
              style={{ boxShadow: "0px 4px 10px 0px rgba(230, 3, 24, 0.1)" }}
            >
              <div className="w-[20px] h-[20px] flex-shrink-0 mt-0.5 ml-1">
                <img
                  src={clockIcon}
                  alt="Fast"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-[#1E2A38] text-sm font-bold leading-none mb-1.5 translate-y-0.5">
                  Fast & Reliable
                </h4>
                <p className="text-[#1E2A38] text-xs font-normal leading-[16px] max-w-none">
                  Quick processing and dependable support to deliver smooth,
                  hassle-free loan services every time
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="w-full h-21 bg-white rounded-[6px] p-3.5 px-2.5 flex items-start gap-2"
              style={{ boxShadow: "0px 4px 10px 0px rgba(230, 3, 24, 0.1)" }}
            >
              <div className="w-[20px] h-[20px] flex-shrink-0 mt-0.5 ml-1">
                <img
                  src={shieldIcon}
                  alt="Secure"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-[#1E2A38] text-sm font-bold leading-none mb-1.5 translate-y-0.5">
                  100% Secure
                </h4>
                <p className="text-[#1E2A38] text-xs font-normal leading-[16px] max-w-none">
                  Your financial information is protected with advanced security
                  measures to ensure complete safety and confidentiality
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
