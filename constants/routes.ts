const BASE_PATH = 'http://localhost:3000';

export const API = {
  APARTMENT_BY_ID: (id: string) => `${BASE_PATH}/api/apartments/${id}`,
  ALL_APARTMENTS_IDS: `${BASE_PATH}/api/apartments/all-ids`,
  LOCATION_SEARCH: (location: string) => `${BASE_PATH}/api/search/${location}`
};

export const CLIENT = {
  APARTMENT_BY_ID: (id: string) => `/apartments/${id}`
};
