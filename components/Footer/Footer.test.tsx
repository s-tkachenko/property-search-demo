import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

it('renders with a copyright text', () => {
  const testMessage = '© 2021';

  render(<Footer copyrightText={testMessage} />);

  expect(screen.queryByText(testMessage)).toBeInTheDocument();
});
