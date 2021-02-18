import { getFullPrice } from './helpers';

test('basic', () => {
  expect(getFullPrice(4)).toBe(`£4,000`);
});
