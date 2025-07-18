import { JSX, useEffect, useState } from 'react';
import type { VideoData } from '../../sources/types';
import styles from './VideoList.module.css';
import { Pagination } from '../pagination/Pagination';
import { loadVideoList } from './videoListLoader';
import React from 'react';

interface Props {
  playListID?: string;
  renderVideo: (video: VideoData) => JSX.Element;
  fetchFunction: (
    playListID?: string,
    pageToken?: string
  ) => Promise<{
    videos: VideoData[];
    nextPageToken?: string;
    prevPageToken?: string;
  }>;
}

export const VideoList = ({
  playListID,
  renderVideo,
  fetchFunction,
}: Props) => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>(
    undefined
  );
  const [prevPageToken, setPrevPageToken] = useState<string | undefined>(
    undefined
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    void loadVideoList({
      playListID,
      pageToken: undefined,
      setVideos,
      setNextPageToken,
      setPrevPageToken,
      fetchFunction: fetchFunction,
    });
    setCurrentPage(1);
  }, [playListID]);

  const handleNextPage = () => {
    if (nextPageToken) {
      setCurrentPage(prev => prev + 1);
      void loadVideoList({
        playListID,
        pageToken: nextPageToken,
        setVideos,
        setNextPageToken,
        setPrevPageToken,
        fetchFunction: fetchFunction,
      });
    }
  };

  const handlePrevPage = () => {
    if (prevPageToken) {
      setCurrentPage(prev => prev - 1);
      void loadVideoList({
        pageToken: prevPageToken,
        setVideos,
        setNextPageToken,
        setPrevPageToken,
        fetchFunction: fetchFunction,
      });
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.videoList}>
        {videos.map(video =>
          React.cloneElement(renderVideo(video), { key: video.id })
        )}
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
