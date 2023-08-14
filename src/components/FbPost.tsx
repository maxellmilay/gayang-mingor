import React from "react";
import Image from "next/image";
import { FbDataInterface } from "@/interface/FbDataInterface";
import { FbPageInterface } from "@/interface/FbPageInterface";
import { FbPostInterface } from "@/interface/FbPostInterface";
import {
  latestPostRequestEndpoint,
  pageRequestEndpoint,
} from "@/constants/LocalApiEndpoints";

const fetchFbData = async () => {
  const pageRequest = await fetch(pageRequestEndpoint);
  const pageData: FbPageInterface = await pageRequest.json();

  const latestPostRequest = await fetch(latestPostRequestEndpoint);
  const latestPostData: FbPostInterface = await latestPostRequest.json();

  return {
    pageName: pageData.name,
    pageImageUrl: pageData.imageUrl,
    postMessage: latestPostData.message,
    postImageUrl: latestPostData.imageUrl,
  };
};

const FbPost = async () => {
  const { pageName, pageImageUrl, postMessage, postImageUrl }: FbDataInterface =
    await fetchFbData();

  return (
    <div className="flex flex-col bg-mingor-gray-200 rounded-lg pt-4 text-white w-60 md:w-80">
      <div className="flex items-center px-4 mb-3">
        <div className="relative w-[25px] h-[25px] md:w-[30px] md:h-[30px]">
          <Image
            src={pageImageUrl}
            alt="Page Picture"
            fill
            className="object-cover rounded-[50%]"
          />
        </div>
        <p className="text-xs px-3">{pageName}</p>
      </div>
      <p className="text-[0.6rem] md:text-xs px-4 mb-3">{postMessage}</p>
      <div className="relative w-full h-60 md:h-80">
        <Image
          src={postImageUrl}
          alt="Post Picture"
          fill
          className="object-cover rounded-b-lg"
        />
      </div>
    </div>
  );
};

export default FbPost;
