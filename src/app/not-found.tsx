import Footer from "@/components/Footer";
import Header from "@/components/Header";
import routes from "@/enums/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <body
      className={`flex flex-col min-h-screen scrollbar-thumb-mingor-blue-200 scrollbar-track-mingor-blue-100/70 scrollbar-thin`}
    >
      <Header />
      <main className="flex flex-col grow basis-0 items-center justify-center h-full mt-[3.6rem] md:mt-[4.75rem] text-black font-gotham px-10 text-center">
        <div className="flex flex-col items-center md:items-start md:flex-row py-10">
          <div className="relative w-[12rem] h-[12rem] mb-5 md:mb-0">
            <Image src="/images/error-mascot.png" fill alt="Error" />
          </div>
          <div className="flex flex-col items-center justify-center font-bold">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-6xl mb-3">Error 404</h1>
              <p className="font-thin text-xl w-fit md:ml-1 mb-3">
                Woops! Let&apos;s give it another shot
              </p>
            </div>
            <Link
              href={routes.HOME}
              className="text-mingor-blue-200 px-4 py-1 bg-mingor-yellow w-fit rounded-[70px]"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
};

export default NotFound;
