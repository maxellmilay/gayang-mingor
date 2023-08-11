import { NextResponse } from "next/server";
import {
  FbPageDataInterface,
  FbPageImageDataInterface,
  FbPageInterface,
} from "@/interface/FbPageInterface";

export async function GET() {
  const pageRequest = await fetch(
    `https://graph.facebook.com/gayangmingor?access_token=${process.env.FB_PAGE_ACCESS_TOKEN}`,
  );

  const pageData: FbPageDataInterface = await pageRequest.json();

  const imageUrlRequest = await fetch(
    "https://graph.facebook.com/gayangmingor/picture?redirect=0",
  );

  const imageData: FbPageImageDataInterface = await imageUrlRequest.json();

  const page: FbPageInterface = {
    name: pageData.name,
    imageUrl: imageData.data.url,
  };

  return NextResponse.json(page);
}
