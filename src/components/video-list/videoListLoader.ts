import { VideoData } from '@/sources/types';

interface LoadVideolistParams {
  playListID?: string;
  pageToken?: string;
  setVideos: React.Dispatch<React.SetStateAction<VideoData[]>>;
  setNextPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  setPrevPageToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  fetchFunction: (
    playListID?: string,
    pageToken?: string
  ) => Promise<{
    videos: VideoData[];
    nextPageToken?: string;
    prevPageToken?: string;
  }>;
}

export const loadVideoList = async ({
  playListID,
  pageToken,
  setVideos,
  setNextPageToken,
  setPrevPageToken,
  fetchFunction,
}: LoadVideolistParams): Promise<void> => {
  try {
    const { videos, nextPageToken, prevPageToken } = await fetchFunction(
      playListID,
      pageToken
    );
    setVideos(videos);
    setNextPageToken(nextPageToken);
    setPrevPageToken(prevPageToken);
  } catch (error) {
    console.error('error', error);
  }
};
