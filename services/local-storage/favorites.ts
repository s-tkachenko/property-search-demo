import { FAVORITES } from '../../constants/common';
import { Apartment } from '../../types/apartments';

export const getFavorites = (): Apartment[] => {
  const rawList = localStorage.getItem(FAVORITES.LOCAL_STORAGE_KEY_NAME);
  try {
    const list = rawList ? JSON.parse(rawList) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
};
