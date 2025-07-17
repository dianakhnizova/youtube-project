import { createBrowserRouter } from 'react-router-dom';
import { PagePath } from './enum';
import { Root } from './root/Root';
import { HomePage } from '@/pages/home-page/HomePage';
import { PlayListVideoPage } from '@/pages/playlist-video-page/PlayListVideoPage';
import { AboutPage } from '@/pages/about-page/AboutPage';
import { PlayListsPage } from '@/pages/playlists-page/PlayListsPage';

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFound, Component: Root },
      { path: PagePath.playlistVideosPage, Component: PlayListVideoPage },
      { path: PagePath.aboutPage, Component: AboutPage },
      { path: PagePath.playlistsPage, Component: PlayListsPage },
    ],
  },
  {
    path: PagePath.notFound,
    Component: Root,
  },
]);
