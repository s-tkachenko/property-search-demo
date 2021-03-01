import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.container} data-testid="logo">
      <div className={styles.logo} />
      <div className={styles.name}>
        Property<b>Search</b>
      </div>
    </div>
  );
}
