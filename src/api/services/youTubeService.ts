import { CHANNEL_ID, YOUTUBE_API_KEY } from '@/sources/constants';
import { youtubeApi } from '../axios';
import type {
  PlayListResponse,
  VideoResponse,
  PlaylistVideoResponse,
} from '@/sources/interfaces';

export const youTubeService = {
  getVideoList: async (pageToken?: string): Promise<VideoResponse> => {
    try {
      const response = await youtubeApi.get('/search', {
        params: {
          part: 'snippet',
          channelId: CHANNEL_ID,
          type: 'video',
          maxResults: 3,
          order: 'date',
          key: YOUTUBE_API_KEY,
          pageToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getPlayList: async (pageToken?: string): Promise<PlayListResponse> => {
    try {
      const response = await youtubeApi.get('/playlists', {
        params: {
          part: 'snippet',
          channelId: CHANNEL_ID,
          maxResults: 3,
          key: YOUTUBE_API_KEY,
          pageToken,
        },
      });
      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  getPlayListVideos: async (
    playListID?: string,
    pageToken?: string
  ): Promise<PlaylistVideoResponse> => {
    try {
      const response = await youtubeApi.get('/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: playListID,
          maxResults: 3,
          key: YOUTUBE_API_KEY,
          pageToken: pageToken || undefined,
        },
      });

      return response.data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};
