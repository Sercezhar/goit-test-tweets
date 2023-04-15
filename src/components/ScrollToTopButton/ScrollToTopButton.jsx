import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {showButton && (
        <motion.button
          className={styles.button}
          type="button"
          onClick={() => scrollToTop()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
        >
          <BsArrowUpShort size={50} color="var(--black-color)" />
        </motion.button>
      )}
    </>
  );
}

export default ScrollToTopButton;
