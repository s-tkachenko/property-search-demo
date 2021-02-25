import { useContext } from 'react';

import ApartmentsGrid from '../components/ApartmentsGrid/ApartmentsGrid';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import PageHead from '../components/PageHead/PageHead';
import MSG from '../constants/messages';
import TITLE from '../constants/titles';
import FavoritesContext from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const { apartments } = favorites;

  return (
    <>
      <PageHead title={TITLE.FAVORITES} />
      {apartments.length > 0 ? (
        <ApartmentsGrid apartments={apartments} />
      ) : (
        <ErrorMessage message={MSG.INFO_NO_FAVORITES} />
      )}
    </>
  );
}
