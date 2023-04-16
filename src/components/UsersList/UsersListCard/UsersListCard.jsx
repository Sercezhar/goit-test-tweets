import { numberWithCommas } from '@/utils';
import { motion } from 'framer-motion';
import styles from './UsersListCard.module.css';
import UsersListCardAvatar from './UsersListCardAvatar';
import UsersListCardButton from './UsersListCardButton';

function UsersListCard({ user, toggleFollow, isFollowing, mutation }) {
  return (
    <motion.li
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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

      <UsersListCardButton
        user={user}
        toggleFollow={toggleFollow}
        isFollowing={isFollowing}
        mutation={mutation}
      />
    </motion.li>
  );
}

export default UsersListCard;
