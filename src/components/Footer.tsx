import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col py-7 md:py-16 items-center bg-footer font-gotham font-light text-white text-center bg-center ">
      <p className="text-sm mx-5 md:text-xl mb-3">
        Lilipad at Lalaban, Gagawa ng Kasaysayan
      </p>
      <p className="text-xs mb-3">Gayang Mingor © 2023</p>
      <div className="flex md:text-3xl justify-evenly w-32 md:w-40">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
