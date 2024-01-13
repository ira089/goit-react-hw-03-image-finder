import styles from './Button.module.css';
const Button = ({ onButton }) => {
  return (
    <button onClick={onButton} type="button" className={styles.button}>
      Load more
    </button>
  );
};

export default Button;
