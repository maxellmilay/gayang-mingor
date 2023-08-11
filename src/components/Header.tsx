import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex px-7 py-4 bg-mingor-blue justify-between backdrop-blur-[10px] header-box-shadow">
      <button className="flex items-center">
        <Image
          src="/images/gayang-mingor-logo.png"
          width={35}
          height={35}
          alt="Logo"
        />
        <p className="font-gotham font-bold mx-5 text-white">GAYANG MINGOR</p>
      </button>
      <div className="flex items-center text-white font-gotham font-light">
        <button className="mr-6">About Us</button>
        <button className="mr-6">Member Directory</button>
        <button className="mr-6">Timeline</button>
        <button className="font-bold bg-mingor-yellow px-4 py-1 rounded-[70px] h-fit">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
