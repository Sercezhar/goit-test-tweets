import useClickOutside from '@/hooks/useClickOutside';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import styles from './Dropdown.module.css';
import DropdownList from './DropdownList';

const cx = classNames.bind(styles);

function Dropdown({ options, label = '', filter, setFilter, setCurrentLimit }) {
  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  const iconClasses = cx({
    icon: true,
    rotate: isOpen,
  });

  function handleClickOnOption(option) {
    setFilter(option);
    setIsOpen(false);
    setCurrentLimit(6);
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        className={styles.buttonWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
          opacity: { delay: 0.2 },
        }}
      >
        <span className={styles.label}>{label}</span>

        <motion.button
          className={styles.button}
          type="button"
          onClick={() => setIsOpen(prevState => !prevState)}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 40,
          }}
        >
          {filter}
          <FiChevronDown className={iconClasses} />
        </motion.button>
      </motion.div>

      {isOpen && (
        <DropdownList
          options={options}
          filter={filter}
          isOpen={isOpen}
          handleClickOnOption={handleClickOnOption}
        />
      )}
    </div>
  );
}

export default Dropdown;
