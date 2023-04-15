import { motion } from 'framer-motion';
import styles from './LoadMoreButton.module.css';

function LoadMoreButton({ onLoadMore }) {
  return (
    <div className={styles.wrapper}>
      <motion.button
        className={styles.button}
        type="button"
        onClick={() => onLoadMore()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
      >
        Load more
      </motion.button>
    </div>
  );
}

export default LoadMoreButton;
