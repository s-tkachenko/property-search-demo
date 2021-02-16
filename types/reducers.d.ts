export type FavoritesState = {
  apartments: Apartment[];
};

export type FavoritesAction = { 
  type: string;
  payload: {
    apartments?: Apartment[],
    apartment?: Apartment
  }
 };