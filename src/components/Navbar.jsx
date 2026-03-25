
import React from "react";
import { NavLink } from "react-router-dom";



function getLinkClass({ isActive }) {
  return `block px-1 py-1 text-base md:text-lg lg:text-[32px] font-medium leading-none cursor-pointer transition-all duration-300 ease-out ${
    isActive ? "text-[#E60318]" : "text-[#1E2A38]"
  }`;
}

function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="w-full sticky top-0 z-50 bg-transparent md:bg-white">
      <div className="mx-auto mt-2 md:mt-0 flex h-[39px] md:h-20 items-center justify-between px-4 md:px-8 lg:px-12 max-w-[412px] md:max-w-none bg-white shadow-[0px_4px_20px_rgba(230,3,24,0.1)] md:shadow-[0px_4px_20px_0px_rgba(230,3,24,0.15)] rounded-[5px] md:rounded-b-[8px]">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <h1 className="text-lg md:text-[28px] lg:text-[32px] font-extrabold leading-none tracking-normal mr-4">
              <span className="text-[#000000]">Total</span>
=======
    <nav className="w-full sticky top-0 z-50 bg-white shadow-[0px_4px_20px_0px_rgba(230,3,24,0.1)] lg:shadow-[0px_4px_20px_0px_rgba(230,3,24,0.15)]">
      <div className="max-w-[1700px] mx-auto w-full h-[clamp(39px,6vw,80px)] px-4 lg:px-20 flex items-center overflow-visible">
        {/* Logo Section */}
        <div className="flex-[1.5] lg:flex-1 flex justify-start items-center h-full">
          <NavLink to="/">
            <h1 className="text-[clamp(14.5px,3.8vw,32px)] font-extrabold leading-none tracking-normal">
              <span className="text-[#1E2A38] lg:text-black">Total</span>
>>>>>>> f222617d113200475b1e5d4285b50429cb61cc1e
              <span className="text-[#E60318]">Loans</span>
            </h1>
          </NavLink>
        </div>

<<<<<<< HEAD
        {/* Navigation - always horizontal */}
        <ul className="flex items-center gap-8 lg:gap-[100px] h-full">
          <li>
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={getLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
=======
        {/* Navigation Links */}
        <div className="flex-none flex justify-center items-center h-full">
          <ul className="flex items-center gap-[clamp(28px,4vw,100px)] h-full">
            {["Home", "Services", "Contact"].map((label) => (
              <li key={label}>
                <NavLink
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className={({ isActive }) => `
                    text-[clamp(12px,1.4vw,22px)] font-extrabold leading-none tracking-tight transition-colors duration-300
                    ${isActive ? "text-[#E60318]" : "text-[#1E2A38] lg:text-[#263238] hover:text-[#E60318]"}
                  `}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Spacer */}
        <div className="flex-1 h-full" />
>>>>>>> f222617d113200475b1e5d4285b50429cb61cc1e
      </div>
    </nav>
  );
}

export default Navbar;
