import { render, screen } from '@testing-library/react';

import ButtonFavorites from './ButtonFavorites';

test('renders without crashing', () => {
  render(<ButtonFavorites />);

  expect(screen.getByRole('link')).toHaveAttribute('href', '/favorites');
});
