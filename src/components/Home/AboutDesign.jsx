import React from "react";
import AboutImages from "./AboutImages";

function AboutDesign() {
  return (
    <>
      {/* Mobile & tablet */}
      <div className="block lg:hidden">
        <AboutImages isDesktop={false} />
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <AboutImages isDesktop={true} />
      </div>
    </>
  );
}

export default AboutDesign;