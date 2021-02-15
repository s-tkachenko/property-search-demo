export type FavoritesState = {
  apartments: Apartment[];
  isLoading: boolean;
};

export type FavoritesAction = { 
  type: string;
  payload?: Record<string, unknown>
 };