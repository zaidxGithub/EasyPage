import React from "react";
import AboutSectionNavbar from "./AboutSectionNavabr.jsx";
const Navbar = ({ isOpen }) => {
  return (
    <div
    className={`
        fixed top-14 sm:top-16 sm:right-1.5 right-0 h-screen  w-screen bg-black/90 bg-opacity-90 text-white z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "sm:translate-x-2 translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"}
      `}
      style={{ overflow: isOpen ? "auto" : "hidden" }}
    >
     
 <  AboutSectionNavbar/>


    </div>
  );


};

export default Navbar;