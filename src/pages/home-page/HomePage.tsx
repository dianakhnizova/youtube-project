import styles from './HomePage.module.css';
import { VideoList } from '../../components/video-list/VideoList';
import { VideoCard } from '@/components/video-card/VideoCard';
import { fetchVideos } from '@/api/fetchVideos';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <VideoList
        renderVideo={video => (
          <VideoCard
            id={video.id}
            title={video.title}
            description={video.description}
            isShowVideo={true}
          />
        )}
        fetchFunction={fetchVideos}
      />
    </div>
  );
};
