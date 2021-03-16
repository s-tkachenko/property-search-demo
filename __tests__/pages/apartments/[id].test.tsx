import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import * as helper from '../../../services/api/apartments';

test('renders apartment details page without crashing', async () => {
  const spy = jest.spyOn(helper, 'getApartmentById');
  spy.mockReturnValue(
    Promise.resolve({
      id: '23423',
      city: 'City',
      street: '5 Street',
      bedroom: 5,
      priceTag: '451000',
      imageUrl: '/img.jpg',
      phone: '000 111 222',
      agent: 'Agent Name'
    })
  );

  const { render } = await getPage({
    route: '/apartments/3723f236-5547-4da6-b4ee-64c23b1f7a2a'
  });

  render();

  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(screen.getByText('5 Street')).toBeInTheDocument();
  expect(screen.getByText('Agent Name')).toBeInTheDocument();
});
