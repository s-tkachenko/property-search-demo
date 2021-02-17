import { AGENT_CONTACT_INFO } from '../../constants/captions';
import styles from './AgentContactInfo.module.css';

interface Props {
  name: string;
  tel: string;
}

export default function AgentContactInfo({ name, tel }: Props) {
  return (
    <>
      <div className={styles.head}>{AGENT_CONTACT_INFO.MARKETED_BY}</div>
      <h2 className={styles.agentName}>{name}</h2>
      <div className={styles.agentTitle}>{AGENT_CONTACT_INFO.JOB_TITLE}</div>
      <div className={styles.phoneNumber}>{tel}</div>
      <a href={`tel:${tel}`} className="button">
        {AGENT_CONTACT_INFO.CALL_BUTTON_CAPTION}
      </a>
    </>
  );
}
