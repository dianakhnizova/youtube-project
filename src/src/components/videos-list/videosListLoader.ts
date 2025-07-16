import { fetchVideos } from '@/api/fetchVideos';
import { VideoData } from '@/src/sources/types';

interface LoadVideoslistParams {
  pageToken?: string;
  setVideos: React.Dispatch<React.SetStateAction<VideoData[]>>;
  setNextPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPrevPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const loadVideosList = async ({
  pageToken,
  setVideos,
  setNextPageToken,
  setPrevPageToken,
}: LoadVideoslistParams): Promise<void> => {
  try {
    const { videos, nextPageToken, prevPageToken } =
      await fetchVideos(pageToken);
    setVideos(videos);
    setNextPageToken(nextPageToken);
    setPrevPageToken(prevPageToken);
  } catch (error) {
    console.error('error', error);
  }
};
