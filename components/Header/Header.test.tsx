import { render, screen } from '@testing-library/react';

import Header from './Header';

jest.mock('../Logo/Logo', () => () => <div>MockLogo</div>);
jest.mock('../ButtonFavorites/ButtonFavorites', () => () => <div>MockButtonFavorites</div>);

test('test', () => {
  render(<Header />);

  const logoNode = screen.getByRole('link');
  expect(logoNode).toHaveTextContent('MockLogo');
  expect(logoNode).toHaveAttribute('href', `/`);

  expect(screen.getByText('MockButtonFavorites')).toBeInTheDocument();
});
