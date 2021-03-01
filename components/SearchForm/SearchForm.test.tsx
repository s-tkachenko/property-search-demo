import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchForm from './SearchForm';

test('renders the form without crashing', () => {
  render(
    <SearchForm onSubmit={() => jest.fn()} placeholder="TestPlaceholder" promptOptions={[]} />
  );

  const searchboxNode = screen.getByRole('searchbox');
  expect(searchboxNode).toBeInTheDocument();
  expect(searchboxNode).toHaveAttribute('placeholder', 'TestPlaceholder');

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('should call the function after form submission', () => {
  const onSubmit = jest.fn();
  render(<SearchForm onSubmit={onSubmit} placeholder="TestPlaceholder" promptOptions={[]} />);

  const searchboxNode = screen.getByRole('searchbox');
  userEvent.type(searchboxNode, 'TestSearchRequest');
  expect(searchboxNode).toHaveValue('TestSearchRequest');

  const buttonNode = screen.getByRole('button');
  expect(buttonNode).toBeInTheDocument();
  userEvent.click(buttonNode);

  expect(onSubmit).toHaveBeenCalledWith('TestSearchRequest');
});

test('should call the function after clicking on the prompt', () => {
  const onSubmit = jest.fn();
  render(
    <SearchForm
      onSubmit={onSubmit}
      placeholder="Placeholder"
      promptOptions={['prompt1', 'prompt2']}
    />
  );

  const searchboxNode = screen.getByRole('searchbox');
  userEvent.type(searchboxNode, 'pro');

  const promptNode = screen.getByText('prompt2');
  expect(promptNode).toBeInTheDocument();
  userEvent.click(promptNode);

  expect(onSubmit).toHaveBeenCalledWith('prompt2');

  screen.debug();
});
