import { useContext } from 'react';

import FavoritesContext from '../context/favorites';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return <h2>favorites {JSON.stringify(favorites)}</h2>;
}
