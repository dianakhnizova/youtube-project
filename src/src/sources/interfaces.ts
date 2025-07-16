export interface YouTubeVideo {
  id: {
    kind: string;
    videoId?: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

export interface YouTubePlayList {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string };
      medium: { url: string };
      high: { url: string };
    };
    channelId: string;
    channelTitle: string;
  };
}

export interface VideoResponse {
  nextPageToken?: string;
  prevPageToken?: string;
  items: YouTubeVideo[];
}

export interface PlayListResponse {
  nextPageToken?: string;
  prevPageToken?: string;
  items: YouTubePlayList[];
}
