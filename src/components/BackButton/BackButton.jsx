import { motion } from 'framer-motion';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  function onGoBack() {
    const prevLocation = location.state?.from ?? '/';
    navigate(prevLocation);
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
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 40,
        opacity: { delay: 0.2 },
      }}
    >
      <HiOutlineArrowLeft size={30} color="var(--black-color)" />
    </motion.button>
  );
}

export default BackButton;
