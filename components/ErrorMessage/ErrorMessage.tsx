import MSG from '../../constants/messages';
import styles from './ErrorMessage.module.css';

interface Props {
  message?: string;
}

export default function ErrorMessage({ message = MSG.ERROR_UNEXPECTED }: Props) {
  return <div className={styles.container}>{message}</div>;
}
