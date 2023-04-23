import { numberWithCommas } from '@/utils';
import { motion } from 'framer-motion';
import styles from './UsersListCard.module.css';
import UsersListCardAvatar from './UsersListCardAvatar';
import UsersListCardButton from './UsersListCardButton';
import logo from '/images/logo.png';
import speechBubble from '/images/speech-bubble.png';

function UsersListCard({ user, toggleFollow, isFollowing, mutation }) {
  return (
    <motion.li
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img className={styles.logo} src={logo} alt="logo" />

      <div className={styles.bubbles}></div>

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
