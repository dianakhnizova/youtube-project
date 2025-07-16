import styles from './VideoCard.module.css';

interface Props {
  id: string;
  title: string;
  description: string;
}

export const VideoCard = ({ id, title, description }: Props) => {
  return (
    <li className={styles.container}>
      <p>{title}</p>
      <iframe
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{description}</p>
    </li>
  );
};
