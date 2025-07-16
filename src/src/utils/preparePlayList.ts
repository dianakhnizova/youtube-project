import type { PlayListData } from '../sources/types';
import type { YouTubePlayList } from '../sources/interfaces';

export const preparePlayList = (
  playListsList: YouTubePlayList[]
): PlayListData[] => {
  return playListsList.map(playList => ({
    id: playList.id || '',
    title: playList.snippet.title,
    description: playList.snippet.description,
    publishedAt: playList.snippet.publishedAt,
    thumbnails: playList.snippet.thumbnails,
  }));
};
