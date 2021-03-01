/* eslint-disable @typescript-eslint/unbound-method */
import { getFavorites, setFavorites } from './favorites';

test('should set apartments to localstorage', () => {
  Storage.prototype.setItem = jest.fn(() => null);

  const apartments = [
    {
      id: '23423',
      city: 'City',
      street: '5 Street',
      bedroom: 5,
      priceTag: '451000',
      imageUrl: '/img.jpg',
      phone: '000 111 222',
      agent: 'Agent Name'
    }
  ];
  setFavorites(apartments);

  expect(localStorage.setItem).toBeCalledWith('favorite-apartments', JSON.stringify(apartments));
});

test('should get apartments from localstorage', () => {
  const rawApartments = [
    {
      id: '23423',
      city: 'City',
      street: '5 Street',
      bedroom: 5,
      priceTag: '451000',
      imageUrl: '/img.jpg',
      phone: '000 111 222',
      agent: 'Agent Name'
    }
  ];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(rawApartments));

  const apartments = getFavorites();

  expect(localStorage.getItem).toBeCalledWith('favorite-apartments');
  expect(apartments).toEqual(rawApartments);
});

test('should successfully process broken data from localstorage', () => {
  Storage.prototype.getItem = jest.fn(() => '{234234234');

  const apartments = getFavorites();

  expect(localStorage.getItem).toBeCalledWith('favorite-apartments');
  expect(apartments).toEqual([]);
});

test('should successfully process old data from localstorage', () => {
  Storage.prototype.getItem = jest.fn(() => '{}');

  const apartments = getFavorites();

  expect(localStorage.getItem).toBeCalledWith('favorite-apartments');
  expect(apartments).toEqual([]);
});

test('should successfully process empty data from localstorage', () => {
  Storage.prototype.getItem = jest.fn(() => null);

  const apartments = getFavorites();

  expect(localStorage.getItem).toBeCalledWith('favorite-apartments');
  expect(apartments).toEqual([]);
});
