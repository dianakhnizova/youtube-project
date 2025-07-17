import type { VideoData } from '@/sources/types';
import type { YouTubePlaylistVideo } from '@/sources/interfaces';

export const preparePlayListVideosList = (
  videosList: YouTubePlaylistVideo[]
): VideoData[] => {
  return videosList.map(video => ({
    id: video.snippet.resourceId.videoId,
    title: video.snippet.title,
    description: video.snippet.description,
  }));
};
