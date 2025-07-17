export type VideoData = {
  id: string;
  title: string;
  description: string;
  publishedAt?: string;
  thumbnails?: Thumbnails;
};

export type Thumbnails = {
  default: { url: string };
  medium: { url: string };
  high: { url: string };
};
