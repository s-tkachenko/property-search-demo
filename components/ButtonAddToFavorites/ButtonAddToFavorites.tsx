import { useContext } from 'react';

import FavoritesContext from '../../context/favorites';
import { actionTypes } from '../../reducers/favorites';
import { Apartment } from '../../types/apartments';
import styles from './ButtonAddToFavorites.module.css';

type Props = {
  apartment: Apartment;
};

export default function ButtonAddToFavorites({ apartment }: Props) {
  const { favorites, favoritesDispatch } = useContext(FavoritesContext);
  const { apartments } = favorites;
  const isFavorite = apartments.some((item) => item.id === apartment.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    favoritesDispatch({
      type: isFavorite ? actionTypes.REMOVE_FAVORITE : actionTypes.ADD_FAVORITE,
      payload: {
        apartment
      }
    });
  };

  return (
    <div className={`${styles.button} ${isFavorite && styles.favorite}`} onClick={handleClick} />
  );
}
