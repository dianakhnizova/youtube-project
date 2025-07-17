import styles from './Logo.module.css';
import LogoIcon from '@/assets/youtube-icon.svg';
import { messages } from './messages';
import { NavLink } from 'react-router-dom';
import { PagePath } from '@/router/enum';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <NavLink to={PagePath.root}>
        <img src={LogoIcon} alt={messages.logoTitle} className={styles.image} />
      </NavLink>
    </div>
  );
};
