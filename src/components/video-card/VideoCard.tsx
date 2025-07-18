import styles from './VideoCard.module.css';
import { messages } from './messages';
import { formatDate } from '@/utils/formatDate';

interface Props {
  id: string;
  title: string;
  description: string;
  thumbnails?: string;
  publishedAt?: string;
  onClick?: () => void;
  isShowVideo: boolean;
}

export const VideoCard = ({
  id,
  title,
  description,
  isShowVideo,
  thumbnails,
  publishedAt,
  onClick,
}: Props) => {
  return (
    <li onClick={onClick} className={styles.container}>
      <p>{title}</p>

      {isShowVideo && (
        <iframe
          className={styles.videoFrame}
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {thumbnails && (
        <img
          src={thumbnails}
          alt={messages.imageTitle}
          className={styles.image}
        />
      )}

      {publishedAt && <p>{formatDate(publishedAt)}</p>}

      <p>{description}</p>
    </li>
  );
};
