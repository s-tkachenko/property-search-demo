import fetchMock from 'fetch-mock-jest';

import { API } from '../../constants/routes';
import { getAllApartmentIds, getApartmentById } from './apartments';

test('fetches apartment ids from server when server returns a successful response', async () => {
  fetchMock.get(API.ALL_APARTMENTS_IDS, { ids: ['id1', 'id2'] });

  const res = await getAllApartmentIds();

  expect(res).toStrictEqual([{ params: { id: 'id1' } }, { params: { id: 'id2' } }]);
  fetchMock.mockReset();
});

test('fetches apartment ids from server when server returns an error', async () => {
  fetchMock.get(API.ALL_APARTMENTS_IDS, () => 400);

  const res = await getAllApartmentIds();

  expect(res).toStrictEqual([]);
  fetchMock.mockReset();
});

test('fetches apartment data from server when server returns a successful response', async () => {
  const apartmentId = 'sd1sdf0';
  fetchMock.get(API.APARTMENT_BY_ID(apartmentId), {
    apartment: {
      id: 'test-id'
    }
  });

  const res = await getApartmentById(apartmentId);

  expect(res).toStrictEqual({
    id: 'test-id'
  });
  fetchMock.mockReset();
});

test('fetches apartment data from server when server returns an error', async () => {
  const apartmentId = 'sd1sdf0';
  fetchMock.get(API.APARTMENT_BY_ID(apartmentId), () => 400);

  const res = await getApartmentById(apartmentId);

  expect(res).toBe(null);
  fetchMock.mockReset();
});
