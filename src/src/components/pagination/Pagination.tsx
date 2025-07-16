import styles from './Pagination.module.css';
import PrevArrow from '@/assets/prev.svg';
import NextArrow from '@/assets/next.svg';

interface Props {
  onClickPrev: () => void;
  onClickNext: () => void;
  prevPageToken: string | undefined;
  nextPageToken: string | undefined;
  currentPage: number;
}

export const Pagination = ({
  onClickPrev,
  onClickNext,
  prevPageToken,
  nextPageToken,
  currentPage,
}: Props) => {
  return (
    <div className={styles.container}>
      <button
        onClick={onClickPrev}
        disabled={!prevPageToken}
        className={styles.button}
      >
        <img src={PrevArrow} alt="Prev" className={styles.image} />
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={onClickNext}
        disabled={!nextPageToken}
        className={styles.button}
      >
        <img src={NextArrow} alt="Next" className={styles.image} />
      </button>
    </div>
  );
};
