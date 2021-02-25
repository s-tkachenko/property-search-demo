import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import Layout from '../components/Layout/Layout';
import FavoritesContext from '../context/FavoritesContext';
import { actionTypes } from '../reducers/favoritesReducer';
import useFavoritesReducer from '../reducers/useFavoritesReducer';
import { getFavorites, setFavorites } from '../services/local-storage/favorites';

function App({ Component, pageProps }: AppProps) {
  const { favorites, favoritesDispatch } = useFavoritesReducer();

  useEffect(() => {
    favoritesDispatch({
      type: actionTypes.POPULATE_FAVORITES,
      payload: {
        apartments: getFavorites()
      }
    });
  }, []);

  useEffect(() => {
    const { apartments } = favorites;
    setFavorites(apartments);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesDispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoritesContext.Provider>
  );
}

export default App;
