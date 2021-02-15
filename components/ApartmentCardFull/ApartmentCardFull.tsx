import { Apartment } from '../../types/apartments';
import AgentContactInfo from '../AgentContactInfo/AgentContactInfo';
import ApartmentDescription from '../ApartmentDescription/ApartmentDescription';
import styles from './ApartmentCardFull.module.css';

type Props = {
  apartment: Apartment;
};

export default function ApartmentCardFull({ apartment }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={apartment.imageUrl} alt={apartment.street} />
      </div>
      <div className={styles.description}>
        <ApartmentDescription
          street={apartment.street}
          city={apartment.city}
          bedroom={apartment.bedroom}
          price={apartment.priceTag}
        />
        <div className={styles.agent}>
          <AgentContactInfo name={apartment.agent} tel={apartment.phone} />
        </div>
      </div>
    </div>
  );
}
