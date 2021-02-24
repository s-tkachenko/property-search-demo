import { render, screen } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

test('renders a default error message', () => {
  render(<ErrorMessage />);

  expect(
    screen.getByText('unexpected error', {
      exact: false
    })
  ).toBeInTheDocument();
});

test('renders an error message', () => {
  render(<ErrorMessage message="error" />);

  expect(screen.getByText('error')).toBeInTheDocument();
});
