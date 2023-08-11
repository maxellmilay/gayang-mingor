import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-end bg-landing w-full h-screen font-gotham px-10">
        <p className="text-[5rem] text-white">Lilipad at Lalaban</p>
        <p className="text-[5rem] font-bitcheese text-mingor-yellow mb-10">
          Gagawa ng Kasaysayan
        </p>
        <button className="text-mingor-blue bg-white rounded-[3.125rem] text-xl font-bold px-5 py-1 w-fit mb-16">
          About Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
