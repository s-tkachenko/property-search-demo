import { ServerResponseApartmentList } from '../../types/apartments';

export const getFullPrice = (price: number): string => `£${price},000`;

export const getImageUrl = (imageId: number): string => `/mock-images/img${imageId}.jpg`;

export const getRouterParamStringValue = (val: string | string[] | undefined): string => {
  return typeof val === 'string' ? val : '';
};

export const getRouterParamIntValue = (val: string | string[] | undefined): number | null => {
  if (typeof val === 'string') {
    const num = Number.parseInt(val);
    return Number.isSafeInteger(num) ? num : null;
  }
  return null;
};

export const fetcher = (input: RequestInfo): Promise<ServerResponseApartmentList> =>
  fetch(input).then((res) => res.json());
