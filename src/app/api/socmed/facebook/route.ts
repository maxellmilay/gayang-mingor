import { NextResponse } from "next/server";
import {
  FbPageDataInterface,
  FbPageImageDataInterface,
  FbPageInterface,
} from "@/interface/FbPageInterface";
import {
  fbPageImageRequestEndpoint,
  fbPageRequestEndpoint,
} from "@/constants/FbApiEndpoints";

export async function GET() {
  const pageRequest = await fetch(fbPageRequestEndpoint);

  const pageData: FbPageDataInterface = await pageRequest.json();

  const imageUrlRequest = await fetch(fbPageImageRequestEndpoint);

  const imageData: FbPageImageDataInterface = await imageUrlRequest.json();

  const page: FbPageInterface = {
    name: pageData.name,
    imageUrl: imageData.data.url,
  };

  return NextResponse.json(page);
}
