export const getFullPrice = (price: number): string => `£${price},000`;

export const getImageUrl = (imageId: number): string => `/mock-images/img${imageId}.jpg`;

export const getRouterParamStringValue = (val: string | string[] | undefined): string => {
  return typeof val === 'string' ? val : '';
};

export const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json());
