import { useContext } from 'react';

import ApartmentsGrid from '../components/ApartmentsGrid/ApartmentsGrid';
import PageHead from '../components/PageHead/PageHead';
import TITLE from '../constants/titles';
import FavoritesContext from '../context/favorites';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const { apartments } = favorites;

  return (
    <>
      <PageHead title={TITLE.FAVORITES} />
      <ApartmentsGrid apartments={apartments} />
    </>
  );
}
