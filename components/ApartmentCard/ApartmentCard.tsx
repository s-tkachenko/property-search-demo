import type { Apartment } from '../../types/apartments';
import ApartmentDescription from '../ApartmentDescription/ApartmentDescription';
import ButtonAddToFavorites from '../ButtonAddToFavorites/ButtonAddToFavorites';
import styles from './ApartmentCard.module.css';

interface Props {
  apartment: Apartment;
}

export default function ApartmentCard({ apartment }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <img src={apartment.imageUrl} alt={apartment.street} />
        <div className={styles.favoritesButton}>
          <ButtonAddToFavorites apartment={apartment} />
        </div>
      </div>
      <div className={styles.description}>
        <ApartmentDescription
          street={apartment.street}
          city={apartment.city}
          bedroom={apartment.bedroom}
          price={apartment.priceTag}
        />
      </div>
    </section>
  );
}
