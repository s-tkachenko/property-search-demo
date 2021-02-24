import { render, screen } from '@testing-library/react';

import AgentContactInfo from './AgentContactInfo';

test('renders agent contact info', () => {
  const testName = 'agent name';
  const testTel = '000 111';

  render(<AgentContactInfo name={testName} tel={testTel} />);

  expect(screen.getByText('Marketed by')).toBeInTheDocument();
  expect(screen.getByText(testName)).toBeInTheDocument();
  expect(screen.getByText('Estate agent')).toBeInTheDocument();
  expect(screen.getByText(testTel)).toBeInTheDocument();

  const callButtonNode = screen.getByRole('link');
  expect(callButtonNode).toHaveTextContent('Call agent');
  expect(callButtonNode).toHaveAttribute('href', `tel:${testTel}`);
});
