import { useContext } from 'react';

import FavoritesContext from '../../context/favorites';
import { actionTypes } from '../../reducers/favorites';
import { Apartment } from '../../types/apartments';
import styles from './ButtonAddToFavorites.module.css';

type Props = {
  apartment: Apartment;
};
export default function ButtonAddToFavorites({ apartment }: Props) {
  const { favoritesDispatch } = useContext(FavoritesContext);

  const handleClick = () => {
    favoritesDispatch({
      type: actionTypes.ADD_FAVORITE,
      payload: {
        apartment
      }
    });
  };

  return <div className={styles.button} onClick={handleClick} />;
}
