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

      <img className={styles.ellipse} src="/ellipse.png" alt="ellipse" />

      <img src="/rectangle.png" alt="rectangle" />
    </div>
  );
}

export default UsersListCardAvatar;
