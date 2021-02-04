import { getFullPrice, getImageUrl } from '../../services/mock-helper';
import { Apartment } from '../../types/apartment';
import ButtonAddToFavorites from '../ButtonAddToFavorites/ButtonAddToFavorites';
import styles from './ApartmentCard.module.css';

type Props = {
  item: Apartment;
};

export default function ApartmentCard({ item }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={getImageUrl(item.image)} alt={item.street} />
        <div className={styles.favoritesButton}>
          <ButtonAddToFavorites />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.street}>{item.street}</h2>
        <div className={styles.additionalInfo}>
          <div className={styles.city}>{item.city}</div>
          <div className={styles.bedroom}>x{item.bedroom}</div>
        </div>
        <div className={styles.price}>{getFullPrice(item.price)}</div>
      </div>
    </section>
  );
}
