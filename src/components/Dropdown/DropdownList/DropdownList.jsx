import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import styles from './DropdownList.module.css';

const cx = classNames.bind(styles);

function DropdownList({ options, filter, isOpen, handleClickOnOption }) {
  const radioGroupClasses = cx({
    radioGroup: true,
    isOpen,
  });

  return (
    <motion.div
      className={radioGroupClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {options.map((option, index) => (
        <label className={styles.radioLabel} key={index}>
          <input
            className={styles.radioInput}
            type="radio"
            name="filter"
            value={option}
            checked={filter === option}
            onChange={() => handleClickOnOption(option)}
          />

          {option}
        </label>
      ))}
    </motion.div>
  );
}

export default DropdownList;
