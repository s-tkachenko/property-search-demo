import { render, screen } from '@testing-library/react';

import ContentGrid from './ContentGrid';

test('renders without crashing', () => {
  render(<ContentGrid>TestContent</ContentGrid>);

  expect(screen.getByText('TestContent')).toBeInTheDocument();
});
