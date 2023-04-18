import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '/favicon.svg';

const cx = classNames.bind(styles);

function Navigation() {
  const navLink = cx('link');
  const navLinkActive = cx(navLink, 'active');

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.logo} to="/">
        <img src={logo} width="32" alt="bird" />
      </NavLink>

      <ul className={styles.list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? navLinkActive : navLink)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? navLinkActive : navLink)}
            to="tweets"
          >
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
