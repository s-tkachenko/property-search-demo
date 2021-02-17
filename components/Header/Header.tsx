import Link from 'next/link';

import { CLIENT } from '../../constants/routes';
import ButtonFavorites from '../ButtonFavorites/ButtonFavorites';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href={CLIENT.HOME}>
          <a>
            <Logo />
          </a>
        </Link>
        <nav className={styles.navigation}>
          <ButtonFavorites />
        </nav>
      </div>
    </header>
  );
}
