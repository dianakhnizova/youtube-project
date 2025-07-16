import { createBrowserRouter } from 'react-router-dom';
import { PagePath } from './enum';
import { Root } from './root/Root';
import { HomePage } from '../pages/home-page/HomePage';

export const router = createBrowserRouter([
  {
    path: PagePath.root,
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: PagePath.notFound, Component: Root },
    ],
  },
  {
    path: PagePath.notFound,
    Component: Root,
  },
]);
