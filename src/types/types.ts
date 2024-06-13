export interface IPhoto {
  id: number;
  alt: string;
  src: IPhotoUrl;
}

export interface IPhotoUrl {
  original: string;
  tiny: string
}

export interface IResp {
  photos: IPhoto[];
  total_results: number;
}