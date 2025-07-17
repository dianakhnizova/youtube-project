import { Logo } from './components/logo/Logo';
import { NavMenu } from './components/nav-menu/NavMenu';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <NavMenu />
    </header>
  );
};
