const BASE_PATH = 'http://localhost:3000';

export const API = {
  APARTMENT_BY_ID: (id: string): string => `${BASE_PATH}/api/apartments/${id}`,
  ALL_APARTMENTS_IDS: `${BASE_PATH}/api/apartments/all-ids`,
  LOCATION_SEARCH: (location: string, page = 1): string =>
    `${BASE_PATH}/api/search/${location}?page=${page}`
};

export const CLIENT = {
  HOME: '/',
  APARTMENT_BY_ID: (id: string): string => `/apartments/${id}`,
  FIND_APARTMENTS_BY_QUERY: (query: string): string => `/for-sale/${query}`,
  FAVORITES: '/favorites'
};
