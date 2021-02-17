import type { Apartment } from './apartments';

export interface FavoritesState {
    apartments: Apartment[];
}

export interface FavoritesAction { 
    type: string;
    payload: {
        apartments?: Apartment[];
        apartment?: Apartment;
    };
}