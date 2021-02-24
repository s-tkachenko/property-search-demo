import { render, screen } from '@testing-library/react';

import ApartmentDescription from './ApartmentDescription';

test('renders without errors', () => {
  render(<ApartmentDescription street="4 Street" city="City" bedroom={5} price="$100" />);

  expect(screen.getByText('4 Street')).toBeInTheDocument();
  expect(screen.getByText('City')).toBeInTheDocument();
  expect(screen.getByText('x5')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
});
