import styles from './ButtonFavorites.module.css';

export default function ButtonFavorites() {
  return (
    <a href="#" className={styles.container}>
      <div className={styles.icon} />
      Favorites
    </a>
  );
}
