import { render, screen } from '@testing-library/react';

import ApartmentsList from './ApartmentsList';

jest.mock('../Pagination/Pagination', () => () => <div>MockPagination</div>);
jest.mock('../LoadingSpinner/LoadingSpinner', () => () => <div>MockLoadingSpinner</div>);
jest.mock('../ApartmentsGrid/ApartmentsGrid', () => () => <div>MockApartmentsGrid</div>);

test('renders the loading indicator', () => {
  render(<ApartmentsList location="London" />);

  expect(screen.getByText('MockLoadingSpinner')).toBeInTheDocument();
  expect(screen.queryByText('MockPagination')).not.toBeInTheDocument();
  expect(screen.queryByText('MockApartmentsGrid')).not.toBeInTheDocument();
});

test('renders an error message', () => {
  render(<ApartmentsList error={new Error()} location="London" />);

  expect(screen.getByText('error', { exact: false })).toBeInTheDocument();
  expect(screen.queryByText('MockPagination')).not.toBeInTheDocument();
  expect(screen.queryByText('MockApartmentsGrid')).not.toBeInTheDocument();
});

test('renders the "no results" message', () => {
  render(
    <ApartmentsList
      data={{
        apartments: [],
        page: 1,
        totalPages: 1
      }}
      location="London"
    />
  );

  expect(screen.getByText('no results', { exact: false })).toBeInTheDocument();
  expect(screen.queryByText('MockPagination')).not.toBeInTheDocument();
  expect(screen.queryByText('MockApartmentsGrid')).not.toBeInTheDocument();
});

test('renders the list of apartments', () => {
  render(
    <ApartmentsList
      data={{
        apartments: [
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
        ],
        page: 1,
        totalPages: 1
      }}
      location="London"
    />
  );

  expect(screen.getByText('MockPagination')).toBeInTheDocument();
  expect(screen.getByText('MockApartmentsGrid')).toBeInTheDocument();
});
