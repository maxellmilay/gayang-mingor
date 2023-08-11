import {
  FbPostDataInterface,
  FbPostImageDataInterface,
  FbPostInterface,
} from "@/interface/FbPostInterface";
import { NextResponse } from "next/server";

export async function GET() {
  const fbPostRequest = await fetch(
    `https://graph.facebook.com/gayangmingor/feed?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
  );

  const fbPostData: FbPostDataInterface = await fbPostRequest.json();

  const imageRequest = await fetch(
    `https://graph.facebook.com/${fbPostData.data[0].id}?fields=full_picture&access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
  );

  const imageData: FbPostImageDataInterface = await imageRequest.json();

  const post: FbPostInterface = {
    message: fbPostData.data[0].message,
    imageUrl: imageData.full_picture,
  };

  return NextResponse.json(post);
}
