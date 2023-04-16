import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          <span className={styles.goit}>GOIT</span>{' '}
          <span className={styles.tweets}>Tweets</span>
        </h1>

        <motion.button
          className={styles.button}
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        >
          <Link className={styles.link} to="users">
            Explore
          </Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
