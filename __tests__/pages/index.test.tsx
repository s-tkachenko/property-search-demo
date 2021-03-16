import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

test('renders home page without crashing', async () => {
  const { render } = await getPage({
    route: '/'
  });

  render();
  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(screen.getByRole('searchbox')).toBeInTheDocument();
  expect(screen.getByText('Recent searches')).toBeInTheDocument();
});
