import Container from '../Container/Container';
import styles from './Error.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Error() {
  const navigate = useNavigate();

  return (
    <Container>
      <motion.div
        className={styles.error}
        initial={{ y: -150, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <h2 className={styles.title}>404</h2>
        <p className={styles.type}>Page not found</p>
        <p className={styles.message}>How you got here is a mystery</p>

        <motion.button
          className={styles.button}
          type="button"
          onClick={() => navigate('/')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 40,
            opacity: { delay: 0.4 },
          }}
        >
          Home
        </motion.button>
      </motion.div>
    </Container>
  );
}

export default Error;
