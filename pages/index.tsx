import PageHead from '../components/PageHead/PageHead';
import RecentSearches from '../components/RecentSearches/RecentSearches';
import SearchBar from '../components/SearchBar/SearchBar';
import TITLE from '../constants/titles';

export default function Home() {
  return (
    <>
      <PageHead title={TITLE.HOME} />
      <SearchBar />
      <RecentSearches />
    </>
  );
}
