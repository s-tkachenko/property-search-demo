import { getAllApartmentIds, getApartmentById } from './apartments';

test('gets apartment ids from mocks', () => {
  const res = getAllApartmentIds();

  expect(res.some((el) => el.params.id === 'ed76caef-8de4-42ee-9181-11c1511532e2')).toBe(true);
});

test('gets apartment data from mocks', () => {
  const apartmentId = '36466fe5-2ED4-4caa-b7b3-a318c7b4bd05';

  const res = getApartmentById(apartmentId);

  expect(res).toEqual(
    expect.objectContaining({
      id: '36466fe5-2ed4-4caa-b7b3-a318c7b4bd05',
      city: 'Cardiff'
    })
  );
});
