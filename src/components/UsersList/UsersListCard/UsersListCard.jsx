import { numberWithCommas } from '@/utils';
import { motion } from 'framer-motion';
import styles from './UsersListCard.module.css';
import UsersListCardAvatar from './UsersListCardAvatar';

function UsersListCard({ user }) {
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

      <motion.button
        className={styles.button}
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
      >
        Follow
      </motion.button>
    </motion.li>
  );
}

export default UsersListCard;
