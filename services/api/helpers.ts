import { MODIFIER } from '../../constants/common';
import { ServerResponseApartmentList } from '../../types/apartments';

export const getFullPrice = (price: number): string => MODIFIER.PRICE_TAG(price);

export const getImageUrl = (imageId: number): string => MODIFIER.IMAGE_URL(imageId);

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
