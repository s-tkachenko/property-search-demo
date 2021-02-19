import styles from './Footer.module.css';

type Props = {
  copyrightText: string;
};

export default function Footer({ copyrightText }: Props) {
  return (
    <footer className={styles.container}>
      <div>{copyrightText}</div>
    </footer>
  );
}
