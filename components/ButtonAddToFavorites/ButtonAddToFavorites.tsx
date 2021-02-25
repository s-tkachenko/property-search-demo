import { useContext } from 'react';

import FavoritesContext from '../../context/FavoritesContext';
import { actionTypes } from '../../reducers/favoritesReducer';
import type { Apartment } from '../../types/apartments';
import styles from './ButtonAddToFavorites.module.css';

interface Props {
  apartment: Apartment;
}

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
    <div
      data-testid="add-to-favorites"
      className={`${styles.button} ${isFavorite ? styles.favorite : styles.notFavorite}`}
      onClick={handleClick}>
      {isFavorite ? 'Favorite' : 'Not Favorite'}
    </div>
  );
}
