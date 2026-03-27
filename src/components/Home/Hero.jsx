import { Link } from "react-router-dom";

import heroImage from "../../assets/images/hero-image.png";
import mobileHero from "../../assets/images/mobile-hero.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white w-full">
      {/* DESKTOP HERO */}
      <div className="hidden lg:block w-full lg:min-h-[861px] relative">
        <div className="absolute inset-0 max-w-screen-2xl mx-auto pointer-events-none">
          {/* Background Layer 1 */}
          <div
            className="absolute left-0 top-[-80px] z-20 h-[861px] w-[1050px] rounded-tr-[190px] rounded-br-[1500px] blur-[2px]"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(270deg, #E60318 14.9%, #1E2A38 100%)",
            }}
          />

          {/* Layer 2: Hero Image */}
          <div className="absolute right-[-136px] top-[10px] z-10 h-[780px] w-[1170px] overflow-hidden rounded-bl-[500px]">
            <img
              src={heroImage}
              alt="Loan Professional"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Layer 3: Content Overlay */}
        <div className="relative z-30 w-full lg:max-w-[1302px] mx-auto px-6 pt-12 lg:px-8 lg:pt-28">
          <div className="flex max-w-[703px] flex-col gap-6">
            <h1 className="text-4xl font-extrabold tracking-normal text-[#EDF6F5] lg:text-[65px] lg:leading-[1.4]">
              Looking for the Right Loan Solution?
            </h1>
            <p className="max-w-[703px] text-xl font-medium leading-[1.4] tracking-normal text-[#EDF6F5] lg:text-[32px]">
              We Connect you with trusted banks to find the right loan easily.
            </p>
            <Link
              to="/contact"
              className="mt-4 flex h-15 w-[194px] items-center justify-center whitespace-nowrap rounded-lg border-2 border-transparent bg-[#E60318] text-lg font-semibold leading-none text-white shadow-[0px_4px_20px_0px_#0000001A] transition-all duration-300 ease-out hover:border-white hover:bg-transparent lg:text-xl no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE HERO */}
      <div className="block lg:hidden px-4 pt-6 pb-2">
        <div className="relative w-full h-[409px] rounded-lg overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src={mobileHero}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content Wrapper */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 pb-8">
            <h1 className="text-white text-2xl font-[800] leading-[1.2] mb-[10px] tracking-tight">
              Looking for the Right Loan Solutions?
            </h1>
            <p className="text-[#EDF6F5] text-sm font-[500] leading-tight mb-[18px]">
              We Connect you with trusted banks to find the right loan easily.
            </p>
            <Link
              to="/contact"
              className="bg-[#E60318] text-white text-[10px] font-[600] w-[83px] h-[24px] flex items-center justify-center rounded shadow-sm active:scale-95 transition-all duration-300 ease-out border-2 border-transparent hover:bg-white hover:text-[#E60318] no-underline"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
