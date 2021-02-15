import { API } from '../../constants/routes';
import { Apartment } from '../../types/apartments';

export async function getAllApartmentIds() {
  try {
    const res = await fetch(API.ALL_APARTMENTS_IDS);
    const data = await res.json();
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
    const data = await res.json();

    return data?.apartment;
  } catch (e) {
    return null;
  }
}
