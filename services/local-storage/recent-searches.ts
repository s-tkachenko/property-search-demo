import { RECENT_SEARCH } from '../../constants/common';
import { RecentSearchLocation } from '../../types/apartments';

export const saveRecentSearchQuery = (value: string): void => {
  const list: RecentSearchLocation[] = getRecentSearchList();
  list.unshift({
    value: value,
    timestamp: Date.now()
  });
  const recent = list.slice(0, RECENT_SEARCH.MAX_ITEMS);
  localStorage.setItem(RECENT_SEARCH.LOCAL_STORAGE_KEY_NAME, JSON.stringify(recent));
};

export const getRecentSearchList = (): RecentSearchLocation[] => {
  const rawList = localStorage.getItem(RECENT_SEARCH.LOCAL_STORAGE_KEY_NAME);
  try {
    const list = rawList ? JSON.parse(rawList) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
};
