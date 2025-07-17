import { Outlet } from 'react-router-dom';
import styles from './MainSection.module.css';

export const MainSection = () => {
  return (
    <main className={styles.section}>
      <Outlet />
    </main>
  );
};
