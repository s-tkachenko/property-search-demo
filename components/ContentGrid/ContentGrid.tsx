import styles from './ContentGrid.module.css';

interface Props {
  children: React.ReactNode;
}

export default function ContentGrid({ children }: Props) {
  return <div className={styles.content}>{children}</div>;
}
