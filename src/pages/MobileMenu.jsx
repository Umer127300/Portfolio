import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen, dark }) => {
  if (!menuOpen) return null;

  return (
    <div
      className={`fixed top-24 left-3 right-3 lg:hidden rounded-2xl shadow-xl p-4 z-50 transition-all duration-300 ease-in-out   ${
        dark ? "bg-white text-black" : "bg-[#1E293B] text-white"
      }`}
    >
      <div className="flex flex-col gap-2">

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="group px-4 py-3 rounded-xl hover:bg-[#21CDE8] hover:text-white transition-all duration-700 font-semibold"
        >
          <i className="fa-regular fa-house mr-3 transition-all-transform duration-700 group-hover:text-lg"></i>
          Home
        </a> 

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="group px-4 py-3 rounded-xl hover:bg-[#21CDE8] hover:text-white transition-all duration-700 font-semibold"
        >
          <i className="fa-regular fa-user mr-3 transition-all-transform duration-700 group-hover:text-lg"></i>
          About
        </a>

        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="group px-4 py-3 rounded-xl hover:bg-[#21CDE8] hover:text-white transition-all duration-700 font-semibold"
        >
          <i className="fa-solid fa-microchip mr-3 transition-all-transform duration-700 group-hover:text-lg"></i>
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="group px-4 py-3 rounded-xl hover:bg-[#21CDE8] hover:text-white  font-semibold transition-all duration-700"
        >
          <i className="fa-solid fa-code mr-3 transition-all-transform duration-700 group-hover:text-lg"></i>
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="group px-4 py-3 rounded-xl hover:bg-[#21CDE8] hover:text-white  font-semibold transition-all duration-700"
        >
          <i className="fa-regular fa-envelope mr-3 transition-all-transform duration-700 group-hover:text-lg"></i>
          Contact
        </a>

      </div>
    </div>
  );
};

export default MobileMenu;