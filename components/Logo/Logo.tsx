import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.logo} />
      <div className={styles.name}>
        Property<b>Search</b>
      </div>
    </div>
  );
}
