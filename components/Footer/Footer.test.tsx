import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

test('renders a copyright text', () => {
  const testMessage = '© 2021';

  render(<Footer copyrightText={testMessage} />);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
