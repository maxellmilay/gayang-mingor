import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col py-7 md:py-16 items-center bg-footer font-gotham font-light text-white text-center bg-center ">
      <p className="text-sm mx-5 md:text-xl mb-3">
        Lilipad at Lalaban, Gagawa ng Kasaysayan
      </p>
      <p className="text-xs mb-3">Gayang Mingor © 2023</p>
      <div className="flex md:text-3xl">
        <button className="mr-5 md:mr-10">
          <FaFacebook />
        </button>
        <button className="mr-5 md:mr-10">
          <FaTwitter />
        </button>
        <button>
          <FaInstagram />
        </button>
      </div>
    </div>
  );
};

export default Footer;