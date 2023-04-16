import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './UsersListCardButton.module.css';

const cx = classNames.bind(styles);

function UsersListCardButton({ user, toggleFollow, isFollowing, mutation }) {
  const buttonClasses = cx({
    button: true,
    followed: isFollowing(user.id),
  });

  return (
    <motion.button
      className={buttonClasses}
      type="button"
      disabled={mutation.isLoading}
      onClick={() => toggleFollow(user, isFollowing(user.id))}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <span className={styles.unffolowed}>
        {isFollowing(user.id) ? 'Following' : 'Follow'}
      </span>
    </motion.button>
  );
}

export default UsersListCardButton;
