import { useEffect, useState } from 'react';
import type { VideoData } from '../../sources/types';
import styles from './VideosList.module.css';
import { VideoCard } from '../video-card/VideoCard';
import { Pagination } from '../pagination/Pagination';
import { loadVideosList } from './videosListLoader';

export const VideosList = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(
    undefined
  );
  const [prevPageToken, setPrevPageToken] = useState<string | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    void loadVideosList({
      pageToken: nextPageToken,
      setVideos,
      setNextPageToken,
      setPrevPageToken,
    });
  }, []);

  const handleNextPage = () => {
    if (nextPageToken) {
      setCurrentPage(prev => prev + 1);
      void loadVideosList({
        pageToken: nextPageToken,
        setVideos,
        setNextPageToken,
        setPrevPageToken,
      });
    }
  };

  const handlePrevPage = () => {
    if (prevPageToken) {
      setCurrentPage(prev => prev - 1);
      void loadVideosList({
        pageToken: nextPageToken,
        setVideos,
        setNextPageToken,
        setPrevPageToken,
      });
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.videoList}>
        {videos.map(video => (
          <VideoCard
            id={video.id}
            title={video.title}
            description={video.description}
          />
        ))}
      </ul>
      <Pagination
        onClickNext={handleNextPage}
        onClickPrev={handlePrevPage}
        prevPageToken={prevPageToken}
        nextPageToken={nextPageToken}
        currentPage={currentPage}
      />
    </div>
  );
};
