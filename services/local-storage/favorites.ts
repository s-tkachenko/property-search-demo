import { FAVORITES } from '../../constants/common';
import type { Apartment } from '../../types/apartments';

export const getFavorites = (): Apartment[] => {
  try {
    const rawList = localStorage.getItem(FAVORITES.LOCAL_STORAGE_KEY_NAME);
    const list: unknown = rawList ? JSON.parse(rawList) : [];
    return (Array.isArray(list) ? list : []) as Apartment[];
  } catch (e) {
    return [];
  }
};

export const setFavorites = (apartments: Apartment[]): void => {
  localStorage.setItem(FAVORITES.LOCAL_STORAGE_KEY_NAME, JSON.stringify(apartments));
};
