import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from './Pagination';

test('renders without crashing', () => {
  const onClick = jest.fn();
  render(<Pagination currentPage={1} totalPages={2} onClick={onClick} />);

  const prevButtonNode = screen.getByText('←');
  expect(prevButtonNode).toBeInTheDocument();
  expect(prevButtonNode).toBeDisabled();

  const firstButtonNode = screen.getByText('1');
  expect(firstButtonNode).toBeInTheDocument();
  expect(firstButtonNode).toBeDisabled();

  const secondButtonNode = screen.getByText('2');
  expect(secondButtonNode).toBeInTheDocument();
  expect(secondButtonNode).toBeEnabled();

  const nextButtonNode = screen.getByText('→');
  expect(nextButtonNode).toBeInTheDocument();
  expect(nextButtonNode).toBeEnabled();
});

test('after click on numeric button should execute callback with button id', () => {
  const onClick = jest.fn();
  render(<Pagination currentPage={1} totalPages={2} onClick={onClick} />);

  const secondButtonNode = screen.getByText('2');

  userEvent.click(secondButtonNode);
  expect(onClick).toHaveBeenCalledWith(2);
});

test('after click on next button should execute callback with next button id', () => {
  const onClick = jest.fn();
  render(<Pagination currentPage={2} totalPages={4} onClick={onClick} />);

  const nextButtonNode = screen.getByText('→');

  userEvent.click(nextButtonNode);
  expect(onClick).toHaveBeenCalledWith(3);
});
