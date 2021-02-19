import React from 'react';
import Footer from './Footer';

import { render, screen } from '@testing-library/react';

it('renders with a copyright text', () => {
  const testMessage = '© 2021';

  render(<Footer copyrightText={testMessage} />);

  expect(screen.queryByText(testMessage)).toBeInTheDocument();
});
