export const DEFAULT = {
  PAGE_INDEX: 1,
  PAGE_LIMIT: 10,
  SEARCH_MAX_PROMPTS: 5,
  SEARCH_PLACEHOLDER: 'e.g. Liverpool'
};

export const MODIFIER = {
  PRICE_TAG: (price: number): string => `£${price},000`,
  IMAGE_URL: (imageId: number): string => `/mock-images/img${imageId}.jpg`
};

export const FAVORITES = {
  LOCAL_STORAGE_KEY_NAME: 'favorite-apartments'
};

export const RECENT_SEARCH = {
  LOCAL_STORAGE_KEY_NAME: 'recent-searches',
  MAX_ITEMS: 5
};

export const STATUS_CODE = {
  SUCCESS: 200
};

export const SEARCH_PROMPTS = [
  'Belfast',
  'Birmingham',
  'Birstall',
  'Bristol',
  'Cardiff',
  'Coventry',
  'Edinburgh',
  'Glasgow',
  'Kingston upon Hull',
  'Leeds',
  'Leicester',
  'Liverpool',
  'London',
  'Manchester',
  'Newcastle',
  'Nottingham',
  'Portsmouth',
  'Sheffield',
  'Southampton',
  'Stoke-on-Trent',
  'Trent'
];
