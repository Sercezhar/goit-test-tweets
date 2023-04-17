import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.dots}></span>
    </div>
  );
}

export default Loader;
