
import React from "react";
import { NavLink } from "react-router-dom";



function getLinkClass({ isActive }) {
  return `block px-1 py-1 text-base md:text-lg lg:text-[32px] font-medium leading-none cursor-pointer transition-all duration-300 ease-out ${
    isActive ? "text-[#E60318]" : "text-[#1E2A38]"
  }`;
}

function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-transparent md:bg-white">
      <div className="mx-auto mt-2 md:mt-0 flex h-[39px] md:h-20 items-center justify-between px-4 md:px-8 lg:px-12 max-w-[412px] md:max-w-none bg-white shadow-[0px_4px_20px_rgba(230,3,24,0.1)] md:shadow-[0px_4px_20px_0px_rgba(230,3,24,0.15)] rounded-[5px] md:rounded-b-[8px]">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <h1 className="text-lg md:text-[28px] lg:text-[32px] font-extrabold leading-none tracking-normal mr-4">
              <span className="text-[#000000]">Total</span>
              <span className="text-[#E60318]">Loans</span>
            </h1>
          </NavLink>
        </div>

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
      </div>
    </nav>
  );
}

export default Navbar;
