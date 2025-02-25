import { render, screen } from '@testing-library/react';

import ApartmentCard from './ApartmentCard';

jest.mock('../ApartmentDescription/ApartmentDescription', () => () => (
  <div>MockApartmentDescription</div>
));
jest.mock('../ButtonAddToFavorites/ButtonAddToFavorites', () => () => (
  <div>MockButtonAddToFavorites</div>
));

test('renders with apartment image', () => {
  render(
    <ApartmentCard
      apartment={{
        id: '23423',
        city: 'City',
        street: '5 Street',
        bedroom: 5,
        priceTag: '451000',
        imageUrl: '/img.jpg',
        phone: '000 111 222',
        agent: 'Agent Name'
      }}
    />
  );

  const imageNode = screen.getByRole('img');
  expect(imageNode).toHaveAttribute('alt', '5 Street');
  expect(imageNode).toHaveAttribute('src', '/img.jpg');

  expect(screen.getByText('MockApartmentDescription')).toBeInTheDocument();
  expect(screen.getByText('MockButtonAddToFavorites')).toBeInTheDocument();
});
