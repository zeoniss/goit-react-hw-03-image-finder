import styles from './button.module.css';

const Button = ({ onClick }) => (
  <button onClick={onClick} className={styles.Button} type="button">
    Load more
  </button>
);

export default Button;
