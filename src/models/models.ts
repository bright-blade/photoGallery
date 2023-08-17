export interface Photo {
  alt: string;
  id: number;
  photographer: string;
  avgColor: string;
  src: ImageSource;
}

type ImageSource = {
  original: string;
  large2x?: string;
  large?: string;
  medium?: string;
  small?: string;
  portrait?: string;
  landscape?: string;
  tiny?: string;
};

export type PhotoDataResponse = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ImageSource;
  liked: boolean;
  alt: string;
};
