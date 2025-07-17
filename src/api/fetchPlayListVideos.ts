import { youTubeService } from './services/youTubeService';
import type { VideoData } from '../sources/types';
import { preparePlayListVideosList } from '@/utils/preparePlayListVideosList';

export const fetchPlayListVideo = async (
  playListID?: string,
  pageToken?: string
): Promise<{
  videos: VideoData[];
  nextPageToken?: string;
  prevPageToken?: string;
}> => {
  try {
    const data = await youTubeService.getPlayListVideos(playListID, pageToken);
    const videos = preparePlayListVideosList(data.items || []);

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
