import { FavoritesAction, FavoritesState } from '../types/reducers';

export const actionTypes = {
  POPULATE_FAVORITES: 'POPULATE_FAVORITES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE'
};

export const favoritesInitialState: FavoritesState = { apartments: [], isLoading: false };

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case actionTypes.POPULATE_FAVORITES:
      return state;
    case actionTypes.ADD_FAVORITE:
      console.log('add apartment', action.payload?.apartments);
      return state;
    case actionTypes.REMOVE_FAVORITE:
    default:
      return state;
  }
};

export default favoritesReducer;
