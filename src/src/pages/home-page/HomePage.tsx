import styles from './HomePage.module.css';
import { VideosList } from '../../components/videos-list/VideosList';
import { PlayListsList } from '@/src/components/playlists-list/PlayListsList';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <VideosList />
      <PlayListsList />
    </div>
  );
};
