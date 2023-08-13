import FbPost from "@/components/FbPost";
import React from "react";
import Link from "next/link";
import externalLinks from "@/enums/externalLinks";
import Socials from "@/components/Socials";

const HomePage = () => {
  return (
    <>
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
      <div className="flex flex-col md:flex-row font-gotham text-mingor-blue-200 bg-white p-7 md:p-10">
        <div className="flex flex-col md:mr-20 mb-5 md:mb-0 items-center md:items-start">
          <p className="font-bold text-2xl md:text-5xl mb-5">Latest Post</p>
          <FbPost />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-2xl md:text-5xl mb-3 md:mb-0 text-black">
            Follow Us!
          </p>
          <div className="flex w-44 md:w-full text-mingor-blue-200 text-4xl md:text-[6rem] items-center justify-evenly mb-5 md:mb-0 md:grow md:px-5">
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-evenly font-bold bg-mingor-gray-100 rounded-[30px] md:h-1/2 px-10 py-5 md:px-10 md:py-0">
            <p className="text-mingor-blue-200 mb-5 md:mb-0 text-lg md:text-6xl text-center">
              Send us a message!
            </p>
            <a
              href={externalLinks.PALANCA}
              rel="noreferrer"
              target="_blank"
              className="text-white bg-mingor-blue-200 px-10 py-2 text-sm md:text-2xl w-fit rounded-[50px]"
            >
              Palance Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
