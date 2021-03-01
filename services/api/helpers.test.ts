import {
  getFullPrice,
  getImageUrl,
  getRouterParamIntValue,
  getRouterParamStringValue
} from './helpers';

test('should convert number to full price string', () => {
  expect(getFullPrice(4)).toBe(`£4,000`);
});

test('should return full image url by image id', () => {
  expect(getImageUrl(1)).toBe('/mock-images/img1.jpg');
});

test('should return string value', () => {
  expect(getRouterParamStringValue(['test'])).toBe('');
  expect(getRouterParamStringValue('test')).toBe('test');
});

test('should return integer value', () => {
  expect(getRouterParamIntValue('test')).toBe(null);
  expect(getRouterParamIntValue(['33'])).toBe(null);
  expect(getRouterParamIntValue('33')).toBe(33);
  expect(getRouterParamIntValue('33.8')).toBe(33);
});
