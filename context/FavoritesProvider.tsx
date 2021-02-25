import useFavoritesReducer from '../reducers/useFavoritesReducer';
import FavoritesContext from './FavoritesContext';

type Props = {
  children: React.ReactNode;
};

export default function FavoritesProvider({ children }: Props) {
  const { favorites, favoritesDispatch } = useFavoritesReducer();

  return (
    <FavoritesContext.Provider value={{ favorites, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}
