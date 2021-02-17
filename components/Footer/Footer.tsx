import { FOOTER } from '../../constants/captions';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>{FOOTER.GENERAL_INFO}</div>
    </footer>
  );
}
