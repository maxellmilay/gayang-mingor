import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
};

const ComingSoon = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-full mt-[3.6rem] md:mt-[4.75rem] text-mingor-blue-200 font-gotham px-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Coming Soon!</h1>
        <p className="text-xs md:text-xl">
          We&apos;re currently developing this part of the website. Stay tuned!
        </p>
      </section>
    </>
  );
};

export default ComingSoon;
