export interface FbPageDataInterface {
  name: string;
  id: string;
}

export interface FbPageImageDataInterface {
  data: {
    height: number;
    is_silhouette: boolean;
    url: string;
    width: number;
  };
}

export interface FbPageInterface {
  name: string;
  imageUrl: string;
}
