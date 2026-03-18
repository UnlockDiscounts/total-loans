import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    `text-[32px] font-medium leading-none cursor-pointer transition-all duration-300 ease-out ${
      isActive ? "text-[#E60318]" : "text-[#1E2A38]"
    }`;

  return (
    <nav className="w-full h-20 bg-white rounded-b-[8px] shadow-[0px_4px_20px_0px_rgba(230,3,24,0.15)] flex items-center px-8 md:px-12 sticky top-0 z-50">
      {/* Logo Section - Left Aligned */}
      <div className="flex-1 flex items-center h-full">
        <NavLink to="/">
          <h1 className="text-[32px] font-extrabold leading-none tracking-normal">
            <span className="text-[#000000]">Total</span>
            <span className="text-[#E60318]">Loans</span>
          </h1>
        </NavLink>
      </div>

      {/* Navigation Links - Center Aligned */}
      <ul className="flex items-center gap-[100px] h-full">
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

      {/* Right Spacer - Empty div to keep links centered */}
      <div className="flex-1" />
    </nav>
  );
}

export default Navbar;
