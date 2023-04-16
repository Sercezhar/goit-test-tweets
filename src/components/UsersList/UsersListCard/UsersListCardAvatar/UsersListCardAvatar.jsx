import ellipse from '/images/ellipse.png';
import rectangle from '/images/rectangle.png';
import styles from './UsersListCardAvatar.module.css';

function UsersListCardAvatar({ user }) {
  return (
    <div className={styles.avatar}>
      <img
        className={styles.picture}
        src={user.avatar}
        alt={user.user}
        width="64"
      />

      <img className={styles.ellipse} src={ellipse} alt="ellipse" />

      <img src={rectangle} alt="rectangle" />
    </div>
  );
}

export default UsersListCardAvatar;
