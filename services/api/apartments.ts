import { API } from '../../constants/routes';
import type {
  Apartment,
  ApartmentId,
  ServerResponseApartmentDetails,
  ServerResponseApartmentIds
} from '../../types/apartments';

export async function getAllApartmentIds(): Promise<ApartmentId[]> {
  try {
    const res = await fetch(API.ALL_APARTMENTS_IDS);
    const data = (await res.json()) as ServerResponseApartmentIds;
    const ids = data?.ids || [];

    return ids.map((id: string) => ({
      params: { id }
    }));
  } catch (e) {
    return [];
  }
}

export async function getApartmentById(id: string): Promise<Apartment | null> {
  try {
    const res = await fetch(API.APARTMENT_BY_ID(id));
    const data = (await res.json()) as ServerResponseApartmentDetails;

    return data?.apartment || null;
  } catch (e) {
    return null;
  }
}
