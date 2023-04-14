import { numberWithCommas } from '@/utils';
import styles from './UsersListCard.module.css';
import UsersListCardAvatar from './UsersListCardAvatar';

function UsersListCard({ user }) {
  return (
    <li className={styles.card}>
      <img
        className={styles.logo}
        src="./src/assets/images/logo.png"
        alt="logo"
      />

      <img
        className={styles.bubbles}
        src="./src/assets/images/speech-bubble.png"
        alt="speech bubbles"
      />

      <UsersListCardAvatar user={user} />

      <p className={styles.row}>{user.tweets} tweets</p>
      <p className={styles.row}>{numberWithCommas(user.followers)} followers</p>

      <button className={styles.button} type="button">
        Follow
      </button>
    </li>
  );
}

export default UsersListCard;
