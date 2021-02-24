import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.container} data-testid="spinner">
      <div className={styles.loader} />
    </div>
  );
}
