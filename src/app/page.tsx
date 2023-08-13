import FbPost from "@/components/FbPost";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import externalLinks from "@/enums/externalLinks";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-end bg-cover bg-center bg-mobile-landing md:bg-landing w-full h-screen font-gotham px-7 md:px-10">
        <p className="text-2xl md:text-[5rem] md:leading-[6rem] text-white mb-4 md:mb-0">
          Lilipad at Lalaban
        </p>
        <p className="text-4xl md:text-[5rem] md:leading-[6rem] font-bitcheese text-mingor-yellow mb-10">
          Gagawa ng Kasaysayan
        </p>
        <Link
          href="/about"
          className="text-mingor-blue-100 bg-white rounded-[3.125rem] text-xl font-bold px-5 py-1 w-fit mb-16"
        >
          About Us
        </Link>
      </div>
      <div className="flex font-gotham text-mingor-blue-200 bg-white p-10">
        <div className="flex flex-col mr-20">
          <p className="font-bold text-5xl mb-5">Latest Post</p>
          <FbPost />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-5xl text-black">Follow Us!</p>
          <div className="flex text-mingor-blue-200 text-[6rem] items-center justify-around grow px-5">
            <a rel="noreferrer" href={externalLinks.FB} target="_blank">
              <FaFacebook />
            </a>
            <a rel="noreferrer" href={externalLinks.TWITTER} target="_blank">
              <FaTwitter />
            </a>
            <a rel="noreferrer" href={externalLinks.INSTAGRAM} target="_blank">
              <FaInstagram />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center font-bold bg-mingor-gray rounded-[30px] h-1/2 px-10">
            <p className="text-mingor-blue-200 text-6xl mb-10">
              Send us a message!
            </p>
            <a
              href={externalLinks.PALANCA}
              rel="noreferrer"
              target="_blank"
              className="text-white bg-mingor-blue-200 px-10 py-2 text-2xl w-fit rounded-[50px]"
            >
              Palance Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
