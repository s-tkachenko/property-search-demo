import { render, screen } from '@testing-library/react';

import Logo from './Logo';

test('renders without crashing', () => {
  render(<Logo />);

  expect(screen.getByTestId('logo')).toBeInTheDocument();
});
