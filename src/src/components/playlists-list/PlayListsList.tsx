import styles from './PlayListsList.module.css';
import { useState, useEffect } from 'react';
import { PlayListData } from '@/src/sources/types';
import { PlayListCard } from '../playlist-card/PlayListCard';
import { Pagination } from '../pagination/Pagination';
import { loadPlayLists } from './playListLoader';

export const PlayListsList = () => {
  const [playLists, setPlayLists] = useState<PlayListData[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(
    undefined
  );
  const [prevPageToken, setPrevPageToken] = useState<string | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    void loadPlayLists({
      pageToken: undefined,
      setPlayLists,
      setNextPageToken,
      setPrevPageToken,
    });
  }, []);

  const handleNextPage = () => {
    if (nextPageToken) {
      setCurrentPage(prev => prev + 1);
      void loadPlayLists({
        pageToken: nextPageToken,
        setPlayLists,
        setNextPageToken,
        setPrevPageToken,
      });
    }
  };

  const handlePrevPage = () => {
    if (prevPageToken) {
      setCurrentPage(prev => prev - 1);
      void loadPlayLists({
        pageToken: nextPageToken,
        setPlayLists,
        setNextPageToken,
        setPrevPageToken,
      });
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.playList}>
        {playLists.map(video => (
          <PlayListCard
            title={video.title}
            description={video.description}
            thumbnails={video.thumbnails.default.url}
            publishedAt={video.publishedAt}
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
