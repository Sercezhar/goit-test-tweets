import styles from './UsersListCardAvatar.module.css';

function UsersListCardAvatar({ user }) {
  return (
    <div className={styles.avatar}>
      <span className={styles.holder}>
        <img
          className={styles.picture}
          src={user.avatar}
          alt={user.user}
          width="62"
        />
      </span>
    </div>
  );
}

export default UsersListCardAvatar;
