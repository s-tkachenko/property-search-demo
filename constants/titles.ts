export default {
  HOME: 'Property and Homes Search',
  SEARCH_RESULTS: (query: string): string => `Results for '${query}'`,
  APARTMENT_DETAILS: (street: string, city: string): string => `${street} - ${city}`,
  FAVORITES: 'My favorites'
};
