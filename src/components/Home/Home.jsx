import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <h1 className={styles.title}>
            <span className={styles.goit}>GOIT</span>{' '}
            <span className={styles.tweets}>Tweets</span>
          </h1>
        </motion.div>

        <motion.button
          className={styles.button}
          type="button"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        >
          <Link className={styles.link} to="tweets">
            Explore
          </Link>
        </motion.button>
      </div>
    </div>
  );
}

export default Home;
