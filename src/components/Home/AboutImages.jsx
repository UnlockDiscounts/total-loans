import React from "react";
import aboutImage1 from "../../assets/images/about-image1.png";
import aboutImage2 from "../../assets/images/about-image2.png";

function AboutImages({ isDesktop }) {

  /* DESKTOP DESIGN */
  if (isDesktop) {
  return (
  <div className="relative w-full max-w-[600px] h-[420px] mx-auto">

    {/* background curved layer */}
    <div className="absolute -top-6 -left-6 w-[110%] h-[110%] rounded-tr-[80px] rounded-br-[220px] bg-gradient-to-r from-[#1E2A38] to-[#E60318]/80 opacity-20 blur-[2px] z-0" />

    {/* image 1 */}
    <div className="relative z-10 w-[70%] h-[220px] rounded-tr-[35px] rounded-bl-[35px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] bg-gray-200">
      <img
        src={aboutImage1}
        alt="about1"
        className="w-full h-full object-cover"
      />
    </div>

    {/* image 2 overlapping */}
    <div className="absolute top-[60px] right-0 w-[50%] h-[320px] rounded-tl-[35px] rounded-br-[35px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.3)]  z-20">
      <img
        src={aboutImage2}
        alt="about2"
        className="w-full h-full object-cover"
        trasparent
        
      />
    </div>

    {/* quote card */}
    <div className="absolute bottom-0 left-[30px] w-[260px] bg-[#1E2A38] text-white rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-5 z-30 border border-white/10 backdrop-blur-md">
      <div className="text-[34px] leading-none text-[#E60318]">"</div>

      <p className="text-[14px] leading-relaxed mt-2 text-[#EDF6F5]/90">
        Quick approval, clear process, and outstanding support throughout.
      </p>
    </div>

  </div>
);

  }

  // MOBILE DESIGN
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 w-full max-w-[320px] h-[320px] mx-auto relative">
      {/* image 1 */}
      <div className="col-start-1 col-span-2 row-start-1 row-span-3 rounded-[15px] overflow-hidden shadow-xl bg-gray-200 z-10">
        <img
          src={aboutImage1}
          alt="about1"
          className="w-full h-full object-cover"
        />
      </div>
      {/* image 2 overlays, fills its grid area, transparent bg, above img1 but below quote */}
      <div className="col-start-2 col-span-2 row-start-2 row-span-3 overflow-hidden z-20 relative flex items-end justify-center bg-transparent rounded-[15px] overflow-hidden ">
        <img
          src={aboutImage2}
          alt="about2"
          className="w-full h-full object-cover rounded-[25px]"
        
        />
      </div>
      {/* empty spaces */}
      <div className="col-start-3 row-start-1 bg-gray-100 rounded"></div>
      <div className="col-start-3 row-start-2 bg-gray-100 rounded"></div>
      {/* quote */}
      <div className="col-start-1 col-span-2 row-start-4 bg-[#1E2A38] text-white rounded-[15px] shadow-2xl flex flex-col justify-center items-center text-center z-30 mt-4  pt-5 pb-5 mb-4">

        <p className="text-xs max-w-[200px]">
          Quick approval, clear process, and outstanding support throughout.
        </p>
      </div>
    </div>
  );
}

export default AboutImages;