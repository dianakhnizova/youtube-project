import { VideoList } from '@/components/video-list/VideoList';
import { useNavigate } from 'react-router-dom';
import styles from './PlayListsPage.module.css';
import { VideoCard } from '@/components/video-card/VideoCard';
import { fetchPlayLists } from '@/api/fetchPlayLists';

export const PlayListsPage = () => {
  const navigate = useNavigate();

  const handleNavigateToPlaylistVideo = (playlistId: string) => {
    navigate(`/playlist/${playlistId}`);
  };

  return (
    <div className={styles.container}>
      <VideoList
        renderVideo={playlist => (
          <VideoCard
            id={playlist.id}
            title={playlist.title}
            description={playlist.description}
            thumbnails={playlist.thumbnails?.default.url}
            publishedAt={playlist.publishedAt}
            onClick={() => handleNavigateToPlaylistVideo(playlist.id)}
            isShowVideo={false}
          />
        )}
        fetchFunction={fetchPlayLists}
      />
    </div>
  );
};
