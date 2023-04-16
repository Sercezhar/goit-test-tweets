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

      <img
        className={styles.ellipse}
        src="src/assets/images/ellipse.png"
        alt="ellipse"
      />

      <img src="src/assets/images/rectangle.png" alt="rectangle" />
    </div>
  );
}

export default UsersListCardAvatar;
