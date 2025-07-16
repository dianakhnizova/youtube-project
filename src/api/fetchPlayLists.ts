import { youTubeService } from './services/youTubeService';
import type { PlayListData } from '../src/sources/types';
import { preparePlayList } from '@/src/utils/preparePlayList';

export const fetchPlayLists = async (
  pageToken?: string
): Promise<{
  playLists: PlayListData[];
  nextPageToken?: string;
  prevPageToken?: string;
}> => {
  try {
    const data = await youTubeService.getPlayList(pageToken);
    const playLists = preparePlayList(data.items || []);
    return {
      playLists,
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
    };
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};
