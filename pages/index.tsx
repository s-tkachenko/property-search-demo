import { useRouter } from 'next/router';

import PageHead from '../components/PageHead/PageHead';
import Search from '../components/Search/Search';
import { CLIENT } from '../constants/routes';
import TITLE from '../constants/titles';

export default function Home() {
  const router = useRouter();

  const handleSearchResults = (query: string) => {
    router.push(CLIENT.FIND_APARTMENTS_BY_QUERY(query));
  };

  return (
    <>
      <PageHead title={TITLE.HOME} />
      <Search onSubmit={handleSearchResults} />
    </>
  );
}
