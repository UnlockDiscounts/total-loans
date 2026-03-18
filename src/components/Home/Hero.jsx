import heroImage from "../../assets/images/hero-image.png";

function Hero() {
  return (
    <section className="relative w-full h-[861px] overflow-hidden bg-white">
      {/* Layer 1 */}
      <div
        className="absolute w-[1050px] h-[861px] top-[-80px] left-0 rounded-tr-[190px] rounded-br-[1500px] blur-[2px] z-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, #E60318 14.9%, #1E2A38 100%)",
        }}
      />

      {/* Layer 2 */}
      <div className="absolute top-[10px] left-[490px] w-[1170px] h-[780px] rounded-bl-[500px] overflow-hidden z-10">
        <img
          src={heroImage}
          alt="Loan Professional"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Layer 3: Content Overlay */}
      <div className="relative z-30 pointer-events-none px-6 lg:px-12">
        <div className="flex flex-col gap-[24px] max-w-[703px] mt-[110px] ml-[69px] pointer-events-auto">
          <h1 className="text-[#EDF6F5] text-4xl lg:text-[65px] font-extrabold leading-tight lg:leading-[1.4] tracking-normal">
            Looking for the Right Loan Solution?
          </h1>
          <p className="text-[#EDF6F5] text-[32px] font-medium leading-[1.4] tracking-normal">
            We Connect you with trusted banks to find the right loan easily.
          </p>
          <button className="lg:w-[194px] lg:h-[60px] lg:pt-[16px] lg:pr-[41px] lg:pb-[17px] lg:pl-[43px] px-8 py-3 bg-[#E60318] text-white rounded-[8px] font-semibold text-lg lg:text-[20px] leading-none shadow-[0px_4px_20px_0px_#0000001A] border-2 border-transparent hover:bg-transparent hover:border-white transition-all duration-300 ease-out flex items-center justify-center pointer-events-auto whitespace-nowrap mt-4">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
