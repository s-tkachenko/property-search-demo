/* eslint-disable @typescript-eslint/unbound-method */
import { getRecentSearchList, saveRecentSearchQuery } from './recent-searches';

test('should get recent searches from localstorage', () => {
  const data = [
    {
      value: 'test',
      timestamp: Date.now()
    }
  ];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));
  const list = getRecentSearchList();

  expect(localStorage.getItem).toBeCalledWith('recent-searches');
  expect(list).toEqual(data);
});

test('should set recent searches to localstorage', () => {
  const data = [
    {
      value: 'test',
      timestamp: 0
    }
  ];
  const time = Date.now();

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(data));
  Storage.prototype.setItem = jest.fn(() => null);
  jest.spyOn(Date, 'now').mockReturnValue(time);

  saveRecentSearchQuery('TestQuery');
  expect(localStorage.getItem).toBeCalledWith('recent-searches');

  data.unshift({
    value: 'TestQuery',
    timestamp: time
  });

  expect(localStorage.setItem).toBeCalledWith('recent-searches', JSON.stringify(data));
});
