import '../styles/globals.css';

import { AppProps } from 'next/app';
import { useEffect, useReducer } from 'react';

import Layout from '../components/Layout/Layout';
import FavoritesContext from '../context/favorites';
import favoritesReducer, { actionTypes, initialState } from '../reducers/favorites';
import { getFavorites, setFavorites } from '../services/local-storage/favorites';

function App({ Component, pageProps }: AppProps) {
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, initialState);

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
