import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import FavoritesProvider from '../../context/FavoritesProvider';
import ButtonAddToFavorites from './ButtonAddToFavorites';

test('button changes class name after click', () => {
  render(
    <FavoritesProvider>
      <ButtonAddToFavorites
        apartment={{
          id: '23423',
          city: 'City',
          street: '5 Street',
          bedroom: 5,
          priceTag: '451000',
          imageUrl: '/img.jpg',
          phone: '000 111 222',
          agent: 'Agent Name'
        }}
      />
    </FavoritesProvider>
  );
  const buttonNode = screen.getByTestId('add-to-favorites');

  expect(buttonNode).toBeInTheDocument();
  expect(buttonNode).toHaveClass('notFavorite', {
    exact: false
  });

  userEvent.click(buttonNode);

  expect(buttonNode).toHaveClass('favorite', {
    exact: false
  });
});
