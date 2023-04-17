import { motion } from 'framer-motion';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

function BackButton() {
  const navigate = useNavigate();

  function onGoBack() {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }

  return (
    <motion.button
      className={styles.button}
      type="button"
      onClick={() => onGoBack()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <BsArrowLeft size={40} color="var(--black-color)" />
    </motion.button>
  );
}

export default BackButton;