import data from '../../__mocks__/mock-data.json';
import { getFullPrice, getImageUrl } from '../../services/api/helpers';
import type { Apartment, ApartmentId } from '../../types/apartments';

export function getAllApartmentIds(): ApartmentId[] {
  return data.map((el) => ({
    params: {
      id: el.id
    }
  }));
}

export function getApartmentById(id: string): Apartment | null {
  const apartmentId = id.toLowerCase();
  const apartmentData = data.find((item) => item.id.toLowerCase() === apartmentId);
  return apartmentData
    ? {
        ...apartmentData,
        priceTag: getFullPrice(apartmentData.price),
        imageUrl: getImageUrl(apartmentData.image)
      }
    : null;
}
