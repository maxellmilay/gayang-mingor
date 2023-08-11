import { FbDataInterface } from "@/interface/FbDataInterface";
import { FbPageInterface } from "@/interface/FbPageInterface";
import { FbPostInterface } from "@/interface/FbPostInterface";
import React from "react";
import Image from "next/image";

const fetchFbData = async () => {
  const pageRequest = await fetch("http://localhost:3000/api/socmed/facebook");
  const pageData: FbPageInterface = await pageRequest.json();

  const latestPostRequest = await fetch(
    "http://localhost:3000/api/socmed/facebook/latest-post",
  );
  const latestPostData: FbPostInterface = await latestPostRequest.json();

  return {
    pageName: pageData.name,
    pageImageUrl: pageData.imageUrl,
    postMessage: latestPostData.message,
    postImageUrl: latestPostData.imageUrl,
  };
};

const HomePage = async () => {
  const { pageName, pageImageUrl, postMessage, postImageUrl }: FbDataInterface =
    await fetchFbData();

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
      <div className="flex flex-col font-gotham text-mingor-blue bg-white p-10">
        <h2 className="text-3xl font-medium">SOCIAL MEDIA BULLETIN</h2>
        <p className="text-xl font-thin mb-5">
          Our latest posts, all in one place
        </p>
        <div className="flex">
          <div className="flex flex-col bg-facebook rounded-lg pt-4 text-white w-80">
            <div className="flex items-center px-4 mb-3">
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src={`${pageImageUrl}`}
                  alt="Page Picture"
                  fill
                  className="object-cover rounded-[50%]"
                />
              </div>
              <p className=" px-3">{pageName}</p>
            </div>
            <p className="text-xs px-4 mb-3">{postMessage}</p>
            <div className="relative w-full h-80">
              <Image
                src={`${postImageUrl}`}
                alt="Post Picture"
                fill
                className="object-cover rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
