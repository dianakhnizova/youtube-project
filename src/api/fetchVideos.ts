import { youTubeService } from './services/youTubeService';
import { prepareVideoList } from '../src/utils/prepareVideoList';
import type { VideoData } from '../src/sources/types';

export const fetchVideos = async (
  pageToken?: string
): Promise<{
  videos: VideoData[];
  nextPageToken?: string;
  prevPageToken?: string;
}> => {
  try {
    const data = await youTubeService.getVideoList(pageToken);
    const videos = prepareVideoList(data.items || []);

    return {
      videos,
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
    };
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};
