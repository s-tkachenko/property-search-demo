import React from 'react';

import { favoritesInitialState } from '../reducers/favorites';
import { FavoritesAction, FavoritesState } from '../types/reducers';

const FavoritesContext = React.createContext<{
  favorites: FavoritesState;
  favoritesDispatch: React.Dispatch<FavoritesAction>;
}>({
  favorites: favoritesInitialState,
  favoritesDispatch: () => null
});

export default FavoritesContext;
