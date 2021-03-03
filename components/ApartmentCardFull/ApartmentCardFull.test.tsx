import { render, screen } from '@testing-library/react';

import ApartmentCardFull from './ApartmentCardFull';

jest.mock('../ApartmentDescription/ApartmentDescription', () => () => <div>MockDescription</div>);
jest.mock('../ButtonAddToFavorites/ButtonAddToFavorites', () => () => (
  <div>MockAddToFavorites</div>
));
jest.mock('../AgentContactInfo/AgentContactInfo', () => () => <div>MockAgentContactInfo</div>);

test('renders without crashing', () => {
  render(
    <ApartmentCardFull
      apartment={{
        id: '2',
        city: 'Test City',
        street: '6 Street',
        bedroom: 5,
        priceTag: '451000',
        imageUrl: '/img.jpg',
        phone: '000 111 222',
        agent: 'Agent Name'
      }}
    />
  );

  const imageNode = screen.getByRole('img');
  expect(imageNode).toHaveAttribute('alt', '6 Street');
  expect(imageNode).toHaveAttribute('src', '/img.jpg');

  expect(screen.getByText('MockDescription')).toBeInTheDocument();
  expect(screen.getByText('MockAddToFavorites')).toBeInTheDocument();
  expect(screen.getByText('MockAgentContactInfo')).toBeInTheDocument();
});
