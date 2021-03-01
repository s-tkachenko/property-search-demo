import { render, screen } from '@testing-library/react';

import RecentSearches from './RecentSearches';

test('renders an empty list', () => {
  render(<RecentSearches list={[]} />);

  expect(screen.getByText('Your recent searches will appear here')).toBeInTheDocument();
});

test('renders an item', () => {
  const timestamp = Date.now();
  const timeString = new Date(timestamp).toLocaleString();

  render(
    <RecentSearches
      list={[
        {
          value: 'test-value',
          timestamp
        }
      ]}
    />
  );

  const elementNode = screen.getByRole('link');
  expect(elementNode).toBeInTheDocument();
  expect(elementNode).toHaveAttribute('href', '/for-sale/test-value');

  expect(screen.getByText(timeString)).toBeInTheDocument();
});
