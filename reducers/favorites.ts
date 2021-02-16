import { FavoritesAction, FavoritesState } from '../types/reducers';

export enum actionTypes {
  POPULATE_FAVORITES = 'POPULATE_FAVORITES',
  ADD_FAVORITE = 'ADD_FAVORITE',
  REMOVE_FAVORITE = 'REMOVE_FAVORITE'
}

export const initialState: FavoritesState = { apartments: [] };

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case actionTypes.POPULATE_FAVORITES:
      return {
        ...state,
        apartments: action.payload?.apartments || []
      };
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        apartments: [...state.apartments, action.payload?.apartment]
      };
    case actionTypes.REMOVE_FAVORITE:
    default:
      return state;
  }
};

export default favoritesReducer;
