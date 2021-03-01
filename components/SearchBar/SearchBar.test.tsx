/* eslint-disable @typescript-eslint/no-var-requires */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

test('should redirect after form submission', () => {
  const router = { push: jest.fn() };
  useRouter.mockReturnValue(router);

  render(<SearchBar />);

  const searchboxNode = screen.getByRole('searchbox');
  userEvent.type(searchboxNode, 'Liverpool');
  expect(searchboxNode).toHaveValue('Liverpool');

  const buttonNode = screen.getByRole('button');
  expect(buttonNode).toBeInTheDocument();
  userEvent.click(buttonNode);

  expect(router.push).toHaveBeenCalledWith('/for-sale/Liverpool');
});
