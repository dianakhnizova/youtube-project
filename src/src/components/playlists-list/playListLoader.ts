import { fetchPlayLists } from '@/api/fetchPlayLists';
import { PlayListData } from '@/src/sources/types';

interface LoadPlaylistsParams {
  pageToken?: string;
  setPlayLists: React.Dispatch<React.SetStateAction<PlayListData[]>>;
  setNextPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPrevPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const loadPlayLists = async ({
  pageToken,
  setPlayLists,
  setNextPageToken,
  setPrevPageToken,
}: LoadPlaylistsParams): Promise<void> => {
  try {
    const { playLists, nextPageToken, prevPageToken } =
      await fetchPlayLists(pageToken);
    setPlayLists(playLists);
    setNextPageToken(nextPageToken);
    setPrevPageToken(prevPageToken);
  } catch (error) {
    console.error('error', error);
  }
};
