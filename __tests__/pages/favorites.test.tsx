import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

test('renders favorites page without crashing', async () => {
  const { render } = await getPage({
    route: '/favorites'
  });

  render();

  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(screen.getByText('No Favorites Yet!')).toBeInTheDocument();
});
