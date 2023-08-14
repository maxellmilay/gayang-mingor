import React from "react";
import Image from "next/image";
import { FbDataInterface } from "@/interface/FbDataInterface";
import {
  FbPageDataInterface,
  FbPageImageDataInterface,
} from "@/interface/FbPageInterface";
import {
  FbPostDataInterface,
  FbPostImageDataInterface,
} from "@/interface/FbPostInterface";
import {
  fbPostRequestEndpoint,
  fbPageRequestEndpoint,
  fbPageImageRequestEndpoint,
} from "@/constants/fbApiEndpoints";
import { revalidationInterval } from "@/constants/revalidation";

const fetchPageData = async () => {
  const pageRequest = await fetch(fbPageRequestEndpoint, {
    next: { revalidate: revalidationInterval },
  });
  const pageData: FbPageDataInterface = await pageRequest.json();

  const imageUrlRequest = await fetch(fbPageImageRequestEndpoint, {
    next: { revalidate: revalidationInterval },
  });
  const imageData: FbPageImageDataInterface = await imageUrlRequest.json();

  return {
    name: pageData.name,
    imageUrl: imageData.data.url,
  };
};

const fetchLatestPost = async () => {
  const fbPostRequest = await fetch(fbPostRequestEndpoint, {
    next: { revalidate: revalidationInterval },
  });
  const fbPostData: FbPostDataInterface = await fbPostRequest.json();
  const postID = fbPostData.data[0].id;

  const imageRequest = await fetch(
    `https://graph.facebook.com/${postID}?fields=full_picture&access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
    {
      next: { revalidate: revalidationInterval },
    },
  );
  const imageData: FbPostImageDataInterface = await imageRequest.json();

  return {
    message: fbPostData.data[0].message,
    imageUrl: imageData.full_picture,
    id: postID,
  };
};

const fetchFbData = async () => {
  const pageData = await fetchPageData();
  const latestPostData = await fetchLatestPost();

  return {
    pageName: pageData.name,
    pageImageUrl: pageData.imageUrl,
    postMessage: latestPostData.message,
    postImageUrl: latestPostData.imageUrl,
    postID: latestPostData.id,
  };
};

const FbPost = async () => {
  const {
    pageName,
    pageImageUrl,
    postMessage,
    postImageUrl,
    postID,
  }: FbDataInterface = await fetchFbData();

  const fbPostLink = `https://facebook.com/${postID}`;

  return (
    <a
      href={fbPostLink}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col bg-mingor-gray-200 rounded-lg pt-4 text-white w-72 md:w-[350px]"
    >
      <div className="flex items-center px-4 mb-3">
        <div className="relative w-[35px] h-[35px] md:w-[45px] md:h-[45px]">
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
      <div className="relative w-full h-72 md:h-[350px]">
        <Image
          src={postImageUrl}
          alt="Post Picture"
          fill
          className="object-cover rounded-b-lg"
        />
      </div>
    </a>
  );
};

export default FbPost;
