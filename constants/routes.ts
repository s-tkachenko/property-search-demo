const BASE_PATH = 'http://localhost:3000';

export const API = {
  APARTMENT_BY_ID: (id: string) => `${BASE_PATH}/api/apartments/${id}`,
  ALL_APARTMENTS_IDS: `${BASE_PATH}/api/apartments/all-ids`,
  LOCATION_SEARCH: (location: string, page = 1) =>
    `${BASE_PATH}/api/search/${location}?page=${page}`
};

export const CLIENT = {
  APARTMENT_BY_ID: (id: string) => `/apartments/${id}`,
  FIND_APARTMENTS_BY_QUERY: (query: string) => `/for-sale/${query}`,
  FAVORITES: '/favorites'
};
