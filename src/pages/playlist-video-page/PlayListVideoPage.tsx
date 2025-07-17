import styles from './PlayListVideoPage.module.css';
import { VideoCard } from '../../components/video-card/VideoCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/button/Button';
import { PagePath } from '@/router/enum';
import { messages } from './messages';
import { VideoList } from '@/components/video-list/VideoList';
import { fetchPlayListVideo } from '@/api/fetchPlayListVideos';

export const PlayListVideoPage = () => {
  const { playListID } = useParams<{ playListID: string }>();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(PagePath.playlistsPage);
  };

  return (
    <div className={styles.container}>
      <VideoList
        playListID={playListID}
        renderVideo={video => (
          <VideoCard
            id={video.id}
            title={video.title}
            description={video.description}
            isShowVideo={true}
          />
        )}
        fetchFunction={fetchPlayListVideo}
      />

      <Button onClick={handleBackClick}>{messages.backButtonLabel}</Button>
    </div>
  );
};
