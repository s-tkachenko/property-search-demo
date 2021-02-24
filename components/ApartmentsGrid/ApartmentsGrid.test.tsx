import { render, screen } from '@testing-library/react';

import ApartmentsGrid from './ApartmentsGrid';

jest.mock('../ApartmentCard/ApartmentCard', () => () => <div>MockApartmentCard</div>);

test('renders empty list', () => {
  render(<ApartmentsGrid apartments={[]} />);

  expect(screen.queryByRole('link')).not.toBeInTheDocument();
});

test('renders list of elements', () => {
  const apartments = [
    {
      id: '23422',
      city: 'City 1',
      street: '4 Street',
      bedroom: 4,
      priceTag: '302000',
      imageUrl: '/img1.jpg',
      phone: '100 111 222',
      agent: 'Agent'
    },
    {
      id: '23423',
      city: 'City 2',
      street: '6 Street',
      bedroom: 5,
      priceTag: '451000',
      imageUrl: '/img2.jpg',
      phone: '200 111 222',
      agent: 'Agent Name'
    }
  ];
  render(<ApartmentsGrid apartments={apartments} />);

  const linkNodes = screen.getAllByRole('link');
  expect(linkNodes).toHaveLength(2);

  for (let i = 0; i < linkNodes.length; i++) {
    expect(linkNodes[i]).toHaveAttribute('href', `/apartments/${apartments[i].id}`);
  }
});
