export default {
  HOME: 'Property and Homes Search',
  SEARCH_RESULTS: (query: string) => `Results for '${query}'`,
  APARTMENT_DETAILS: (street: string, city: string) => `${street} - ${city}`
};
