import { VideoData } from '@/sources/types';
import { youTubeService } from './services/youTubeService';
import { preparePlayList } from '@/utils/preparePlayList';

export const fetchPlayLists = async (
  _: string | undefined,
  pageToken?: string
): Promise<{
  videos: VideoData[];
  nextPageToken?: string;
  prevPageToken?: string;
}> => {
  try {
    const data = await youTubeService.getPlayList(pageToken);
    const videos = preparePlayList(data.items || []);
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
