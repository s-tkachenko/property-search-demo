import { screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';

test('renders for-sale page without crashing', async () => {
  const { render } = await getPage({
    route: '/for-sale/London'
  });

  render();

  expect(screen.getByTestId('logo')).toBeInTheDocument();
  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});
