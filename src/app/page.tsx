import FbPost from "@/components/FbPost";
import React from "react";

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
        <button className="text-mingor-blue bg-white rounded-[3.125rem] text-xl font-bold px-5 py-1 w-fit mb-16">
          About Us
        </button>
      </div>
      <div className="flex flex-col font-gotham text-mingor-blue bg-white p-10">
        <h2 className="text-3xl font-medium">SOCIAL MEDIA BULLETIN</h2>
        <p className="text-xl font-thin mb-5">
          Our latest posts, all in one place
        </p>
        <div className="flex wrap justify-center md:justify-start">
          <FbPost />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
