import styles from './AgentContactInfo.module.css';

type Props = {
  name: string;
  tel: string;
};

export default function AgentContactInfo({ name, tel }: Props) {
  return (
    <>
      <div className={styles.head}>Marketed by</div>
      <h2 className={styles.agentName}>{name}</h2>
      <div className={styles.agentTitle}>Estate agent</div>
      <div className={styles.phoneNumber}>{tel}</div>
      <a href={`tel:${tel}`} className="button">
        Call agent
      </a>
    </>
  );
}
