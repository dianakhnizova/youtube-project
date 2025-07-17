import type { VideoData } from '@/sources/types';
import type { YouTubeVideo } from '@/sources/interfaces';

export const prepareVideoList = (videosList: YouTubeVideo[]): VideoData[] => {
  return videosList.map(video => ({
    id: video.id.videoId || '',
    title: video.snippet.title,
    description: video.snippet.description,
  }));
};
