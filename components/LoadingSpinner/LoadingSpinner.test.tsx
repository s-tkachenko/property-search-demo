import { render, screen } from '@testing-library/react';

import LoadingSpinner from './LoadingSpinner';

test('renders without crashing', () => {
  render(<LoadingSpinner />);

  expect(screen.getByTestId('spinner')).toBeInTheDocument();
});
