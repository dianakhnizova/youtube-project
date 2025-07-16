import styles from './PlayListCard.module.css';

interface Props {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: string;
}

export const PlayListCard = ({
  title,
  description,
  publishedAt,
  thumbnails,
}: Props) => {
  return (
    <li className={styles.container}>
      <p>{title}</p>
      <img src={thumbnails} alt="Image PlayList" />
      <p>{publishedAt}</p>
      <p>{description}</p>
    </li>
  );
};
