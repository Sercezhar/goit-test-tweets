import { motion } from 'framer-motion';
import styles from './Notification.module.css';

function Notification({ message }) {
  return (
    <motion.div
      className={styles.notification}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {message}
    </motion.div>
  );
}

export default Notification;
