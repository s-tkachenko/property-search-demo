import type { FavoritesAction, FavoritesState } from '../types/reducers';

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
        apartments: action.payload.apartments || []
      };
    case actionTypes.ADD_FAVORITE: {
      const apartmentToAdd = action.payload.apartment;
      const idToAdd = apartmentToAdd?.id;
      const isAlreadyExist = state.apartments.some((item) => item.id === idToAdd);
      if (isAlreadyExist || !apartmentToAdd) {
        return state;
      }
      return {
        ...state,
        apartments: [...state.apartments, apartmentToAdd]
      };
    }
    case actionTypes.REMOVE_FAVORITE: {
      const idToDelete = action.payload.apartment?.id;
      return {
        ...state,
        apartments: state.apartments.filter((item) => item.id !== idToDelete)
      };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
