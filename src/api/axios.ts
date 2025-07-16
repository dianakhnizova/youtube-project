import axios from 'axios';
import { YOUTUBE_API_URL } from '../src/sources/constants';

export const youtubeApi = axios.create({
  baseURL: YOUTUBE_API_URL,
});
