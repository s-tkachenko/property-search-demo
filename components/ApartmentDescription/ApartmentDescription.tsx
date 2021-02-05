import styles from './ApartmentDescription.module.css';

type Props = {
  street: string;
  city: string;
  bedroom: number;
  price: string;
};

export default function ApartmentDescription({ street, city, bedroom, price }: Props) {
  return (
    <>
      <h2 className={styles.street}>{street}</h2>
      <div className={styles.additionalInfo}>
        <div className={styles.city}>{city}</div>
        <div className={styles.bedroom}>x{bedroom}</div>
      </div>
      <div className={styles.price}>{price}</div>
    </>
  );
}
