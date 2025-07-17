import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import { navMenuLink } from './navMenuLink';

export const NavMenu = () => {
  return (
    <ul className={styles.container}>
      {navMenuLink.map(link => (
        <NavLink key={link.label} to={link.to} className={styles.link}>
          {link.label}
        </NavLink>
      ))}
    </ul>
  );
};
