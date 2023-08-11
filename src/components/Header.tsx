"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdownClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex px-7 py-4 bg-mingor-blue justify-between backdrop-blur-[10px] header-box-shadow">
      <button className="flex items-center">
        <Image
          src="/images/gayang-mingor-logo.png"
          width={35}
          height={35}
          alt="Logo"
          className="hidden md:block"
        />
        <p className="font-gotham font-bold md:mx-5 text-white text-left">
          GAYANG MINGOR
        </p>
      </button>
      <div className="md:flex items-center text-white font-gotham font-light hidden ">
        <button className="mr-6">About Us</button>
        <button className="mr-6">Member Directory</button>
        <button className="mr-6">Timeline</button>
        <button className="font-bold bg-mingor-yellow px-4 py-1 rounded-[70px] h-fit">
          Contact Us
        </button>
      </div>
      <div className="flex items-center md:hidden">
        <button className="h-fit" onClick={handleDropdownClick}>
          <Image
            src="/images/menu-icon.png"
            width={30}
            height={30}
            alt="Menu"
            className="h-fit"
          />
        </button>
      </div>
      {isDropdownOpen && <Dropdown closeDropdownClick={closeDropdownClick} />}
    </div>
  );
};

export default Header;