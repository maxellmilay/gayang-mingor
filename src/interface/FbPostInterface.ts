export interface FbPostDataInterface {
  data: {
    created_time: string;
    message: string;
    id: string;
  }[];
}

export interface FbPostImageDataInterface {
  full_picture: string;
  id: string;
}

export interface FbPostInterface {
  message: string;
  imageUrl: string;
}
