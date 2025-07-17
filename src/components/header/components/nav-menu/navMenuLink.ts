import { PagePath } from '@/router/enum';
import { LinkLabel } from './types';
import { messages } from './messages';

export const navMenuLink: LinkLabel[] = [
  {
    to: PagePath.aboutPage,
    label: messages.aboutLabel,
  },
  {
    to: PagePath.playlistsPage,
    label: messages.playListLabel,
  },
];
