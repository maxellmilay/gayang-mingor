import { fbPostRequestEndpoint } from "@/constants/FbApiEndpoints";
import {
  FbPostDataInterface,
  FbPostImageDataInterface,
  FbPostInterface,
} from "@/interface/FbPostInterface";
import { NextResponse } from "next/server";

export async function GET() {
  const fbPostRequest = await fetch(fbPostRequestEndpoint);

  const fbPostData: FbPostDataInterface = await fbPostRequest.json();

  const postID = fbPostData.data[0].id;

  const imageRequest = await fetch(
    `https://graph.facebook.com/${postID}?fields=full_picture&access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
  );

  const imageData: FbPostImageDataInterface = await imageRequest.json();

  const post: FbPostInterface = {
    message: fbPostData.data[0].message,
    imageUrl: imageData.full_picture,
    id: postID,
  };

  return NextResponse.json(post);
}
