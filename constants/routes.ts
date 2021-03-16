export const API = {
  LOCATION_SEARCH: (location: string, page = 1): string => `/api/search/${location}?page=${page}`
};

export const CLIENT = {
  HOME: '/',
  APARTMENT_BY_ID: (id: string): string => `/apartments/${id}`,
  FIND_APARTMENTS_BY_QUERY: (query: string): string => `/for-sale/${query}`,
  FAVORITES: '/favorites'
};
