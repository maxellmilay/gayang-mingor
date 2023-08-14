import FbPost from "@/components/FbPost";
import React, { Suspense } from "react";
import Link from "next/link";
import externalLinks from "@/enums/externalLinks";
import Socials from "@/components/Socials";
import FbPostLoading from "../components/Loading/FbPost";
import { fbPostRequestEndpoint } from "@/constants/fbApiEndpoints";
import { FbPostDataInterface } from "@/interface/FbPostInterface";
import { FbPostImageDataInterface } from "@/interface/FbPostInterface";

const fetchLatestPost = async () => {
  const fbPostRequest = await fetch(fbPostRequestEndpoint);

  const fbPostData: FbPostDataInterface = await fbPostRequest.json();

  const postID = fbPostData.data[0].id;

  const imageRequest = await fetch(
    `https://graph.facebook.com/${postID}?fields=full_picture&access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
  );

  const imageData: FbPostImageDataInterface = await imageRequest.json();

  return {
    message: fbPostData.data[0].message,
    imageUrl: imageData.full_picture,
    id: postID,
  };
};

const HomePage = () => {
  return (
    <>
      <section className="flex flex-col justify-end bg-cover bg-center bg-mobile-landing md:bg-landing w-full h-screen font-gotham px-7 md:px-10">
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
      </section>
      <section className="flex flex-col md:flex-row font-gotham text-mingor-blue-200 bg-white p-7 md:p-10">
        <div className="flex flex-col md:mr-14 mb-5 md:mb-0 items-center md:items-start">
          <p className="font-bold text-2xl md:text-5xl mb-5">Latest Post</p>
          <Suspense fallback={<FbPostLoading />}>
            <FbPost />
          </Suspense>
        </div>
        <div className="flex flex-col items-center md:items-start flex-1">
          <p className="font-bold text-2xl md:text-5xl mb-3 md:mb-0 text-black">
            Follow Us!
          </p>
          <div className="flex w-44 md:w-full text-mingor-blue-200 text-4xl md:text-[5rem] lg:text-[6rem] items-center justify-evenly mb-5 md:mb-0 md:grow md:px-5">
            <Socials />
          </div>
          <div className="flex flex-col items-center justify-evenly font-bold bg-mingor-gray-100 rounded-[30px] md:h-1/2 px-10 py-5 md:px-10 md:py-0 w-72 md:w-full">
            <p className="text-mingor-blue-200 mb-5 md:mb-0 text-lg md:text-[2.7rem] lg:text-6xl text-center">
              Send us a message!
            </p>
            <a
              href={externalLinks.PALANCA}
              rel="noreferrer"
              target="_blank"
              className="text-white bg-mingor-blue-200 px-10 py-2 text-sm md:text-xl lg:text-2xl w-fit rounded-[50px]"
            >
              Palanca Site
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
