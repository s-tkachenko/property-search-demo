import styles from './ContentGrid.module.css';

type Props = {
  children: React.ReactNode;
};

export default function ContentGrid({ children }: Props) {
  return <div className={styles.content}>{children}</div>;
}
