import Link from 'next/link';

import ButtonFavorites from '../ButtonFavorites/ButtonFavorites';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={styles.navigation}>
          <ButtonFavorites />
        </div>
      </div>
    </header>
  );
}
