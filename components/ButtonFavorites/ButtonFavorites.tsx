import Link from 'next/link';

import { FAVORITES } from '../../constants/captions';
import { CLIENT } from '../../constants/routes';
import styles from './ButtonFavorites.module.css';

export default function ButtonFavorites() {
  return (
    <Link href={CLIENT.FAVORITES}>
      <a className={styles.button}>{FAVORITES.BUTTON_CAPTION}</a>
    </Link>
  );
}
