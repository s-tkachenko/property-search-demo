import Logo from '../Logo/Logo';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div>
          <Logo />
        </div>
      </div>
    </header>
  );
}
