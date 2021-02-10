import PageHead from '../components/PageHead/PageHead';
import SearchBar from '../components/SearchBar/SearchBar';
import TITLE from '../constants/titles';

export default function Home() {
  return (
    <>
      <PageHead title={TITLE.HOME} />
      <SearchBar />
    </>
  );
}
