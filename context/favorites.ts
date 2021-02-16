import React from 'react';

import { initialState } from '../reducers/favorites';
import { FavoritesAction, FavoritesState } from '../types/reducers';

const FavoritesContext = React.createContext<{
  favorites: FavoritesState;
  favoritesDispatch: React.Dispatch<FavoritesAction>;
}>({
  favorites: initialState,
  favoritesDispatch: () => null
});

export default FavoritesContext;
