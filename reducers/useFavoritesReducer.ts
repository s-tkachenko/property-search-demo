import { useReducer } from 'react';

import type { FavoritesAction, FavoritesState } from '../types/reducers';
import favoritesReducer, { initialState } from './favoritesReducer';

const useFavoritesReducer = (): {
  favorites: FavoritesState;
  favoritesDispatch: React.Dispatch<FavoritesAction>;
} => {
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, initialState);

  return {
    favorites,
    favoritesDispatch
  };
};

export default useFavoritesReducer;
